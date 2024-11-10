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
  
  // Change background color functionality
  document.getElementById("colorButton").addEventListener("click", () => {
    const colors = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
  
  // Toggle between Day and Night theme
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("night");
    document.querySelector("header").classList.toggle("night-header");
    document.querySelector("footer").classList.toggle("night-footer");
    document.querySelector("navbar-brand").classList.toggle("night-navbar-brand");
  
    // Update navigation links
    const navLinks = document.querySelectorAll(".nav-item a, .navbar-brand, .dropdown-item, .nav-link");
    navLinks.forEach((link) => link.classList.toggle("night-link"));
  });
  
  // Show current time functionality
  document.getElementById("showTimeButton").addEventListener("click", () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  });
  
  // Open contact form popup
  document.getElementById("openPopup").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("overlay").style.display = "block"; // Show overlay
  });
  
  // Close popup functionality
  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "none";
    document.getElementById("overlay").style.display = "none"; // Hide overlay
  });
  
  // Handle contact form submission
  document.getElementById("contactForm").addEventListener("submit", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const response = await fetch("https://example.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });
    const result = await response.json();
    document.getElementById("formFeedback").innerText = result.message; // Show feedback
  });
  