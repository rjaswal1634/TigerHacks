// Get references to the form and input fields
const form = document.getElementById('loginForm');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

// Add an event listener to the form for when it's submitted
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // We hardcoded the admin, admin as password 
    if (enteredUsername === 'admin' && enteredPassword === 'admin') {
        // If they are correct, navigate to the next page (page.html)
        window.location.href = 'page.html';
    } else {
        // If the username and password are incorrect, you can display an error message or take other actions as needed
        alert('Invalid username or password. Please try again.');
    }
});
