document.addEventListener('DOMContentLoaded', () => {
    const greetingText = document.getElementById('greetingText');
    const updateGreetingBtn = document.getElementById('updateGreetingBtn');
    const languageBtn = document.getElementById('languageBtn');
    const surpriseImage = document.getElementById('surpriseImage');
    const navLinks = document.querySelectorAll('.nav-bar a');
    const soundEffect = new Audio('/audio/notification.mp3');

    // Функция для отображения имени пользователя из localStorage
    function updateGreeting() {
        const username = localStorage.getItem("username");
        if (username) {
            greetingText.textContent = `Hello, ${username}!`;
        } else {
            greetingText.textContent = 'Hello, Guest!';
        }
    }

    // При клике на кнопку обновления приветствия, отображаем имя пользователя
    updateGreetingBtn.addEventListener('click', () => {
        updateGreeting();

        // Воспроизведение звука и отображение изображения-сюрприза
        soundEffect.play();

        surpriseImage.style.display = 'block';
        setTimeout(() => {
            surpriseImage.style.display = 'none';
        }, 1000);
    });

    // Инициализация приветствия при загрузке страницы
    updateGreeting();

    // DATA I VREMYA
    function displayDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        document.getElementById('dateTime').textContent = `${formattedDate} ${formattedTime}`;
    }

    // UPDATE TIME 
    setInterval(displayDateTime, 1000);
    displayDateTime();

    // Переключение языка
    const translations = {
        en: { home: 'Home', about: 'About', projects: 'Projects', portfolio: 'Portfolio', MaximPage: 'Maxim', DumanPage: 'Duman', YernurPage: 'Yernur', contact: 'Contact', account: 'Account', logout: 'Log out'},
        ru: { home: 'Главная', about: 'О нас', projects: 'Проекты', portfolio: 'Портфолио', MaximPage: 'Максим', DumanPage: 'Думан', YernurPage: 'Ернур', contact: 'Контакты', account: 'Аккаунт', logout: 'Выйти'}
    };
    
    let currentLang = 'en';

    languageBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        navLinks.forEach((link, index) => {
            link.textContent = translations[currentLang][Object.keys(translations[currentLang])[index]];
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.getElementById("profileImage");
    const profileImageInput = document.getElementById("profileImageInput");
    const uploadForm = document.getElementById("uploadForm");
    const changeImageBtn = document.getElementById("changeImageBtn");
    const removeImageBtn = document.getElementById("removeImageBtn");
    const uploadImageBtn = document.getElementById("uploadImageBtn");
    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const themeToggleBtn = document.getElementById("themeToggleBtn");

    // Toggle theme mode
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("night-mode");
        document.querySelector("header").classList.toggle("night-mode");
        document.querySelector("footer").classList.toggle("night-mode");

        // Update all navigation links and dropdown content
        document.querySelectorAll(".nav-bar a").forEach(link => link.classList.toggle("night-mode"));
        document.querySelector(".dropdown-content").classList.toggle("night-mode");

        // Toggle button text
        if (document.body.classList.contains("night-mode")) {
            themeToggleBtn.textContent = "Day Mode";
        } else {
            themeToggleBtn.textContent = "Night Mode";
        }
    });

    // Remaining existing code for image handling and user info...
});