document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const logoutSection = document.getElementById("logout-section");
  const userNameSpan = document.getElementById("user-name");
  const message = document.getElementById("message");
  const registerMessage = document.getElementById("register-message");
  const visitWebsiteButton = document.getElementById("visit-website-button");
  const validUsername = "user";
  const validPassword = "password123";

  // Переключение между формами логина и регистрации
  document.getElementById("go-to-register").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
  });

  document.getElementById("go-to-login").addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
  });

  // Проверка статуса входа
  function checkLoginStatus() {
      const storedUser = localStorage.getItem("username");
      if (storedUser) {
          displayLogout(storedUser);
      } else {
          displayLogin();
      }
  }

  // Отображение формы логина
  function displayLogin() {
      loginForm.classList.remove("hidden");
      logoutSection.classList.add("hidden");
  }

  // Отображение секции после входа
  function displayLogout(username) {
      loginForm.classList.add("hidden");
      registerForm.classList.add("hidden");
      logoutSection.classList.remove("hidden");
      userNameSpan.textContent = username;
  }

  // Обработка логина
  loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const storedPassword = localStorage.getItem(username);
      if (storedPassword && password === storedPassword) {
          localStorage.setItem("username", username);
          displayLogout(username);
          message.textContent = "";
      } else {
          message.textContent = "Invalid username or password.";
      }
  });

  // Обработка регистрации
  registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newUsername = document.getElementById("new-username").value.trim();
      const newPassword = document.getElementById("new-password").value.trim();

      if (localStorage.getItem(newUsername)) {
          registerMessage.textContent = "Username already exists.";
      } else {
          localStorage.setItem(newUsername, newPassword);
          registerMessage.textContent = "Registration successful! You can now log in.";
      }
  });

  // Обработка выхода
  document.getElementById("logout-button").addEventListener("click", () => {
      localStorage.removeItem("username");
      displayLogin();
  });

  // Переход на сайт
  visitWebsiteButton.addEventListener("click", () => {
      window.location.href = "https://example.com"; // Замените на нужный URL
  });

  // Инициализация
  checkLoginStatus();
});
