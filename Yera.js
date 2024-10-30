const subscribeBtn = document.getElementById('subscribeBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close');

subscribeBtn.onclick = function() {
    popupForm.style.display = 'flex';
}

closeBtn.onclick = function() {
    popupForm.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
}

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

const stars = document.querySelectorAll('.stars');
let selectedRating = 0;

stars.forEach((star) => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        
        stars.forEach((s) => s.classList.remove('selected'));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('selected');
        }

        const message = document.getElementById('message');
        message.textContent = `You rated this ${selectedRating} out of 5 stars!`;
    });
});

document.getElementById('submit-btn').addEventListener('click', function() {
    if (selectedRating > 0) {
        alert(`You submitted a rating of ${selectedRating} out of 5 stars!`);
    } else {
        alert('Please select a rating before submitting.');
    }
});

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

let isNightTheme = false;

themeToggleBtn.addEventListener('click', () => {
    isNightTheme = !isNightTheme; 
    if (isNightTheme) {
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        themeToggleBtn.textContent = 'Switch to Day Theme'; 
    } else {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        themeToggleBtn.textContent = 'Switch to Night Theme'; 
    }
});

body.classList.add('day-theme');

const readMoreBtn = document.getElementById('read-more-btn');
const additionalContent = document.querySelector('.additional-content');

readMoreBtn.addEventListener('click', () => {
    if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
        additionalContent.style.display = 'block'; 
        readMoreBtn.textContent = 'Read Less'; 
    } else {
        additionalContent.style.display = 'none'; 
        readMoreBtn.textContent = 'Read More'; 
    }
});

additionalContent.style.display = 'none'; 


const showTimeBtn = document.getElementById('show-time-btn');
const currentTimeDisplay = document.getElementById('current-time');

showTimeBtn.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    currentTimeDisplay.textContent = `Current Time: ${currentTime}`;
});

const navbar = document.getElementById('navbar');
const navItems = navbar.querySelectorAll('a');
let currentIndex = 0;

function handleKeydown(event) {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % navItems.length;
        navItems[currentIndex].focus();
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
        navItems[currentIndex].focus();
    }
}

navItems.forEach((item, index) => {
    item.addEventListener('keydown', handleKeydown);
    item.addEventListener('focus', () => {
        currentIndex = index;
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const formData = new FormData(this);

    fetch('https://example.com/api/contact', { 
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const messageElement = document.getElementById('response-message');
        messageElement.textContent = 'Thank you for your message! We will get back to you soon.';
        messageElement.classList.remove('hidden');
        document.getElementById('contact-form').reset(); 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

function changeLanguage() {
    const language = document.getElementById('language').value;
    const content = document.querySelector('.content'); 

    switch (language) {
        case 'en':
            content.innerHTML = 
                `<h2>Hi, I'm <span>Yernur</span></h2>
                <p>A Frontend Developer and Marketing Executive with over 5 years of experience, blending creative ideas with modern web technologies.</p>
                <div class="btn-group">
                    <a href="contactus.html" class="btn btn-primary btn-lg mt-lg-3">Hire me</a>
                    <a href="projects.html" class="btn btn-outline-light btn-lg ml-3 mt-lg-3">Projects</a>
                </div>
                <button id="theme-toggle-btn" class="btn btn-light btn-lg mt-4">Switch to Night Theme</button>`;
            break;
        case 'ru':
            content.innerHTML = 
                `<h2>Привет, я <span>Ернур</span></h2>
                <p>Фронтенд-разработчик и маркетолог с более чем 5-летним опытом, сочетающий креативные идеи с современными веб-технологиями.</p>
                <div class="btn-group">
                    <a href="contactus.html" class="btn btn-primary btn-lg mt-lg-3">Нанять меня</a>
                    <a href="projects.html" class="btn btn-outline-light btn-lg ml-3 mt-lg-3">Проекты</a>
                </div>
                <button id="theme-toggle-btn" class="btn btn-light btn-lg mt-4">Переключить на ночную тему</button>`;
            break;
        case 'kz':
            content.innerHTML = 
                `<h2>Сәлем, мен <span>Ернур</span></h2>
                <p>Креативті идеяларды заманауи веб-технологиялармен біріктіретін 5 жылдан астам тәжірибесі бар фронтенд-әзірлеуші және маркетинг жөніндегі маман.</p>
                <div class="btn-group">
                    <a href="contactus.html" class="btn btn-primary btn-lg mt-lg-3">Мені жалда</a>
                    <a href="projects.html" class="btn btn-outline-light btn-lg ml-3 mt-lg-3">Жобалар</a>
                </div>
                <button id="theme-toggle-btn" class="btn btn-light btn-lg mt-4">Түнгі тақырыпқа ауысу</button>`;
            break;
        default:
            content.innerHTML = 'Language not supported.';
    }
}
// Handle logout
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("username");
    displayLogin();
  });