const pass = document.getElementById('passwordInput');
const confirmPass = document.getElementById('confirmPasswordInput');
const displayPassError = document.getElementById('confirmPassword');

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#emailInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();
  const firstname = document.querySelector('#firstNameInput').value.trim();
  const lastname = document.querySelector('#lastNameInput').value.trim();

  if (email && password && lastname && firstname) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, lastname, firstname }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const maskPassword = () => {
  var passwordInput = document.getElementById('passwordInput');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};

const maskConfirmPass = () => {
  var passwordInput = document.getElementById('confirmPasswordInput');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
};

function comparePass() {
  if (confirmPass.value) {
    if (pass.value != confirmPass.value) {
      displayPassError.style.color = 'red';
      displayPassError.innerHTML = 'Passwords do not match.';
      return false;
    }
  }
}

confirmPass.addEventListener('keyup', () => {
  comparePass();
});

pass.addEventListener('keyup', () => {
  comparePass();
});

document
  .querySelector('#validateBtn')
  .addEventListener('click', signupFormHandler);
