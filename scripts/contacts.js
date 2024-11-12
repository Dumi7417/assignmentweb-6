// FAQ toggle functionality
document.querySelector(".faq-question").addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
});

// Star rating functionality
const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const ratingValue = star.getAttribute("data-value");
    stars.forEach((s) => {
      s.classList.remove("selected"); // Reset all stars
      if (s.getAttribute("data-value") <= ratingValue) {
        s.classList.add("selected"); // Highlight selected stars
      }
    });
    alert(`You rated us: ${ratingValue} stars`); // Display rating
  });
});

// Toggle between Day and Night theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  // Toggle between night and day theme for the entire body
  document.body.classList.toggle("night");
  
  // Toggle the header and footer colors based on theme
  document.querySelector("header").classList.toggle("night-header");
  document.querySelector("footer").classList.toggle("night-footer");

  // Update navigation links (e.g., changing color for night mode)
  const navLinks = document.querySelectorAll(
    ".nav-item a, .navbar-brand, .dropdown-item, .nav-link"
  );
  navLinks.forEach((link) => link.classList.toggle("night-link"));
});