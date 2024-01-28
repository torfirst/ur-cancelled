
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
  

  //   emailInput.addEventListener('input', (event) => {
  //     let inputValue = event.target.value;
  
  //     // Clear error message when the user starts typing again
  //     emailError.textContent = '';
  
  //     // Format the email input
  //     formatEmailInput(event.target);
  
  //     // Validate email and check password validation
  //     if (validateEmail(inputValue)) {
  //         // Check password validation here
  //     } else {
  //         emailError.textContent = 'Please enter a valid email address.';
  //     }
  // });
  
  // function formatEmailInput(input) {
  //     let value = input.value;
  //     // Additional formatting logic can be added if needed
  //     input.value = value;
  // }
  
  // function validateEmail(email) {
  //     // Regular expression for basic email validation
  //     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //     if (emailRegex.test(email)) {
  //         // Additional check for characters before '@' and after '.'
  //         var atIndex = email.indexOf('@');
  //         var dotIndex = email.lastIndexOf('.');
  
  //         if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
  //             return true; // Email is valid
  //         }
  //     }
  
  //     return false;
  // }