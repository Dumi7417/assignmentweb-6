document.getElementById("logout-button").addEventListener("click", () => {
  // Remove the 'username' item from local storage, effectively logging the user out
  localStorage.removeItem("username");
  
  // Call the function to update the UI, displaying the login interface
  displayLogin();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  // Toggle the 'dark-mode' class on the body
  body.classList.toggle("dark-mode");
});