// ========== ЛОГИКА ДЛЯ SPA (ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ) ==========
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

// ========== ЛОГИКА БОКОВОЙ ПАНЕЛИ ==========
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

// ========== ПЕРЕКЛЮЧЕНИЕ МЕЖДУ ВХОДОМ И РЕГИСТРАЦИЕЙ ==========
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

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С ФОРМАМИ ==========

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    // Удаляем существующее уведомление
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Добавляем в DOM
    document.body.appendChild(notification);
    
    // Показываем с анимацией
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Автоматически скрываем через 3 секунды
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Функция для отображения ошибок валидации
function showFieldError(input, message) {
    // Удаляем существующую ошибку
    const existingError = input.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Создаем новую ошибку
    const error = document.createElement('div');
    error.className = 'field-error';
    error.textContent = message;
    
    // Добавляем после поля ввода
    input.parentNode.appendChild(error);
    input.classList.add('error');
    
    // Удаляем ошибку при фокусе на поле
    input.addEventListener('focus', function removeError() {
        error.remove();
        input.classList.remove('error');
        input.removeEventListener('focus', removeError);
    });
}

// Функция валидации email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Функция валидации пароля
function validatePassword(password) {
    return password.length >= 6;
}

// Функция отправки данных на сервер
async function sendFormData(action, data) {
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data, action})
        });
        
        // Проверяем, что сервер вернул JSON
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

// ========== ОБРАБОТКА ФОРМЫ ВХОДА ==========
document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value;
    
    // Валидация
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
    
    // Блокируем кнопку
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    try {
        // Отправляем с действием 'login'
        const result = await sendFormData('login', { email, password });
        
        if (result.success) {
            showNotification('Успешный вход!', 'success');
            closeSidebarFunc();
            updateUserInterface(result.user);
        }
    } catch (error) {
        if (error.errors) {
            // Показываем детальные ошибки
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

// ========== ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ ==========
document.getElementById('register').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelectorAll('input[type="email"]')[0].value.trim();
    const password = form.querySelector('input[type="password"]').value;
    
    // Базовая валидация
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
    
    // Блокируем кнопку
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Отправка...';
    submitBtn.disabled = true;
    
    try {
        // Отправляем с действием 'register'
        const result = await sendFormData('register', { name, email, password });
        
        if (result.success) {
            showNotification('Регистрация успешна!', 'success');
            loginTab.click();
            form.reset();
        }
    } catch (error) {
        if (error.errors) {
            // Показываем детальные ошибки валидации
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

// Функция обновления интерфейса после авторизации
function updateUserInterface(user) {
    // Меняем кнопку профиля
    const profileBtn = document.getElementById('profileBtn');
    profileBtn.innerHTML = `<span>👤</span> ${user.name || 'Профиль'}`;
    
    // Можно добавить дополнительные элементы для авторизованного пользователя
    // Например, ссылку на личный кабинет в меню
    const navMenu = document.querySelector('.nav-menu ul');
    if (!document.getElementById('profile-link')) {
        const profileLink = document.createElement('li');
        profileLink.innerHTML = '<a href="#" data-page="profile" id="profile-link">Личный кабинет</a>';
        navMenu.appendChild(profileLink);
        
        // Добавляем обработчик для новой ссылки
        document.getElementById('profile-link').addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('profile');
        });
    }
}

//Узнал о и Заменил браузерные сообщени об инвалидации (не убирал стандартные) только для email
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault(); // отключаем стандартное сообщение
        
        if (this.validity.valueMissing) {
            showFieldError(this, 'Это поле обязательно для заполнения');
        } else if (this.validity.typeMismatch) {
            showFieldError(this, 'Введите корректный email (пример: name@domain.com)');
        }
    });
});

// ========== КНОПКА ВХОДА В HERO-СЕКЦИИ ==========
const heroLoginBtn = document.getElementById('heroLoginBtn');

heroLoginBtn.addEventListener('click', () => {
    // Открываем боковую панель
    openSidebar();
    
    // Переключаемся на вкладку входа (если вдруг была открыта регистрация)
    loginTab.click();
    
    // Прокручиваем к форме входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});