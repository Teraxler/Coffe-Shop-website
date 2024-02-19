let alertSetTimeoutId;

// Initial value
alertSetTimeoutId = null

// Get elements
function getAlertElement() {
  return document.getElementById("alert-message");
}

// Alert
function showAlertMessage(message, isSuccessfull) {
  const alertElement = getAlertElement();

  setStatusAlert(isSuccessfull);

  alertElement.textContent = message;
  alertElement.parentElement.style.right = "0";

  setTimerAlert(3000);
}

function setTimerAlert(seconds) {
  const alertElement = getAlertElement();

  alertSetTimeoutId ? clearInterval(alertSetTimeoutId) : null;

  alertSetTimeoutId = setTimeout(() => {
    alertElement.parentElement.style.right = "-400px";
    alertSetTimeoutId = null;
  }, seconds);
}

function setStatusAlert(isSuccessfull) {
  const alertElement = getAlertElement();

  if (isSuccessfull) {
    alertElement.style.color = "#5cb85c"; // Success color
  } else {
    alertElement.style.color = "#d9534f"; // Danger color
  }
}

export { showAlertMessage };
