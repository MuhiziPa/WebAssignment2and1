// validation.js

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return passwordRegex.test(password);
}

function validateForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    alert("Invalid email address. Please enter a valid email.");
    return false;
  }

  if (!validatePassword(password)) {
    alert("Invalid password. Password must meet the specified criteria.");
    return false;
  }
  alert("Validation Successfull !! ");
  return true;
}

function submitForm() {
  if (validateForm()) {
    console.log("Form is valid. Performing further actions...");
  }
}
