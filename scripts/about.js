const showTimeBtn = document.getElementById("showTimeBtn");
const timeDisplay = document.getElementById("timeDisplay");

showTimeBtn.addEventListener("click", () => {
  const currentTime = new Date().toLocaleTimeString();
  timeDisplay.textContent = `Current Time: ${currentTime}`;
});

const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating) => {
  const stars = rating.querySelectorAll(".star");

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach((s, i) => {
        s.classList.toggle("selected", i <= index);
      });

      console.log(`Rating for ${rating.dataset.name}: ${index + 1} stars`);
    });
  });
});


const exampleArray = [1, 2, 3, 4, 5, 6];
const filteredArray = exampleArray.filter((num) => num % 2 === 0);
console.log("Filtered Array:", filteredArray);
document.getElementById("logout-button").addEventListener("click", () => {
  localStorage.removeItem("username");
  displayLogin();
});

const colorChangeBtn = document.getElementById("colorChangeBtn");

let isDarkMode = false;

colorChangeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('header').classList.toggle('dark-mode-header', isDarkMode);
    document.querySelector('footer').classList.toggle('dark-mode-footer', isDarkMode);
    
    const navLinks = document.querySelectorAll('.nav-bar a, .dropdown a');
    navLinks.forEach(link => link.classList.toggle('dark-mode-link', isDarkMode));

    const aboutSection = document.querySelector('.about-section');
    aboutSection.classList.toggle('dark-mode-about-section', isDarkMode);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.toggle('dark-mode-card', isDarkMode));

    const ratingStars = document.querySelectorAll('.star');
    ratingStars.forEach(star => star.classList.toggle('dark-mode-star', isDarkMode));
});