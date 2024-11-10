document.getElementById("dark-mode-button").addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");
});

// Add an event listener to the logout button
document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("username");
    displayLogin();
});