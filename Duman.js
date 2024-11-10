$('#subscribeBtn').on('click', function() {
    $('#subscribeModal').modal('show');
});

$('#subscribeForm').on('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    $('#subscribeModal').modal('hide');
});

const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
    });
});

document.getElementById('submitRating').addEventListener('click', () => {
    const message = selectedRating > 0 
        ? `You have rated ${selectedRating} stars!`
        : 'Please select a rating!';
    document.getElementById('rating-message').textContent = message;
});

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('night-mode'); 
    } else {
        body.classList.remove('night-mode'); 
    }
});

document.getElementById('readMoreBtn').addEventListener('click', function() {
    const extraContent = document.getElementById('extraContent');
    
    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
        extraContent.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        extraContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});

function displayCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = `Current Time: ${currentTime}`;
}

document.getElementById('showTimeBtn').addEventListener('click', displayCurrentTime);

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log(data);
            successMessage.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    });
});
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("username");
    displayLogin();
  });


