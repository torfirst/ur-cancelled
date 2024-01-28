
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#nameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#validateBtn')
    .addEventListener('submit', signupFormHandler);
  
    
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  passwordInput.addEventListener('input', (event) => {
    maskPassword();
    checkPasswordsMatch();
  });

  function maskPassword() {
    const password = passwordInput.value;
    const maskedPassword = '*'.repeat(password.length);
    passwordInput.value = maskedPassword;
  }

  function checkPasswordsMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
      // Passwords match, you can perform additional actions if needed
      console.log("Passwords match");
    } else {
      // Passwords do not match, you can handle this case
      console.log("Passwords do not match");
    }
  }