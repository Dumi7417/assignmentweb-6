document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const logoutSection = document.getElementById("logout-section");
    const userNameSpan = document.getElementById("user-name");
    const message = document.getElementById("message");
    const visitWebsiteButton = document.getElementById("visit-website-button");
  
    // Sample username and password for login validation
    const validUsername = "user";
    const validPassword = "password123";
  
    // Check if user is already logged in
    function checkLoginStatus() {
      const storedUser = localStorage.getItem("username");
      if (storedUser) {
        displayLogout(storedUser);
      } else {
        displayLogin();
      }
    }
  
    // Show login form and hide logout section
    function displayLogin() {
      loginForm.classList.remove("hidden");
      logoutSection.classList.add("hidden");
    }
  
    // Show logout section and hide login form
    function displayLogout(username) {
      loginForm.classList.add("hidden");
      logoutSection.classList.remove("hidden");
      userNameSpan.textContent = username;
    }
  
    // Handle login
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      // Check if username and password are correct
      if (username === validUsername && password === validPassword) {
        localStorage.setItem("username", username);
        displayLogout(username);
        message.textContent = "";
      } else {
        message.textContent = "Invalid username or password.";
      }
    });
  
    // Handle logout
    document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("username");
      displayLogin();
    });
  
    // Handle visit website button click
    visitWebsiteButton.addEventListener("click", () => {
      window.location.href = "https://example.com"; // Replace with the desired URL
    });
  
    // Initialize by checking login status
    checkLoginStatus();
  });
  