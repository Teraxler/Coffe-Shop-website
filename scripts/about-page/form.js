let $ = document,
  alertIntervalId = null;

// Get Elements 
function getNameInput() {
  return $.getElementById("input-name");
}

function getEmailInput() {
  return $.getElementById("input-email");
}

function getSubjectInput() {
  return $.getElementById("input-subject");
}

function getMessageInput() {
  return $.getElementById("input-message");
}

function getBtnSubmit() {
  return $.getElementById("btn-submit");
}

function getFormContainer() {
  return $.getElementById("form-container");
}

function getAlertElement() {
  return $.getElementById("alert-message");
}

const btnSubmit = getBtnSubmit();
const inputNameElem = getNameInput();
const inputEmailElem = getEmailInput();
const inputMessageElem = getMessageInput();

// Validation
function nameValidation(name) {
  name = name.trim();
  let isValid = true;
  const regexName = /^[a-zA-ZÀ-ÿ\s\-']+$/;

  if (!name) {
    isValid = false;
    showAlertMessage("please enter your name", false);
  } else if (name.length > 30) {
    isValid = false;
    showAlertMessage("name must be maximum 30 charactors", false);
  } else if (!regexName.test(name)) {
    isValid = false;
    showAlertMessage("please enter a valid name", false);
  }
  return isValid;
}

function emailValidation(email) {
  email = email.trim();
  let isValid = true;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    isValid = false;
    showAlertMessage("Please enter your email", false);
  } else if (email.length > 40) {
    isValid = false;
    showAlertMessage("Email must be maximum 40 charactors", false);
  } else if (!regexEmail.test(email)) {
    isValid = false;
    showAlertMessage("Please enter a valid email", false);
  }

  return isValid;
}

function messageValidation(message) {
  message = message.trim();
  let isValid = true;

  if (!message) {
    isValid = false;
    showAlertMessage("Please enter message");
  } else if (!isNaN(message)) {
    isValid = false;
    showAlertMessage("Please enter a viled message");
  }

  return isValid;
}

function inputsValidation() {
  let name, email, message;
  const inputNameElem = getNameInput();
  const inputEmailElem = getEmailInput();
  const inputMessageElem = getMessageInput();

  name = inputNameElem.value;
  email = inputEmailElem.value;
  message = inputMessageElem.value;

  if (
    nameValidation(name) &&
    emailValidation(email) &&
    messageValidation(message)
  ) {
    return true;
  }
}

// Alert
function showAlertMessage(message, isSuccessfull) {
  const alertElement = getAlertElement();

  setColorAlert(isSuccessfull) 

  alertElement.innerHTML = message;
  alertElement.parentElement.style.right = "0";

  setTimerAlert(3000)
}

function setTimerAlert(seconds) {
  const alertElement = getAlertElement();

  if (alertIntervalId) {
    clearInterval(alertIntervalId);
  }

  alertIntervalId = setTimeout(() => {
    alertElement.parentElement.style.right = "-400px";
    alertIntervalId = null;
  }, seconds);
}

function setColorAlert(isSuccessfull) {
  const alertElement = getAlertElement();

  if (isSuccessfull) {
    alertElement.style.color = "#5cb85c"; // Success color
  } else {
    alertElement.style.color = "#d9534f"; // Danger color
  }
}

// Events
inputNameElem.addEventListener("blur", (event) => {
  nameValidation(event.target.value);
});

inputEmailElem.addEventListener("blur", (event) => {
  emailValidation(event.target.value);
});

inputMessageElem.addEventListener("blur", (event) => {
  messageValidation(event.target.value);
});

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  if (inputsValidation()) {
    showAlertMessage("Sent", true);
    window.
    resiveInputsValue()
  }
});

// function resiveInputsValue() {

// }