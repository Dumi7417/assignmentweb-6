const showTimeBtn = document.getElementById('showTimeBtn');
const timeDisplay = document.getElementById('timeDisplay');

showTimeBtn.addEventListener('click', () => {
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = `Current Time: ${currentTime}`;
});

const ratings = document.querySelectorAll('.rating');

ratings.forEach(rating => {
    const stars = rating.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('selected', i <= index);
            });

            console.log(`Rating for ${rating.dataset.name}: ${index + 1} stars`);
        });
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

const exampleArray = [1, 2, 3, 4, 5, 6];
const filteredArray = exampleArray.filter(num => num % 2 === 0);
console.log('Filtered Array:', filteredArray);
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("username");
    displayLogin();
  });