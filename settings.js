const settingsPanel = document.getElementById('settingsSidebar');
const settingsButton = document.getElementById('settingsBtn');
const closeSettingsPanel = document.getElementById('closeSettings');

function openSettingsPanel() {
    settingsPanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSettingsPanelFunc() {
    settingsPanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

settingsButton.addEventListener('click', openSettingsPanel);
closeSettingsPanel.addEventListener('click', closeSettingsPanelFunc);

const themeOptions = document.querySelectorAll('.theme-option');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'default';
body.className = `theme-${savedTheme}`;

themeOptions.forEach(option => {
    if (option.dataset.theme === savedTheme) {
        option.classList.add('active');
    }
    
    option.addEventListener('click', function() {
        const theme = this.dataset.theme;
        
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
        
        body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
    });
});

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
    return password.length >= 8;
}

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