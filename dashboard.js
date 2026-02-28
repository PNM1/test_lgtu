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

//прогноз
const menuItems = document.querySelectorAll('.menu-item');
let forecastMenuItem_element = null;

menuItems.forEach(item => {
    if (item.textContent.trim().toLowerCase() === 'прогноз') {
        forecastMenuItem_element = item;
    }
});

if (forecastMenuItem_element) {
    forecastMenuItem_element.addEventListener('click', function () {
        const forecastSection = document.getElementById('forecast-section');
        if (forecastSection) {
            forecastSection.style.display = 'block';

            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        }
    });
}

window.addEventListener('load', function () {
    const forecastSection = document.getElementById('forecast-section');
    if (forecastSection) {
        forecastSection.style.display = 'block';
    }
});

// поиск коров
document.addEventListener('DOMContentLoaded', function () {
    const findCowSubmenuBtn = document.querySelector('.submenu-btn');

    if (findCowSubmenuBtn) {
        findCowSubmenuBtn.addEventListener('click', function () {
            const forecastSection = document.getElementById('forecast-section');
            if (forecastSection) {
                forecastSection.style.display = 'none';
            }

            const cowsSearchSection = document.getElementById('cows-search-section');
            if (cowsSearchSection) {
                cowsSearchSection.style.display = 'block';
            }

            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
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
            btn.addEventListener('click', function() {
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
    // Поиск коров
    const findCowSubmenuBtn = document.querySelector('.menu-item-with-submenu .submenu-btn:first-child');

    if (findCowSubmenuBtn) {
        findCowSubmenuBtn.addEventListener('click', function () {
            // Скрываем секцию прогноза
            const forecastSection = document.getElementById('forecast-section');
            if (forecastSection) {
                forecastSection.style.display = 'none';
            }

            // Показываем секцию поиска коров
            const cowsSearchSection = document.getElementById('cows-search-section');
            if (cowsSearchSection) {
                cowsSearchSection.style.display = 'block';
                // Отображаем все данные при открытии
                showAllCows();
            }

            // Закрываем меню
            if (typeof closeMenuPanelFunc === 'function') {
                closeMenuPanelFunc();
            }
        });
    }

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
        overlay.addEventListener('click', function() {
            closeEditModal();
        });
    }
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
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
