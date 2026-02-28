const profileSidebar = document.getElementById('profileSidebar');
const profileBtn = document.getElementById('profileBtn');
const closeProfileSidebar = document.getElementById('closeProfileSidebar');
const overlay = document.getElementById('overlay');

function hideAllSections() {
    const sections = [
        'forecast-section',
        'cows-search-section',
        'user-registration-section',
        'user-password-section',
        'herds-section',
        'history-section'
    ];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = 'none';
        }
    });
}

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
    overlay.addEventListener('click', function () {
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

window.addEventListener('load', function () {
    const forecastSection = document.getElementById('forecast-section');
    if (forecastSection) {
        forecastSection.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchCowBtn');
    const searchAllBtn = document.getElementById('searchAllCowBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            // Здесь будет функционал поиска
            console.log('Поиск коровы');
        });
    }

    if (searchAllBtn) {
        searchAllBtn.addEventListener('click', function () {
            // Здесь будет функционал вывода всех
            console.log('Вывести всех коров');
        });
    }
});

// Данные для таблицы коров (демонстрационные)
const cowsData = [
    { id: 1, number: "К-001", birthDate: "15.03.2020", departureDate: "-", currentLactation: "3", lactationStart: "10.01.2025", daysInMilk: "48", status: "Дойная", lastInsemination: "05.02.2025", successfulInsemination: "05.02.2025", pregnancyDays: "23", dryDate: "-", expectedDryDate: "15.11.2025", expectedCalvingDate: "16.11.2025", herdNumber: "1", herdName: "Основное" },
    { id: 2, number: "К-002", birthDate: "22.07.2021", departureDate: "-", currentLactation: "2", lactationStart: "01.12.2024", daysInMilk: "88", status: "Дойная", lastInsemination: "20.01.2025", successfulInsemination: "20.01.2025", pregnancyDays: "39", dryDate: "-", expectedDryDate: "10.10.2025", expectedCalvingDate: "27.10.2025", herdNumber: "1", herdName: "Основное" },
    { id: 3, number: "К-003", birthDate: "10.11.2019", departureDate: "-", currentLactation: "4", lactationStart: "05.03.2025", daysInMilk: "20", status: "Дойная", lastInsemination: "15.03.2025", successfulInsemination: "-", pregnancyDays: "-", dryDate: "-", expectedDryDate: "20.12.2025", expectedCalvingDate: "20.12.2025", herdNumber: "2", herdName: "Молочное" },
    { id: 4, number: "К-004", birthDate: "03.05.2022", departureDate: "-", currentLactation: "1", lactationStart: "10.02.2025", daysInMilk: "48", status: "Дойная", lastInsemination: "-", successfulInsemination: "-", pregnancyDays: "-", dryDate: "-", expectedDryDate: "10.01.2026", expectedCalvingDate: "10.01.2026", herdNumber: "2", herdName: "Молочное" },
    { id: 5, number: "К-005", birthDate: "18.09.2020", departureDate: "01.03.2025", currentLactation: "3", lactationStart: "15.08.2024", daysInMilk: "-", status: "Выбыла", lastInsemination: "10.07.2024", successfulInsemination: "10.07.2024", pregnancyDays: "-", dryDate: "01.03.2025", expectedDryDate: "01.05.2025", expectedCalvingDate: "18.04.2025", herdNumber: "3", herdName: "Резервное" },
    { id: 6, number: "К-006", birthDate: "30.11.2021", departureDate: "-", currentLactation: "2", lactationStart: "20.12.2024", daysInMilk: "68", status: "Дойная", lastInsemination: "25.02.2025", successfulInsemination: "25.02.2025", pregnancyDays: "3", dryDate: "-", expectedDryDate: "05.12.2025", expectedCalvingDate: "05.12.2025", herdNumber: "1", herdName: "Основное" },
    { id: 7, number: "К-007", birthDate: "12.02.2023", departureDate: "-", currentLactation: "1", lactationStart: "01.03.2025", daysInMilk: "24", status: "Дойная", lastInsemination: "-", successfulInsemination: "-", pregnancyDays: "-", dryDate: "-", expectedDryDate: "01.02.2026", expectedCalvingDate: "01.02.2026", herdNumber: "3", herdName: "Резервное" },
    { id: 8, number: "К-008", birthDate: "07.04.2020", departureDate: "-", currentLactation: "4", lactationStart: "10.02.2025", daysInMilk: "48", status: "Дойная", lastInsemination: "12.03.2025", successfulInsemination: "12.03.2025", pregnancyDays: "16", dryDate: "-", expectedDryDate: "20.12.2025", expectedCalvingDate: "20.12.2025", herdNumber: "2", herdName: "Молочное" },
    { id: 9, number: "К-009", birthDate: "25.06.2022", departureDate: "-", currentLactation: "1", lactationStart: "15.01.2025", daysInMilk: "73", status: "Дойная", lastInsemination: "28.02.2025", successfulInsemination: "-", pregnancyDays: "-", dryDate: "-", expectedDryDate: "15.12.2025", expectedCalvingDate: "15.12.2025", herdNumber: "1", herdName: "Основное" },
    { id: 10, number: "К-010", birthDate: "03.03.2019", departureDate: "-", currentLactation: "5", lactationStart: "05.01.2025", daysInMilk: "83", status: "Дойная", lastInsemination: "18.02.2025", successfulInsemination: "18.02.2025", pregnancyDays: "40", dryDate: "-", expectedDryDate: "25.11.2025", expectedCalvingDate: "27.11.2025", herdNumber: "2", herdName: "Молочное" },
    { id: 11, number: "К-011", birthDate: "19.08.2023", departureDate: "-", currentLactation: "1", lactationStart: "20.02.2025", daysInMilk: "38", status: "Дойная", lastInsemination: "-", successfulInsemination: "-", pregnancyDays: "-", dryDate: "-", expectedDryDate: "20.01.2026", expectedCalvingDate: "20.01.2026", herdNumber: "3", herdName: "Резервное" },
    { id: 12, number: "К-012", birthDate: "11.10.2021", departureDate: "-", currentLactation: "2", lactationStart: "25.01.2025", daysInMilk: "63", status: "Дойная", lastInsemination: "05.03.2025", successfulInsemination: "05.03.2025", pregnancyDays: "23", dryDate: "-", expectedDryDate: "15.12.2025", expectedCalvingDate: "12.12.2025", herdNumber: "1", herdName: "Основное" }
];

// Переменные для пагинации
let currentPage = 1;
let rowsPerPage = 5;
let filteredData = [...cowsData];

function changeRowsPerPage() {
    const input = document.getElementById('rowsPerPageInput');
    let newValue = parseInt(input.value);

    // Валидация
    if (isNaN(newValue) || newValue < 1) {
        newValue = 1;
    } else if (newValue > 100) {
        newValue = 100;
    }

    input.value = newValue;
    rowsPerPage = newValue;
    currentPage = 1; // Сброс на первую страницу
    displayCowTable();
}

// Функция отображения таблицы с пагинацией
function displayCowTable() {
    const tableBody = document.getElementById('cows-table-body');
    if (!tableBody) return;

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (paginatedData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="14" class="table-empty-message">Нет данных для отображения</td></tr>';
    } else {
        paginatedData.forEach(cow => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <button class="edit-btn" data-cow-id="${cow.id}" title="Редактировать"><img class="edit-btn-img" src="160872.png"></button>
                </td>
                <td>${cow.number}</td>
                <td>${cow.birthDate}</td>
                <td>${cow.departureDate}</td>
                <td>${cow.currentLactation}</td>
                <td>${cow.lactationStart}</td>
                <td>${cow.daysInMilk}</td>
                <td>${cow.status}</td>
                <td>${cow.lastInsemination}</td>
                <td>${cow.successfulInsemination}</td>
                <td>${cow.pregnancyDays}</td>
                <td>${cow.dryDate}</td>
                <td>${cow.expectedDryDate}</td>
                <td>${cow.expectedCalvingDate}</td>
            `;
            tableBody.appendChild(row);
        });

        // Добавляем обработчики для кнопок редактирования
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const cowId = parseInt(this.dataset.cowId);
                openEditModal(cowId);
            });
        });
    }

    updatePaginationInfo();
}

// Функция обновления информации о пагинации
function updatePaginationInfo() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const paginationInfo = document.getElementById('paginationInfo');

    if (!prevBtn || !nextBtn || !paginationInfo) return;

    const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;

    paginationInfo.textContent = `Страница ${currentPage} из ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Функция перехода на предыдущую страницу
function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayCowTable();
    }
}

// Функция перехода на следующую страницу
function goToNextPage() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCowTable();
    }
}

// Функция поиска коров
// Функция поиска коров (по номеру коровы и по стаду)
function searchCows() {
    const searchInput = document.getElementById('cow-search-input');
    const herdInput = document.getElementById('herd-input');

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const herdTerm = herdInput ? herdInput.value.toLowerCase().trim() : '';

    // Фильтрация данных
    filteredData = cowsData.filter(cow => {
        let matchesSearch = true;
        let matchesHerd = true;

        // Поиск по номеру коровы
        if (searchTerm) {
            matchesSearch = cow.number.toLowerCase().includes(searchTerm);
        }

        // Поиск по стаду (по номеру стада ИЛИ по названию стада)
        if (herdTerm) {
            matchesHerd = cow.herdNumber.toLowerCase().includes(herdTerm) ||
                cow.herdName.toLowerCase().includes(herdTerm);
        }

        return matchesSearch && matchesHerd;
    });

    // Сброс на первую страницу
    currentPage = 1;
    displayCowTable();
}

// Функция вывода всех коров
function showAllCows() {
    filteredData = [...cowsData];
    currentPage = 1;
    displayCowTable();

    // Очистка полей ввода
    const searchInput = document.getElementById('cow-search-input');
    const herdInput = document.getElementById('herd-input');

    if (searchInput) searchInput.value = '';
    if (herdInput) herdInput.value = '';
}

// Инициализация обработчиков событий
document.addEventListener('DOMContentLoaded', function () {

    // Кнопки пагинации
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevPage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextPage);
    }

    // Кнопки поиска
    const searchBtn = document.getElementById('searchCowBtn');
    const searchAllBtn = document.getElementById('searchAllCowBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', searchCows);
    }

    if (searchAllBtn) {
        searchAllBtn.addEventListener('click', showAllCows);
    }

    // Поиск при нажатии Enter
    const searchInput = document.getElementById('cow-search-input');
    const herdInput = document.getElementById('herd-input');

    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchCows();
            }
        });
    }

    if (herdInput) {
        herdInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchCows();
            }
        });
    }

    const rowsPerPageInput = document.getElementById('rowsPerPageInput');
    if (rowsPerPageInput) {
        rowsPerPageInput.addEventListener('change', changeRowsPerPage);

        // Опционально: применение при вводе с задержкой
        let timeout;
        rowsPerPageInput.addEventListener('input', function () {
            clearTimeout(timeout);
            timeout = setTimeout(changeRowsPerPage, 500);
        });
    }
    const closeModalBtn = document.getElementById('closeModal');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const saveCowBtn = document.getElementById('saveCowBtn');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeEditModal);
    }

    if (cancelModalBtn) {
        cancelModalBtn.addEventListener('click', closeEditModal);
    }

    if (saveCowBtn) {
        saveCowBtn.addEventListener('click', saveCowChanges);
    }

    // Закрытие по клику на overlay
    if (overlay) {
        overlay.addEventListener('click', function () {
            closeEditModal();
        });
    }

    // Закрытие по Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('editCowModal');
            if (modal && modal.classList.contains('show')) {
                closeEditModal();
            }
        }
    });
});

// Переменные для модального окна
let currentEditCowId = null;

// Функция открытия модального окна
function openEditModal(cowId) {
    const modal = document.getElementById('editCowModal');
    if (!modal) return;

    currentEditCowId = cowId;
    const cow = cowsData.find(c => c.id === cowId);

    if (cow) {
        // Заполняем поля формы
        document.getElementById('editCowId').value = cow.id;
        document.getElementById('editCowNumber').value = cow.number;
        document.getElementById('editBirthDate').value = cow.birthDate;
        document.getElementById('editDepartureDate').value = cow.departureDate;
        document.getElementById('editCurrentLactation').value = cow.currentLactation;
        document.getElementById('editLactationStart').value = cow.lactationStart;
        document.getElementById('editDaysInMilk').value = cow.daysInMilk;
        document.getElementById('editStatus').value = cow.status;
        document.getElementById('editLastInsemination').value = cow.lastInsemination;
        document.getElementById('editSuccessfulInsemination').value = cow.successfulInsemination;
        document.getElementById('editPregnancyDays').value = cow.pregnancyDays;
        document.getElementById('editDryDate').value = cow.dryDate;
        document.getElementById('editExpectedDryDate').value = cow.expectedDryDate;
        document.getElementById('editExpectedCalvingDate').value = cow.expectedCalvingDate;
        document.getElementById('editHerdNumber').value = cow.herdNumber;
        document.getElementById('editHerdName').value = cow.herdName;
    }

    modal.classList.add('show');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна
function closeEditModal() {
    const modal = document.getElementById('editCowModal');
    if (!modal) return;

    modal.classList.remove('show');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentEditCowId = null;
}

// Функция сохранения изменений
function saveCowChanges() {
    if (!currentEditCowId) return;

    const cowIndex = cowsData.findIndex(c => c.id === currentEditCowId);
    if (cowIndex === -1) return;

    // Сохраняем изменения
    cowsData[cowIndex] = {
        id: currentEditCowId,
        number: document.getElementById('editCowNumber').value,
        birthDate: document.getElementById('editBirthDate').value,
        departureDate: document.getElementById('editDepartureDate').value,
        currentLactation: document.getElementById('editCurrentLactation').value,
        lactationStart: document.getElementById('editLactationStart').value,
        daysInMilk: document.getElementById('editDaysInMilk').value,
        status: document.getElementById('editStatus').value,
        lastInsemination: document.getElementById('editLastInsemination').value,
        successfulInsemination: document.getElementById('editSuccessfulInsemination').value,
        pregnancyDays: document.getElementById('editPregnancyDays').value,
        dryDate: document.getElementById('editDryDate').value,
        expectedDryDate: document.getElementById('editExpectedDryDate').value,
        expectedCalvingDate: document.getElementById('editExpectedCalvingDate').value,
        herdNumber: document.getElementById('editHerdNumber').value,
        herdName: document.getElementById('editHerdName').value
    };

    // Обновляем filteredData если корова там есть
    const filteredIndex = filteredData.findIndex(c => c.id === currentEditCowId);
    if (filteredIndex !== -1) {
        filteredData[filteredIndex] = cowsData[cowIndex];
    }

    // Обновляем отображение
    displayCowTable();
    closeEditModal();

    // Показываем уведомление
    if (typeof showNotification === 'function') {
        showNotification('Данные коровы обновлены', 'success');
    } else {
        alert('Данные коровы обновлены');
    }
}

// Переменные для секции регистрации
const userRegistrationSection = document.getElementById('user-registration-section');
const addUserSubmenuBtn = document.querySelectorAll('.submenu-btn')[2]; // Кнопка "Добавить" в подменю Пользователи

// Открытие секции регистрации при нажатии на "Добавить" в подменю Пользователи
if (addUserSubmenuBtn) {
    addUserSubmenuBtn.addEventListener('click', function () {
        // Скрываем другие секции
        const forecastSection = document.getElementById('forecast-section');
        const cowsSearchSection = document.getElementById('cows-search-section');

        if (forecastSection) forecastSection.style.display = 'none';
        if (cowsSearchSection) cowsSearchSection.style.display = 'none';

        // Показываем секцию регистрации
        if (userRegistrationSection) {
            userRegistrationSection.style.display = 'block';
        }

        // Закрываем меню
        if (typeof closeMenuPanelFunc === 'function') {
            closeMenuPanelFunc();
        }
    });
}

// Обработка формы регистрации
const registerFormElement = document.getElementById('register');
if (registerFormElement) {
    registerFormElement.addEventListener('submit', async (e) => {
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
                if (typeof showNotification === 'function') {
                    showNotification(error.message, 'error');
                }
            } else {
                if (typeof showNotification === 'function') {
                    showNotification(error.message, 'error');
                }
            }
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Переменные для секции смены пароля
const userPasswordSection = document.getElementById('user-password-section');
const editUserSubmenuBtn = document.querySelectorAll('.submenu-btn')[3]; // Кнопка "Редактировать" в подменю Пользователи

// Открытие секции смены пароля при нажатии на "Редактировать" в подменю Пользователи
if (editUserSubmenuBtn) {
    editUserSubmenuBtn.addEventListener('click', function () {
        // Скрываем другие секции
        const forecastSection = document.getElementById('forecast-section');
        const cowsSearchSection = document.getElementById('cows-search-section');
        const userRegistrationSection = document.getElementById('user-registration-section');

        if (forecastSection) forecastSection.style.display = 'none';
        if (cowsSearchSection) cowsSearchSection.style.display = 'none';
        if (userRegistrationSection) userRegistrationSection.style.display = 'none';

        // Показываем секцию смены пароля
        if (userPasswordSection) {
            userPasswordSection.style.display = 'block';
            // Очищаем поля формы
            const emailInput = document.getElementById('password-email');
            const passwordInput = document.getElementById('new-password');
            if (emailInput) emailInput.value = '';
            if (passwordInput) passwordInput.value = '';
        }

        // Закрываем меню
        if (typeof closeMenuPanelFunc === 'function') {
            closeMenuPanelFunc();
        }
    });
}

// Функция для смены пароля
async function changeUserPassword(email, newPassword) {
    try {
        const response = await fetch('/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'changePassword',
                email: email,
                newPassword: newPassword
            })
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

// Обработка формы смены пароля
const changePasswordForm = document.getElementById('changePassword');
if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = document.getElementById('password-email').value.trim();
        const newPassword = document.getElementById('new-password').value;

        let isValid = true;

        // Валидация email
        if (typeof validateEmail === 'function' && !validateEmail(email)) {
            showFieldError(document.getElementById('password-email'), 'Введите корректный email');
            isValid = false;
        }

        // Валидация пароля
        if (typeof validatePassword === 'function' && !validatePassword(newPassword)) {
            showFieldError(document.getElementById('new-password'), 'Пароль должен содержать минимум 6 символов');
            isValid = false;
        }

        if (!isValid) return;

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        try {
            const result = await changeUserPassword(email, newPassword);

            if (result.success) {
                showNotification('Пароль успешно изменен!', 'success');
                form.reset();

                // Опционально: скрыть секцию через некоторое время
                setTimeout(() => {
                    if (userPasswordSection) {
                        userPasswordSection.style.display = 'none';
                    }
                }, 2000);
            }
        } catch (error) {
            if (error.errors) {
                Object.keys(error.errors).forEach(field => {
                    let input;
                    if (field === 'email') input = document.getElementById('password-email');
                    if (field === 'newPassword') input = document.getElementById('new-password');

                    if (input) {
                        showFieldError(input, error.errors[field]);
                    }
                });
                if (typeof showNotification === 'function') {
                    showNotification(error.message, 'error');
                }
            } else {
                if (typeof showNotification === 'function') {
                    showNotification(error.message, 'error');
                }
            }
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Данные для стад (демонстрационные)
const herdsData = [
    { id: 1, name: "Основное стадо", description: "Основное молочное стадо фермы", date: "16.11.2024" },
    { id: 2, name: "Молочное стадо", description: "Высокопродуктивные молочные коровы", date: "16.11.2024" },
    { id: 3, name: "Резервное стадо", description: "Молодняк и резервные коровы", date: "16.11.2024" },
    { id: 4, name: "Откормочное стадо", description: "Коровы на откорме", date: "17.11.2024" },
    { id: 5, name: "Сухостойное стадо", description: "Коровы в сухостойном периоде", date: "17.11.2024" }
];

// Переменные для пагинации стад
let currentHerdsPage = 1;
let herdsRowsPerPage = 5;
let filteredHerdsData = [...herdsData];

// Функция изменения количества записей на странице для стад
function changeHerdsRowsPerPage() {
    const input = document.getElementById('herdsRowsPerPageInput');
    if (!input) return;

    let newValue = parseInt(input.value);

    // Валидация
    if (isNaN(newValue) || newValue < 1) {
        newValue = 1;
    } else if (newValue > 100) {
        newValue = 100;
    }

    input.value = newValue;
    herdsRowsPerPage = newValue;
    currentHerdsPage = 1;
    displayHerdsTable();
}

// Функция отображения таблицы стад с пагинацией
function displayHerdsTable() {
    const tableBody = document.getElementById('herds-table-body');
    if (!tableBody) return;

    const startIndex = (currentHerdsPage - 1) * herdsRowsPerPage;
    const endIndex = startIndex + herdsRowsPerPage;
    const paginatedData = filteredHerdsData.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (paginatedData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="5" class="table-empty-message">Нет данных для отображения</td></tr>';
    } else {
        paginatedData.forEach(herd => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <button class="herd-edit-btn" data-herd-id="${herd.id}" title="Редактировать"><img class="edit-btn-img" src="160872.png"></button>
                </td>
                <td>${herd.id}</td>
                <td>${herd.name}</td>
                <td>${herd.description || '-'}</td>
                <td>${herd.date}</td>
            `;
            tableBody.appendChild(row);
        });

        // Добавляем обработчики для кнопок редактирования
        document.querySelectorAll('.herd-edit-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const herdId = parseInt(this.dataset.herdId);
                openHerdModal(herdId);
            });
        });
    }

    updateHerdsPaginationInfo();
}

// Функция обновления информации о пагинации для стад
function updateHerdsPaginationInfo() {
    const prevBtn = document.getElementById('herdsPrevPage');
    const nextBtn = document.getElementById('herdsNextPage');
    const paginationInfo = document.getElementById('herdsPaginationInfo');

    if (!prevBtn || !nextBtn || !paginationInfo) return;

    const totalPages = Math.ceil(filteredHerdsData.length / herdsRowsPerPage) || 1;

    paginationInfo.textContent = `Страница ${currentHerdsPage} из ${totalPages}`;

    prevBtn.disabled = currentHerdsPage === 1;
    nextBtn.disabled = currentHerdsPage === totalPages || totalPages === 0;
}

// Функция перехода на предыдущую страницу для стад
function goToHerdsPrevPage() {
    if (currentHerdsPage > 1) {
        currentHerdsPage--;
        displayHerdsTable();
    }
}

// Функция перехода на следующую страницу для стад
function goToHerdsNextPage() {
    const totalPages = Math.ceil(filteredHerdsData.length / herdsRowsPerPage);
    if (currentHerdsPage < totalPages) {
        currentHerdsPage++;
        displayHerdsTable();
    }
}

// Функция открытия модального окна для стада
function openHerdModal(herdId = null) {
    const modal = document.getElementById('herdModal');
    const modalTitle = document.getElementById('herdModalTitle');
    const herdIdInput = document.getElementById('herdId');
    const herdNameInput = document.getElementById('herdName');
    const herdDescriptionInput = document.getElementById('herdDescription');
    const herdDateInput = document.getElementById('herdDate');

    if (!modal) return;

    // Очищаем поля
    herdNameInput.value = '';
    herdDescriptionInput.value = '';
    herdDateInput.value = getCurrentDate();

    if (herdId) {
        // Режим редактирования
        const herd = herdsData.find(h => h.id === herdId);
        if (herd) {
            modalTitle.textContent = 'Редактирование стада';
            herdIdInput.value = herd.id;
            herdNameInput.value = herd.name;
            herdDescriptionInput.value = herd.description || '';
            herdDateInput.value = herd.date;
        }
    } else {
        // Режим добавления
        modalTitle.textContent = 'Добавление стада';
        herdIdInput.value = '';
    }

    modal.classList.add('show');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна для стада
function closeHerdModal() {
    const modal = document.getElementById('herdModal');
    if (!modal) return;

    modal.classList.remove('show');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Функция получения текущей даты в формате ДД.ММ.ГГГГ
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
}

// Функция сохранения стада
function saveHerd() {
    const herdIdInput = document.getElementById('herdId');
    const herdNameInput = document.getElementById('herdName');
    const herdDescriptionInput = document.getElementById('herdDescription');
    const herdDateInput = document.getElementById('herdDate');

    // Валидация
    if (!herdNameInput.value.trim()) {
        if (typeof showNotification === 'function') {
            showNotification('Введите название стада', 'error');
        } else {
            alert('Введите название стада');
        }
        return;
    }

    const herdId = herdIdInput.value ? parseInt(herdIdInput.value) : null;
    const herdName = herdNameInput.value.trim();
    const herdDescription = herdDescriptionInput.value.trim();
    const herdDate = herdDateInput.value || getCurrentDate();

    if (herdId) {
        // Редактирование существующего стада
        const index = herdsData.findIndex(h => h.id === herdId);
        if (index !== -1) {
            herdsData[index] = {
                ...herdsData[index],
                name: herdName,
                description: herdDescription,
                date: herdDate
            };
        }
    } else {
        // Добавление нового стада
        const newId = herdsData.length > 0 ? Math.max(...herdsData.map(h => h.id)) + 1 : 1;
        herdsData.push({
            id: newId,
            name: herdName,
            description: herdDescription,
            date: herdDate
        });
    }

    // Обновляем отфильтрованные данные
    filteredHerdsData = [...herdsData];

    // Обновляем отображение
    displayHerdsTable();
    closeHerdModal();

    // Показываем уведомление
    if (typeof showNotification === 'function') {
        showNotification(herdId ? 'Стадо обновлено' : 'Стадо добавлено', 'success');
    } else {
        alert(herdId ? 'Стадо обновлено' : 'Стадо добавлено');
    }
}

// Инициализация обработчиков для стад
document.addEventListener('DOMContentLoaded', function () {
    // Кнопка добавления стада
    const addHerdBtn = document.getElementById('addHerdBtn');
    if (addHerdBtn) {
        addHerdBtn.addEventListener('click', function () {
            openHerdModal();
        });
    }

    // Кнопки пагинации для стад
    const herdsPrevBtn = document.getElementById('herdsPrevPage');
    const herdsNextBtn = document.getElementById('herdsNextPage');

    if (herdsPrevBtn) {
        herdsPrevBtn.addEventListener('click', goToHerdsPrevPage);
    }

    if (herdsNextBtn) {
        herdsNextBtn.addEventListener('click', goToHerdsNextPage);
    }

    // Изменение количества записей на странице для стад
    const herdsRowsPerPageInput = document.getElementById('herdsRowsPerPageInput');
    if (herdsRowsPerPageInput) {
        herdsRowsPerPageInput.addEventListener('change', changeHerdsRowsPerPage);

        // Применение при вводе с задержкой
        let timeout;
        herdsRowsPerPageInput.addEventListener('input', function () {
            clearTimeout(timeout);
            timeout = setTimeout(changeHerdsRowsPerPage, 500);
        });
    }

    // Кнопки модального окна для стада
    const closeHerdModalBtn = document.getElementById('closeHerdModal');
    const cancelHerdModalBtn = document.getElementById('cancelHerdModalBtn');
    const saveHerdBtn = document.getElementById('saveHerdBtn');

    if (closeHerdModalBtn) {
        closeHerdModalBtn.addEventListener('click', closeHerdModal);
    }

    if (cancelHerdModalBtn) {
        cancelHerdModalBtn.addEventListener('click', closeHerdModal);
    }

    if (saveHerdBtn) {
        saveHerdBtn.addEventListener('click', saveHerd);
    }

    // Закрытие по Escape для модального окна стада
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('herdModal');
            if (modal && modal.classList.contains('show')) {
                closeHerdModal();
            }
        }
    });

    // Кнопки пагинации для истории
    const historyPrevBtn = document.getElementById('historyPrevPage');
    const historyNextBtn = document.getElementById('historyNextPage');

    if (historyPrevBtn) {
        historyPrevBtn.addEventListener('click', goToHistoryPrevPage);
    }

    if (historyNextBtn) {
        historyNextBtn.addEventListener('click', goToHistoryNextPage);
    }

    // Изменение количества записей на странице для истории
    const historyRowsPerPageInput = document.getElementById('historyRowsPerPageInput');
    if (historyRowsPerPageInput) {
        historyRowsPerPageInput.addEventListener('change', changeHistoryRowsPerPage);

        let timeout;
        historyRowsPerPageInput.addEventListener('input', function () {
            clearTimeout(timeout);
            timeout = setTimeout(changeHistoryRowsPerPage, 500);
        });
    }

    const forecastMenuItem = document.querySelector('.menu-item'); // Первый пункт меню - "Прогноз"
    const menuItemsList = document.querySelectorAll('.menu-content > .menu-item');

    if (menuItemsList.length >= 1) {
        const forecastItem = menuItemsList[0]; // Первый элемент - Прогноз
        if (forecastItem && forecastItem.textContent.trim() === 'Прогноз') {
            forecastItem.addEventListener('click', function () {
                // Скрываем ВСЕ другие секции
                const sections = [
                    'cows-search-section',
                    'user-registration-section',
                    'user-password-section',
                    'herds-section',
                    'history-section'
                ];

                sections.forEach(id => {
                    const section = document.getElementById(id);
                    if (section) section.style.display = 'none';
                });

                // Показываем секцию прогноза
                const forecastSection = document.getElementById('forecast-section');
                if (forecastSection) {
                    forecastSection.style.display = 'block';
                }

                // Закрываем меню
                if (typeof closeMenuPanelFunc === 'function') {
                    closeMenuPanelFunc();
                }
            });
        }
    }
});

// Данные для истории запросов (демонстрационные)
const historyData = [
    { id: 1, requestDate: "15.02.2026 10:30", targetDate: "март 2026", scenarioName: "Прогноз надоя", summary: "Ожидаемый надой: 2450 л, +5% к прошлому месяцу" },
    { id: 2, requestDate: "14.02.2026 15:45", targetDate: "февраль 2026", scenarioName: "Прогноз отелов", summary: "Ожидается 3 отеля, 2 коровы в запуске" },
    { id: 3, requestDate: "13.02.2026 09:15", targetDate: "февраль 2026", scenarioName: "Прогноз надоя", summary: "Ожидаемый надой: 2350 л, стабильно" },
    { id: 4, requestDate: "12.02.2026 14:20", targetDate: "февраль 2026", scenarioName: "Анализ стада", summary: "12 коров в лактации, 4 в сухостое" },
    { id: 5, requestDate: "11.02.2026 11:10", targetDate: "февраль 2026", scenarioName: "Прогноз отелов", summary: "Ожидается 2 отеля, 1 корова в запуске" },
    { id: 6, requestDate: "10.02.2026 16:30", targetDate: "февраль 2026", scenarioName: "Прогноз надоя", summary: "Ожидаемый надой: 2400 л, +2% к предыдущему прогнозу" },
    { id: 7, requestDate: "09.02.2026 08:45", targetDate: "февраль 2026", scenarioName: "Анализ стада", summary: "10 коров в основной группе, 6 в резерве" },
    { id: 8, requestDate: "08.02.2026 13:20", targetDate: "март 2026", scenarioName: "Прогноз кормов", summary: "Потребность в кормах: 15 тонн сена, 8 тонн комбикорма" },
    { id: 9, requestDate: "07.02.2026 10:00", targetDate: "февраль 2026", scenarioName: "Прогноз отелов", summary: "Ожидается 1 отел, 3 коровы в запуске" },
    { id: 10, requestDate: "06.02.2026 15:15", targetDate: "февраль 2026", scenarioName: "Прогноз надоя", summary: "Ожидаемый надой: 2300 л, сезонное снижение" },
    { id: 11, requestDate: "05.02.2026 09:30", targetDate: "февраль 2026", scenarioName: "Анализ стада", summary: "8 коров в первой лактации, 6 во второй" },
    { id: 12, requestDate: "04.02.2026 14:00", targetDate: "март 2026", scenarioName: "Прогноз отелов", summary: "Ожидается 4 отеля, 2 коровы в запуске" }
];

// Переменные для пагинации истории
let currentHistoryPage = 1;
let historyRowsPerPage = 5;
let filteredHistoryData = [...historyData];

// Функция изменения количества записей на странице для истории
function changeHistoryRowsPerPage() {
    const input = document.getElementById('historyRowsPerPageInput');
    if (!input) return;

    let newValue = parseInt(input.value);

    if (isNaN(newValue) || newValue < 1) {
        newValue = 1;
    } else if (newValue > 100) {
        newValue = 100;
    }

    input.value = newValue;
    historyRowsPerPage = newValue;
    currentHistoryPage = 1;
    displayHistoryTable();
}

// Функция отображения таблицы истории с пагинацией
function displayHistoryTable() {
    const tableBody = document.getElementById('history-table-body');
    if (!tableBody) return;

    const startIndex = (currentHistoryPage - 1) * historyRowsPerPage;
    const endIndex = startIndex + historyRowsPerPage;
    const paginatedData = filteredHistoryData.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (paginatedData.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="table-empty-message">Нет данных для отображения</td></tr>';
    } else {
        paginatedData.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.requestDate}</td>
                <td>${item.targetDate}</td>
                <td>${item.scenarioName}</td>
                <td>${item.summary}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    updateHistoryPaginationInfo();
}

// Функция обновления информации о пагинации для истории
function updateHistoryPaginationInfo() {
    const prevBtn = document.getElementById('historyPrevPage');
    const nextBtn = document.getElementById('historyNextPage');
    const paginationInfo = document.getElementById('historyPaginationInfo');

    if (!prevBtn || !nextBtn || !paginationInfo) return;

    const totalPages = Math.ceil(filteredHistoryData.length / historyRowsPerPage) || 1;

    paginationInfo.textContent = `Страница ${currentHistoryPage} из ${totalPages}`;

    prevBtn.disabled = currentHistoryPage === 1;
    nextBtn.disabled = currentHistoryPage === totalPages || totalPages === 0;
}

// Функция перехода на предыдущую страницу для истории
function goToHistoryPrevPage() {
    if (currentHistoryPage > 1) {
        currentHistoryPage--;
        displayHistoryTable();
    }
}

// Функция перехода на следующую страницу для истории
function goToHistoryNextPage() {
    const totalPages = Math.ceil(filteredHistoryData.length / historyRowsPerPage);
    if (currentHistoryPage < totalPages) {
        currentHistoryPage++;
        displayHistoryTable();
    }
}

// Простая функция для отображения последних запросов в профиле
function updateProfileHistory() {
    const tbody = document.getElementById('profile-history-body');
    if (!tbody) return;
    
    // Берем последние 5 запросов
    const lastRequests = historyData.slice(-5).reverse();
    
    tbody.innerHTML = '';
    
    if (lastRequests.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 1rem;">Нет истории</td></tr>';
    } else {
        lastRequests.forEach(item => {
            const row = document.createElement('tr');
            // Обрезаем итог, если слишком длинный
            const shortSummary = item.summary.length > 30 ? item.summary.substring(0, 30) + '...' : item.summary;
            row.innerHTML = `
                <td>${item.requestDate}</td>
                <td>${item.scenarioName}</td>
                <td title="${item.summary}">${shortSummary}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Для пункта "Прогноз"
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-content > .menu-item');
    
    if (menuItems.length >= 1) {
        const forecastItem = menuItems[0];
        if (forecastItem && forecastItem.textContent.trim() === 'Прогноз') {
            forecastItem.addEventListener('click', function() {
                hideAllSections();
                const forecastSection = document.getElementById('forecast-section');
                if (forecastSection) {
                    forecastSection.style.display = 'block';
                }
                if (typeof closeMenuPanelFunc === 'function') {
                    closeMenuPanelFunc();
                }
            });
        }
    }
});

// Для пункта "История"
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-content > .menu-item');
    
    if (menuItems.length >= 2) {
        const historyItem = menuItems[1];
        if (historyItem && historyItem.textContent.trim() === 'История') {
            historyItem.addEventListener('click', function() {
                hideAllSections();
                const historySection = document.getElementById('history-section');
                if (historySection) {
                    historySection.style.display = 'block';
                    filteredHistoryData = [...historyData];
                    currentHistoryPage = 1;
                    displayHistoryTable();
                }
                if (typeof closeMenuPanelFunc === 'function') {
                    closeMenuPanelFunc();
                }
            });
        }
    }
});

// Для подменю "Животные -> Коровы"
document.addEventListener('DOMContentLoaded', function() {
    const findCowSubmenuBtn = document.querySelector('.menu-item-with-submenu .submenu-btn:first-child');
    
    if (findCowSubmenuBtn) {
        findCowSubmenuBtn.addEventListener('click', function() {
            hideAllSections();
            const cowsSearchSection = document.getElementById('cows-search-section');
            if (cowsSearchSection) {
                cowsSearchSection.style.display = 'block';
                showAllCows();
            }
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
    }
});

// Для подменю "Животные -> Стада"
document.addEventListener('DOMContentLoaded', function() {
    const herdsSubmenuBtn = document.querySelectorAll('.submenu-btn')[1];
    
    if (herdsSubmenuBtn) {
        herdsSubmenuBtn.addEventListener('click', function() {
            hideAllSections();
            const herdsSection = document.getElementById('herds-section');
            if (herdsSection) {
                herdsSection.style.display = 'block';
                filteredHerdsData = [...herdsData];
                currentHerdsPage = 1;
                displayHerdsTable();
            }
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
    }
});

// Для подменю "Пользователи -> Добавить"
document.addEventListener('DOMContentLoaded', function() {
    const addUserSubmenuBtn = document.querySelectorAll('.submenu-btn')[2];
    
    if (addUserSubmenuBtn) {
        addUserSubmenuBtn.addEventListener('click', function() {
            hideAllSections();
            const userRegistrationSection = document.getElementById('user-registration-section');
            if (userRegistrationSection) {
                userRegistrationSection.style.display = 'block';
            }
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
    }
});

// Для подменю "Пользователи -> Редактировать"
document.addEventListener('DOMContentLoaded', function() {
    const editUserSubmenuBtn = document.querySelectorAll('.submenu-btn')[3];
    
    if (editUserSubmenuBtn) {
        editUserSubmenuBtn.addEventListener('click', function() {
            hideAllSections();
            const userPasswordSection = document.getElementById('user-password-section');
            if (userPasswordSection) {
                userPasswordSection.style.display = 'block';
                const emailInput = document.getElementById('password-email');
                const passwordInput = document.getElementById('new-password');
                if (emailInput) emailInput.value = '';
                if (passwordInput) passwordInput.value = '';
            }
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    updateProfileHistory();
});

if (profileBtn) {
    profileBtn.addEventListener('click', function() {
        setTimeout(updateProfileHistory, 100);
    });
}