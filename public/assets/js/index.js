const loginDiv = document.querySelector('.loginDiv');
const phoneForm = document.getElementById('phoneForm');
const phoneNumberInput = document.getElementById('phoneNumber');
const phoneNumberError = document.getElementById('phoneNumberError');
const disclaimerCheckbox = document.getElementById('disclaimerCheckbox');
const disclaimerError = document.getElementById('disclaimerError');
const validateBtn = document.getElementById('validateBtn');

phoneNumberInput.addEventListener('input', (event) => {
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
    phoneNumberError.textContent = '';
});

validateBtn.addEventListener('click', (event) => {
    let hasPhoneNumberError = false;
    let hasDisclaimerError = false;

    if (phoneNumberInput.value.length !== 10) {
        phoneNumberError.textContent = 'Please enter a valid 10-digit phone number.';
        hasPhoneNumberError = true;
    }

    if (!disclaimerCheckbox.checked) {
        disclaimerError.textContent = 'Please agree to the disclaimer.';
        hasDisclaimerError = true;
    }

    if (hasPhoneNumberError || hasDisclaimerError) {
        event.preventDefault();
    }
});

// const authSuccess = () => {
//     loginDiv.classList.add('hide');
//     homePage.classList.remove('hide');
// }

