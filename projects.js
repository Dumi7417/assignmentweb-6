// Add an event listener to the logout button
document.getElementById("logout-button").addEventListener("click", () => {
    // Remove the 'username' item from local storage, effectively logging the user out
    localStorage.removeItem("username");
    
    // Call the function to update the UI, displaying the login interface
    displayLogin();
});
