let $ = document,
  maxBookingCount;

// Elements
const btnPlus = getBtnPlus();
const btnMinus = getBtnMinus();
const bokkingInput = getBookingInput();
const btnNext = getBtnNext()

// Initial value
maxBookingCount = 50;

// Get Elements
function getBookingInput() {
  return $.getElementById("booking-input");
}

function getAlertElement() {
  return $.getElementById("alert-message");
}

function getBtnPlus() {
  return $.getElementById("plus-btn");
}

function getBtnMinus() {
  return $.getElementById("minus-btn");
}

function getBtnNext() {
  return $.getElementById("next-btn");
}

// Alert
function showAlertMessage(message) {
  const alertContainer = getAlertElement();

  alertContainer.innerHTML = message;

  alertContainer.parentElement.style = "right: 0";

  setTimeout(() => {
    alertContainer.parentElement.style = "right: -400px";
  }, 3000);
}

// Check
function checkCountCoffeeValue(value) {
  if (isNaN(value)) {
    value = 0;
    showAlertMessage("Please enter a number!!");
  } else if (value < 0) {
    value = 0;
    showAlertMessage("Please enter a number between (0, 50)");
  } else if (value > maxBookingCount) {
    value = maxBookingCount;
    showAlertMessage("Please enter a number between (0, 50)");
  }

  return value;
}

// Events
btnPlus.addEventListener("click", () => {
  const bookingInput = getBookingInput();
  let bookingCount = Number(bookingInput.value)

  bookingInput.value = checkCountCoffeeValue(bookingCount + 1);
});

btnMinus.addEventListener("click", () => {
  const bookingInput = getBookingInput();
  let bookingCount = Number(bookingInput.value)

  bookingInput.value = checkCountCoffeeValue(bookingCount - 1);
});

bokkingInput.addEventListener("blur", (event) => {
  event.target.value = checkCountCoffeeValue(event.target.value);
});

// btnNext.addEventListener("click", () => {
//   const bookingInput = getBookingInput();

// })