import { persianNumbers } from "../data-base.js";

let $ = document,
  thisMonth,
  nameMonth,
  thisYear,
  today,
  daysOfWeek,
  nameWeekDays;

const btnNextMonth = getbtnNextMonth();
const btnPerviousMonth = getbtnPerviousMonth();
const calendarContainer = getCalendarContainer();

nameWeekDays = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];
nameMonth = [
  "Farvardin",
  "Ordibehesht",
  "Khordad",
  "Tir",
  "Mordad",
  "Shahrivar",
  "Mehr",
  "Aban",
  "Azar",
  "Dey",
  "Bahman",
  "Esfand",
];

// Initial value
daysOfWeek = 7;
today = getToday();
thisMonth = getThisMonth();
thisYear = getThisYear();

// Get Elements
function getbtnNextMonth() {
  return $.getElementById("next-month__btn");
}

function getbtnPerviousMonth() {
  return $.getElementById("pervious-month__btn");
}

function getCalendarContainer() {
  return $.getElementById("calendar__container");
}

function getAlertElement() {
  return $.getElementById("alert-message");
}

function getMonthAndYearCountainer() {
  return $.getElementById("month-&-year-container");
}

function showAlertMessage(message) {
  const alertContainer = getAlertElement();

  alertContainer.innerHTML = message;

  alertContainer.parentElement.style = "right: 0;";

  setTimeout(() => {
    alertContainer.parentElement.style = "right: -288px;";
  }, 3000);
}

// Calculate
function calcCountDaysOfMonth(month) {
  let daysOfMonth;

  if ([1, 2, 3, 4, 5, 6].includes(month)) {
    daysOfMonth = 31;
  } else if ([7, 8, 9, 10, 11].includes(month)) {
    daysOfMonth = 30;
  } else {
    daysOfMonth = 29;
  }

  return daysOfMonth;
}

function increaseThisMonth() {
  if (thisMonth < 12) {
    thisMonth++;
  } else {
    thisYear++;
    thisMonth = 1;
  }
}

function decreaseThisMonth() {
  if (thisMonth > 1) {
    thisMonth--;
  } else {
    thisYear--;
    thisMonth = 12;
  }
}

function getDateNow() {
  let time = new Date().toLocaleDateString("fa-ir");

  return time.split("/"); // 1402/05/25 => ["1402", "05", "25"]
}

function getToday() {
  const time = getDateNow();

  let today = fixNumbers(time[2]);
  return Number(today);
}

function getThisMonth() {
  const time = getDateNow();

  let thisMonth = fixNumbers(time[1]);
  return +thisMonth;
}

function getThisYear() {
  const time = getDateNow();

  let thisYear = fixNumbers(time[0]);
  return Number(thisYear);
}

function fixNumbers(number) {
  if (typeof number === "string") {
    for (let i = 0; i < 10; i++) {
      number = number.replace(persianNumbers[i], i);
    }
  }

  return number;
}

// Create
function createTableItem(number, isToday) {
  let property;

  if (isToday) {
    property = "bg-[#45539D] text-white";
  } else {
    property = "hover:bg-[#D5D4DF]";
  }

  return `<td class="text-center border py-2 xs:p-4 lg:p-5 ${property}" id="day">${number}</td>`;
}

function createTableRow() {
  let isToday, tableItems, tableRow, daysOfMonth;

  tableItems = "";
  tableRow = "";
  daysOfMonth = calcCountDaysOfMonth(thisMonth);

  for (let i = 1; i <= daysOfMonth; i++) {
    isToday = i === today;
    tableItems += createTableItem(i, isToday);

    if (i % daysOfWeek === 0) {
      tableRow += `<tr>${tableItems}</tr>`;
      tableItems = "";
    }
  }

  tableRow += `<tr>${tableItems}</tr>`;

  return tableRow;
}

function createCalendar() {
  let tableRow = createTableRow();

  return tableRow;
}

function createHeaderCalendar() {
  let items = "",
    tableRow;

  for (const nameDay of nameWeekDays) {
    items += `<th class="text-center p-2 xs:p-3 lg:p-5">${nameDay}</th>`;
  }

  tableRow = `<tr>${items}</tr>`;
  return tableRow;
}

// Change Value
function changeToday(event) {
  if (event.target.id === "day") {
    today = Number(event.target.innerHTML);
    return true;
  }
}

// Render
function renderCalnedar() {
  const calendarContainer = getCalendarContainer();
  let calendar = createHeaderCalendar();
  calendar += createCalendar();

  renderInfoOfYear();

  calendarContainer.innerHTML = calendar;
}

function renderInfoOfYear() {
  const infoOfYearContainer = getMonthAndYearCountainer();

  infoOfYearContainer.innerHTML = `${nameMonth[thisMonth - 1]} ${thisYear}`;
}

// Events
window.addEventListener("DOMContentLoaded", () => {
  renderCalnedar();
});

btnNextMonth.addEventListener("click", () => {
  increaseThisMonth();

  console.log(thisMonth);
  renderCalnedar();
});

btnPerviousMonth.addEventListener("click", () => {
  decreaseThisMonth();

  console.log(thisMonth);
  renderCalnedar();
});

calendarContainer.addEventListener("click", (event) => {
  if (changeToday(event)) {
    renderCalnedar();
  }
});
