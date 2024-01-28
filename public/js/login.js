const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello');
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


const loginDiv = document.querySelector('.loginDiv');
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('email');
const validateBtn = document.getElementById('validateBtn');

emailInput.addEventListener('input', (event) => {
  let inputValue = event.target.value;

  // Clear error message when the user starts typing again
  emailError.textContent = '';

  // Format the email input
  formatEmailInput(event.target);

  // Validate email and check password validation
  if (validateEmail(inputValue)) {
      // Check password validation here
  } else {
      emailError.textContent = 'Please enter a valid email address.';
  }
});

function formatEmailInput(input) {
  let value = input.value;
  // Additional formatting logic can be added if needed
  input.value = value;
}

function validateEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
      // Additional check for characters before '@' and after '.'
      var atIndex = email.indexOf('@');
      var dotIndex = email.lastIndexOf('.');

      if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
          return true; // Email is valid
      }
  }

  return false;
}
// if email and password pass, home.handlebars will load in.