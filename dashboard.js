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

if (overlay) {
    overlay.addEventListener('click', function() {
        closeProfile();
        closeSettingsPanelFunc();
        closeMenuPanelFunc();
    });
}

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

//прогноз
const menuItems = document.querySelectorAll('.menu-item');
let forecastMenuItem_element = null;

menuItems.forEach(item => {
    if (item.textContent.trim().toLowerCase() === 'прогноз') {
        forecastMenuItem_element = item;
    }
});

if (forecastMenuItem_element) {
    forecastMenuItem_element.addEventListener('click', function() {
        const forecastSection = document.getElementById('forecast-section');
        if (forecastSection) {
            forecastSection.style.display = 'block';
            
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        }
    });
}

window.addEventListener('load', function() {
    const forecastSection = document.getElementById('forecast-section');
    if (forecastSection) {
        forecastSection.style.display = 'block';
    }
});