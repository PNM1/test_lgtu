//переключение сраниц
const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-menu a');

function switchPage(pageId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
    history.pushState({ page: pageId }, '', `#${pageId}`);
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        switchPage(page);
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        switchPage(hash);
    } else {
        switchPage('home');
    }
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        switchPage(event.state.page);
    } else {
        switchPage('home');
    }
});

//боковая панель
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const profileBtn = document.getElementById('profileBtn');
const closeSidebar = document.getElementById('closeSidebar');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidebarFunc() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

profileBtn.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebarFunc();
    }
});

//вход и регистрация преключение
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function showFieldError(input, message) {
    const existingError = input.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    const error = document.createElement('div');
    error.className = 'field-error';
    error.textContent = message;
    
    input.parentNode.appendChild(error);
    input.classList.add('error');
    
    input.addEventListener('focus', function removeError() {
        error.remove();
        input.classList.remove('error');
        input.removeEventListener('focus', removeError);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

//функция отправки данных на сервер
async function sendFormData(action, data) {
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data, action})
        });
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            const text = await response.text();
            console.error('Ответ не JSON:', text.substring(0, 200));
            throw new Error('Сервер временно недоступен');
        }
        
        const result = await response.json();
        
        if (!response.ok) {
            if (result.errors) {
                throw { message: result.message, errors: result.errors };
            }
            throw new Error(result.message || 'Ошибка сервера');
        }
        
        return result;
    } catch (error) {
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            throw new Error('Нет подключения к серверу. Проверьте соединение.');
        }
        throw error;
    }
}

//обработка формы входа
document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value;
    
    let isValid = true;
    
    if (!validateEmail(email)) {
        showFieldError(form.querySelector('input[type="email"]'), 'Введите корректный email');
        isValid = false;
    }
    
    if (!validatePassword(password)) {
        showFieldError(form.querySelector('input[type="password"]'), 'Пароль должен содержать минимум 6 символов');
        isValid = false;
    }
    
    if (!isValid) return;
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    try {
        const result = await sendFormData('login', { email, password });
        
        if (result.success) {
            showNotification('Успешный вход!', 'success');
            closeSidebarFunc();
            updateUserInterface(result.user);
        }
    } catch (error) {
        if (error.errors) {
            Object.keys(error.errors).forEach(field => {
                const input = form.querySelector(`[name="${field}"]`) || 
                             form.querySelector(`input[type="${field}"]`);
                if (input) {
                    showFieldError(input, error.errors[field]);
                }
            });
            showNotification(error.message, 'error');
        } else {
            showNotification(error.message, 'error');
        }
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

//регистрация
document.getElementById('register').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelectorAll('input[type="email"]')[0].value.trim();
    const password = form.querySelector('input[type="password"]').value;
    
    let isValid = true;
    
    if (name.length < 2) {
        showFieldError(form.querySelector('input[type="text"]'), 'Имя должно содержать минимум 2 символа');
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        showFieldError(form.querySelectorAll('input[type="email"]')[0], 'Введите корректный email');
        isValid = false;
    }
    
    if (!validatePassword(password)) {
        showFieldError(form.querySelector('input[type="password"]'), 'Пароль должен содержать минимум 6 символов');
        isValid = false;
    }
    
    if (!isValid) return;
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    try {
        const result = await sendFormData('register', { name, email, password });
        
        if (result.success) {
            showNotification('Регистрация успешна!', 'success');
            loginTab.click();
            form.reset();
        }
    } catch (error) {
        if (error.errors) {
            Object.keys(error.errors).forEach(field => {
                let input;
                if (field === 'name') input = form.querySelector('input[type="text"]');
                if (field === 'email') input = form.querySelectorAll('input[type="email"]')[0];
                if (field === 'password') input = form.querySelector('input[type="password"]');
                
                if (input) {
                    showFieldError(input, error.errors[field]);
                }
            });
            showNotification(error.message, 'error');
        } else {
            showNotification(error.message, 'error');
        }
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

function updateUserInterface(user) {
    const profileBtn = document.getElementById('profileBtn');
    profileBtn.innerHTML = `<span>👤</span> ${user.name || 'Профиль'}`;
    
    const navMenu = document.querySelector('.nav-menu ul');
    if (!document.getElementById('profile-link')) {
        const profileLink = document.createElement('li');
        profileLink.innerHTML = '<a href="#" data-page="profile" id="profile-link">Личный кабинет</a>';
        navMenu.appendChild(profileLink);
        
        document.getElementById('profile-link').addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('profile');
        });
    }
}

//замена браузерным уведомлениям о валидации
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        
        if (this.validity.valueMissing) {
            showFieldError(this, 'Это поле обязательно для заполнения');
        } else if (this.validity.typeMismatch) {
            showFieldError(this, 'Введите корректный email (пример: name@domain.com)');
        }
    });
});

//кнопка входа в hero
const heroLoginBtn = document.getElementById('heroLoginBtn');
heroLoginBtn.addEventListener('click', () => {

    openSidebar();
    loginTab.click();
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});