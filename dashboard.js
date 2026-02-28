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

// Кнопка входа в пустом профиле
const loginButton = document.getElementById('profileLoginBtn');
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}