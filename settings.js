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

