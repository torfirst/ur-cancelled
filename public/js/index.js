const loginDiv = document.querySelector('.loginDiv');
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
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

validateBtn.addEventListener('click', (event) => {
    let hasPhoneNumberError = false;

    if (phoneNumberInput.value.length !== 10) {
        phoneNumberError.textContent = 'Please enter a valid email address.';
        hasPhoneNumberError = true;
    }

    if (hasPhoneNumberError || hasDisclaimerError) {
        event.preventDefault();
    }
});

// const authSuccess = () => {
//     loginDiv.classList.add('hide');
//     homePage.classList.remove('hide');
// }

