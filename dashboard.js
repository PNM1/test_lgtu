// Открытие профиля
const profileSidebar = document.getElementById('profileSidebar');
const profileBtn = document.getElementById('profileBtn');
const closeProfileSidebar = document.getElementById('closeProfileSidebar');
const overlay = document.getElementById('overlay');

function openProfile() {
    profileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProfile() {
    profileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (profileBtn) {
    profileBtn.addEventListener('click', openProfile);
}

if (closeProfileSidebar) {
    closeProfileSidebar.addEventListener('click', closeProfile);
}

// Открытие настроек
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

if (settingsButton) {
    settingsButton.addEventListener('click', openSettingsPanel);
}

if (closeSettingsPanel) {
    closeSettingsPanel.addEventListener('click', closeSettingsPanelFunc);
}

// Открытие меню
const menuPanel = document.getElementById('menuSidebar');
const menuButton = document.getElementById('menuBtn');
const closeMenuPanel = document.getElementById('closeMenu');

function openMenuPanel() {
    menuPanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuPanelFunc() {
    menuPanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (menuButton) {
    menuButton.addEventListener('click', openMenuPanel);
}

if (closeMenuPanel) {
    closeMenuPanel.addEventListener('click', closeMenuPanelFunc);
}

// Закрытие по оверлею
if (overlay) {
    overlay.addEventListener('click', function() {
        closeProfile();
        closeSettingsPanelFunc();
        closeMenuPanelFunc();
    });
}

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (profileSidebar && profileSidebar.classList.contains('active')) {
            closeProfile();
        }
        if (settingsPanel && settingsPanel.classList.contains('active')) {
            closeSettingsPanelFunc();
        }
        if (menuPanel && menuPanel.classList.contains('active')) {
            closeMenuPanelFunc();
        }
    }
});

// Темизация
const themeButtons = document.querySelectorAll('.theme-option');
const pageBody = document.body;

const currentTheme = localStorage.getItem('theme') || 'default';
pageBody.className = `theme-${currentTheme}`;

themeButtons.forEach(button => {
    if (button.dataset.theme === currentTheme) {
        button.classList.add('active');
    }
    
    button.addEventListener('click', function() {
        const theme = this.dataset.theme;
        
        themeButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        pageBody.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
    });
});

// Кнопка входа в пустом профиле
const loginButton = document.getElementById('profileLoginBtn');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}