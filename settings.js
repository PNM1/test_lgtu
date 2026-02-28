// Настройки боковая панель
const settingsSidebar = document.getElementById('settingsSidebar');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettings = document.getElementById('closeSettings');

function openSettings() {
    settingsSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSettingsFunc() {
    settingsSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

settingsBtn.addEventListener('click', openSettings);
closeSettings.addEventListener('click', closeSettingsFunc);

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
        
        // Обновление активного класса
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
        
        // Применение темы
        body.className = `theme-${theme}`;
        localStorage.setItem('theme', theme);
    });
});

overlay.addEventListener('click', function() {
    closeSidebarFunc();
    closeSettingsFunc();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebar.classList.contains('active')) {
            closeSidebarFunc();
        }
        if (settingsSidebar.classList.contains('active')) {
            closeSettingsFunc();
        }
    }
});