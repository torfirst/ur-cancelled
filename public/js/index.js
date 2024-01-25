const loginDiv = document.querySelector('.loginDiv');
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const validateBtn = document.getElementById('validateBtn');

emailInput.addEventListener('input', (event) => {
    let inputValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (inputValue.length > 10) {
        inputValue = inputValue.slice(0, 10); // Limit to 10 characters
    }

    let formattedValue = '';

    if (inputValue.length >= 3) {
        formattedValue += `(${inputValue.slice(0, 3)})`;

        if (inputValue.length >= 7) {
            formattedValue += ` ${inputValue.slice(3, 6)}-${inputValue.slice(6)}`;
        } else {
            formattedValue += ` ${inputValue.slice(3)}`;
        }
    } else {
        formattedValue = inputValue;
    }

    event.target.value = formattedValue;

    // Clear error message when the user starts typing again
    emailError.textContent = '';
});

// validateBtn.addEventListener('click', (event) => {
//     let hasError = false;

//     if (emailInput.value.length < 9) {
//         event.preventDefault();
//         emailError.textContent = 'Please enter a valid email address.';
//         hasError = true;
//     }

//     if (emailError || passwordError) {
//         event.preventDefault();
//     }
// });

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

    return false; // Email is invalid
}

if (validateEmail(emailInput)) {
    // check password validation
} else {
    emailError.textContent = 'Please enter a valid email address.';
}

// if email and password pass, home.handlebars will load in.