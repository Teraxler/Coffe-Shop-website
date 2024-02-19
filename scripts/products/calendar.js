import { persianNumbers } from "../data-base.js";

let $ = document,
  today,
  thisYear,
  thisMonth,
  nameMonth,
  nameWeekDays,
  fullNameDays;

const btnNextMonth = getBtnNextMonth();
const btnPerviousMonth = getBtnPreviousMonth();
const calendarContainer = getCalendarContainer();

nameWeekDays = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];
fullNameDays = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
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
today = getToday();
thisMonth = getThisMonth();
thisYear = getThisYear();
const daysOfWeek = 7;

// Get elements
function getBtnNextMonth() {
  return $.getElementById("next-month__btn");
}

function getBtnPreviousMonth() {
  return $.getElementById("pervious-month__btn");
}

function getCalendarContainer() {
  return $.getElementById("calendar__container");
}

function getDateContainer() {
  return $.getElementById("date-container");
}

function getMonthAndYearCountainer() {
  return $.getElementById("month-&-year-container");
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

// Show day info
function showDate() {
  const container = getDateContainer();
  let weekday;

  weekday = calcWeekday();

  container.textContent = `Booking Coffee - on ${fullNameDays[weekday]}, ${
    nameMonth[thisMonth - 1]
  } ${today}, ${thisYear}`;
}

function goToNextMonth() {
  if (thisMonth < 12) {
    thisMonth++;
  } else {
    thisYear++;
    thisMonth = 1;
  }
}

function goToPreviousMonth() {
  if (thisMonth > 1) {
    thisMonth--;
  } else {
    thisYear--;
    thisMonth = 12;
  }
}

function getDateNow() {
  let localDate, time;
  localDate = new Date().toLocaleDateString("fa-ir");

  time = localDate.split("/"); // 1402/05/25 => ["1402", "05", "25"]

  return { year: time[0], month: time[1], day: time[2] };
}

function getToday() {
  let { day: today } = getDateNow();

  today = fixNumbers(today);
  return Number(today);
}

function calcWeekday() {
  let weekDay = today % daysOfWeek;
  return Number(weekDay);
}

function getThisMonth() {
  let { month: thisMonth } = getDateNow();

  thisMonth = fixNumbers(thisMonth);
  return Number(thisMonth);
}

function getThisYear() {
  let { year: thisYear } = getDateNow();

  thisYear = fixNumbers(thisYear);
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
function createTableData(number, isToday) {
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
    isToday = i === today ? true : false;

    tableItems += createTableData(i, isToday);
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

function createTableHeader() {
  let items = "",
    tableRow;

  for (const nameDay of nameWeekDays) {
    items += `<th class="font-semibold text-center p-2 xs:p-3 lg:p-5">${nameDay}</th>`;
  }

  tableRow = `<tr>${items}</tr>`;
  return tableRow;
}

// Change value
function changeDay(event) {
  let element = event.target;

  if (element.id === "day") {
    today = Number(element.textContent);

    return true;
  }
}

// Render
function renderCalnedar() {
  const calendarContainer = getCalendarContainer();
  let calendar = createTableHeader();

  renderInfoOfYear();

  calendar += createCalendar();
  calendarContainer.innerHTML = calendar;
}

function renderInfoOfYear() {
  const infoOfYearContainer = getMonthAndYearCountainer();

  infoOfYearContainer.innerHTML = `${nameMonth[thisMonth - 1]} ${thisYear}`;
}

// function saveToLocalStorage() {}

// Events
window.addEventListener("DOMContentLoaded", () => {
  renderCalnedar();
  showDate();
});

btnNextMonth.addEventListener("click", () => {
  goToNextMonth();
  renderCalnedar();
  showDate();
});

btnPerviousMonth.addEventListener("click", () => {
  if ((thisMonth > getThisMonth()) | (thisYear > getThisYear())) {
    goToPreviousMonth();
    renderCalnedar();
    showDate();
  }
});

calendarContainer.addEventListener("click", (event) => {
  if (changeDay(event)) {
    renderCalnedar();
    showDate();
  }
});

export { today, thisMonth, thisYear, getToday, getThisMonth, getThisYear };
