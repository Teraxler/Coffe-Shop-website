let alertIntervalId;

// Initial value
alertIntervalId = null

// Get elements
function getAlertElement() {
  return document.getElementById("alert-message");
}

// Alert
function showAlertMessage(message, isSuccessfull) {
  const alertElement = getAlertElement();

  setColorAlert(isSuccessfull);

  alertElement.innerText = message;
  alertElement.parentElement.style.right = "0";

  setTimerAlert(3000);
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

export { showAlertMessage };
