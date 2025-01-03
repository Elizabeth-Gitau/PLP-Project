document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    // Registration Form Validation
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous error messages
        clearErrors(['nameError', 'emailError', 'passwordError', 'confirmPasswordError', 'ageError', 'genderError', 'countryError', 'termsError']);

        // Name Validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Name is required.');
            isValid = false;
        }

        // Email Validation
        const email = document.getElementById('email').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        // Password Validation
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            showError('passwordError', 'Password must be at least 8 characters.');
            isValid = false;
        }

        // Confirm Password Validation
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match.');
            isValid = false;
        }

        // Age Validation
        const age = document.getElementById('age').value;
        if (age === '' || isNaN(age) || age < 18 || age > 100) {
            showError('ageError', 'Please enter a valid age between 18 and 100.');
            isValid = false;
        }

        // Gender Validation
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError('genderError', 'Please select your gender.');
            isValid = false;
        }

        // Country Validation
        const country = document.getElementById('country').value;
        if (country === '') {
            showError('countryError', 'Please select your country.');
            isValid = false;
        }

        // Terms and Conditions Validation
        const terms = document.getElementById('terms').checked;
        if (!terms) {
            showError('termsError', 'You must agree to the terms and conditions.');
            isValid = false;
        }

        // Final validation
        if (isValid) {
            alert('Registration successful!');
            registrationForm.reset();
        }
    });

    // Login Form Validation
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous error messages
        clearErrors(['loginEmailError', 'loginPasswordError']);

        // Email Validation
        const loginEmail = document.getElementById('loginEmail').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (loginEmail === '' || !emailRegex.test(loginEmail)) {
            showError('loginEmailError', 'Please enter a valid email address.');
            isValid = false;
        }

        // Password Validation
        const loginPassword = document.getElementById('loginPassword').value;
        if (loginPassword.length < 8) {
            showError('loginPasswordError', 'Password must be at least 8 characters.');
            isValid = false;
        }

        // Final validation
        if (isValid) {
            alert('Login successful!');
            loginForm.reset();
        }
    });

    // Utility functions
    function showError(elementId, errorMessage) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = errorMessage;
        errorElement.style.color = 'red';
    }

    function clearErrors(errorIds) {
        errorIds.forEach(function (id) {
            const errorElement = document.getElementById(id);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    }
});
