const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('#emailForm')
  .addEventListener('submit', loginFormHandler);

function maskPassword() {
  const passwordInput = document.getElementById('password');
  const maskedPasswordInput = document.getElementById('maskedPassword');

  const password = passwordInput.value;
  const maskedPassword = '*'.repeat(password.length);

  maskedPasswordInput.value = maskedPassword;
}


const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('email');


function validateEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    // Additional check for characters before '@' and after '.'
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');

    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
      return true; 
    }
  } else {
    emailError.textContent = 'Please enter a valid email address.';
  }

  return false;
}