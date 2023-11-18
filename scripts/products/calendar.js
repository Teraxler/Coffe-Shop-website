import { persianNumbers } from "../data-base.js";

let $ = document,
  today,
  thisYear,
  thisMonth,
  nameMonth,
  nameWeekDays,
  fullNameDays;

const btnNextMonth = getbtnNextMonth();
const btnPerviousMonth = getbtnPerviousMonth();
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
function getbtnNextMonth() {
  return $.getElementById("next-month__btn");
}

function getbtnPerviousMonth() {
  return $.getElementById("pervious-month__btn");
}

function getCalendarContainer() {
  return $.getElementById("calendar__container");
}

// function getAlertElement() {
//   return $.getElementById("alert-message");
// }

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
  let weekDay;

  weekDay = calcWeekOfDay();

  container.innerText = `Booking Coffee - on ${fullNameDays[weekDay]}, ${
    nameMonth[thisMonth - 1]
  } ${today}, ${thisYear}`;
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

function calcWeekOfDay() {
  let weekDay = today % daysOfWeek;
  return Number(weekDay);
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
    isToday = i === today;

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
function changeToday(event) {
  if (event.target.id === "day") {
    today = Number(event.target.innerHTML);

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
  increaseThisMonth();
  renderCalnedar();
  showDate();
});

btnPerviousMonth.addEventListener("click", () => {
  if(thisMonth > getThisMonth() | thisYear > getThisYear()) {
    decreaseThisMonth();
    renderCalnedar();
    showDate();

    btnPerviousMonth.classList.add()
  }
});

calendarContainer.addEventListener("click", (event) => {
  if (changeToday(event)) {
    renderCalnedar();
    showDate();
  }
});

export { today, thisMonth, thisYear, getToday, getThisMonth, getThisYear };