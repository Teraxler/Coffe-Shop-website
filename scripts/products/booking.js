import { today as selectedDay } from "./calendar.js";
import { thisMonth as selectedMonth } from "./calendar.js";
import { thisYear as selectedYear } from "./calendar.js";

import { getToday } from "./calendar.js";
import { getThisMonth } from "./calendar.js";
import { getThisYear } from "./calendar.js";

let $ = document,
  alertIntervalId,
  maxBookingCount;

// Elements
const btnPlus = getBtnPlus();
const btnMinus = getBtnMinus();
const bokkingInput = getBookingInput();
const btnNext = getBtnNext();

// Initial value
maxBookingCount = 50;
alertIntervalId = null;

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
function showAlertMessage(message, isSuccessfull = false) {
  const alertElement = getAlertElement();

  setColorAlert(isSuccessfull);

  alertElement.textContent = message;
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

function isValidDate() {
  let isValid = false;

  if (
    (selectedDay >= getToday()) &
    (selectedMonth >= getThisMonth()) &
    (selectedYear >= getThisYear())
  ) {
    isValid = true;
  } else if (
    (selectedMonth > getThisMonth()) &
    (selectedYear >= getThisYear())
  ) {
    isValid = true;
  } else if (selectedYear > getThisYear()) {
    isValid = true;
  }

  return isValid;
}

// Local storage
function setOnLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getOnLocalStorage(key) {
  return localStorage.getItem(key);
}

// Events
btnPlus.addEventListener("click", () => {
  const bookingInput = getBookingInput();
  let bookingCount = Number(bookingInput.value);

  bookingInput.value = checkCountCoffeeValue(bookingCount + 1);
});

btnMinus.addEventListener("click", () => {
  const bookingInput = getBookingInput();
  let bookingCount = Number(bookingInput.value);

  bookingInput.value = checkCountCoffeeValue(bookingCount - 1);
});

bokkingInput.addEventListener("blur", (event) => {
  event.target.value = checkCountCoffeeValue(event.target.value);
});

btnNext.addEventListener("click", () => {
  const bokkingInput = getBookingInput();

  let countAndDayBooking = {
    count: bokkingInput.value,
    day: selectedDay,
    month: selectedMonth,
    year: selectedYear,
  };

  if (bokkingInput.value < 1) {
    showAlertMessage("Please enter count you want reserve.", false);
  } else {
    if (isValidDate()) {
      setOnLocalStorage("contBooking", JSON.stringify(countAndDayBooking));

      showAlertMessage("Your booking is done.", true);
    } else {
      showAlertMessage("Please enter a valid day!", false);
    }
  }

  console.warn(getOnLocalStorage("contBooking"));
});
