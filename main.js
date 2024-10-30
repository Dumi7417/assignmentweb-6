document.addEventListener('DOMContentLoaded', () => {
    const greetingText = document.getElementById('greetingText');
    const nameInput = document.getElementById('nameInput');
    const updateGreetingBtn = document.getElementById('updateGreetingBtn');
    const languageBtn = document.getElementById('languageBtn');
    const navLinks = document.querySelectorAll('.nav-bar a');
    const soundEffect = new Audio('notification.mp3');
    const surpriseImage = document.getElementById('surpriseImage');

    updateGreetingBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        greetingText.textContent = name ? `Hello, ${name}! `: 'Hello, Guest!';
        soundEffect.play();
        
        surpriseImage.style.display = 'block';
        setTimeout(() => {
            surpriseImage.style.display = 'none';
        }, 1000);
    });
    
    let currentIndex = 0;

// Навигация с помощью клавиш в меню
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % navLinks.length;
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
    }
    navLinks[currentIndex].focus();
});
    // Переключение языка
    const translations = {
        en: { home: 'Home', about: 'About', portfolio: 'Portfolio', projects: 'Projects', contact: 'Contact' },
        ru: { home: 'Главная', about: 'О нас',  portfolio: 'Портфолио', projects: 'Проекты', contact: 'Контакты' }
    };
    
    let currentLang = 'en';
    
    languageBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        navLinks.forEach((link, index) => {
            link.textContent = translations[currentLang][Object.keys(translations[currentLang])[index]];
        });
        nameInput.focus();
    });
});

// Смена фона
document.getElementById('colorChangeBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

// RANDOM BACKGROUND
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// DATA I VREMYA
function displayDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    document.getElementById('dateTime').textContent = `${formattedDate} ${formattedTime}`;
}

// UPDATE TIME 
setInterval(displayDateTime, 1000);

// SHOW TIME WHE OPEN PAGE
displayDateTime();
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("username");
    displayLogin();
  });