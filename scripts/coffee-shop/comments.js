import { comments } from "../data-base.js";

let $ = document,
  countCommentsOfPage,
  startCommentId;

// Initial value
startCommentId = 1;
countCommentsOfPage = calcCountCommentsOfPage();

// Get elements
const commentsPagination = $.getElementById("comments-pagination");

// Get elements
function getCommentsContainer() {
  return $.getElementById("comments-container");
}

// Set
// function setStartCommentId(newValue) {
//   startCommentId = newValue;
// }

// Calculate
function calculateEndPoint(startPoint, countOfPgae) {
  return startPoint + countOfPgae;
}

function calcCountCommentsOfPage() {
  let count, screenWidth;
  screenWidth = window.innerWidth;

  if (screenWidth > 1023) {
    count = 3;
  } else if (screenWidth > 546) {
    count = 2;
  } else {
    count = 1;
  }

  return count;
}

// Create
function createCommentsPage(comments) {
  let endCommentId,
    commentsTemplate = "";

  endCommentId = calculateEndPoint(startCommentId, calcCountCommentsOfPage());

  for (const comment of comments) {
    if (comment.id >= startCommentId && comment.id < endCommentId) {
      let { photo, title, name, description, timePass } = comment;

      commentsTemplate += `<div
        class="flex basis-72 flex-grow max-w-xs flex-col items-center lg:h-80 px-7 xl:h-[310px] bg-primary-700 rounded-[5px]">
        <div
          class="w-20 h-20 flex flex-shrink-0 rounded-full overflow-hidden relative -top-10">
          <img
            src="${photo}"
            alt=""
            width="80"
            height="80"/>
        </div>
        <div class="relative -top-7 flex items-center flex-col">
          <div class="">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="126" height="13" viewBox="0 0 126 13" fill="none">
              <path
                d="M7 0.454409L8.43001 4.54362L8.46515 4.64411H8.5716H13.1671L9.45897 7.1473L9.36314 7.21199L9.40131 7.32114L10.8236 11.3884L7.08393 8.8639L7 8.80724L6.91607 8.8639L3.17636 11.3884L4.59869 7.32114L4.63686 7.21199L4.54103 7.1473L0.832903 4.64411H5.4284H5.53485L5.56999 4.54362L7 0.454409Z"
                fill="#FCFF5C" stroke="#E4E74F" stroke-width="0.3"/>
              <path
                d="M119 0.454409L120.43 4.54362L120.465 4.64411H120.572H125.167L121.459 7.1473L121.363 7.21199L121.401 7.32114L122.824 11.3884L119.084 8.8639L119 8.80724L118.916 8.8639L115.176 11.3884L116.599 7.32114L116.637 7.21199L116.541 7.1473L112.833 4.64411H117.428H117.535L117.57 4.54362L119 0.454409Z"
                fill="#FFFCFC" stroke="#E4E74F" stroke-width="0.3"/>
              <path
                d="M91 0.454409L92.43 4.54362L92.4651 4.64411H92.5716H97.1671L93.459 7.1473L93.3631 7.21199L93.4013 7.32114L94.8236 11.3884L91.0839 8.8639L91 8.80724L90.9161 8.8639L87.1764 11.3884L88.5987 7.32114L88.6369 7.21199L88.541 7.1473L84.8329 4.64411H89.4284H89.5349L89.57 4.54362L91 0.454409Z"
                fill="#FCFF5C" stroke="#E4E74F" stroke-width="0.3"/>
              <path
                d="M63 0.454409L64.43 4.54362L64.4651 4.64411H64.5716H69.1671L65.459 7.1473L65.3631 7.21199L65.4013 7.32114L66.8236 11.3884L63.0839 8.8639L63 8.80724L62.9161 8.8639L59.1764 11.3884L60.5987 7.32114L60.6369 7.21199L60.541 7.1473L56.8329 4.64411H61.4284H61.5349L61.57 4.54362L63 0.454409Z"
                fill="#FCFF5C" stroke="#E4E74F" stroke-width="0.3"/>
              <path
                d="M35 0.454409L36.43 4.54362L36.4651 4.64411H36.5716H41.1671L37.459 7.1473L37.3631 7.21199L37.4013 7.32114L38.8236 11.3884L35.0839 8.8639L35 8.80724L34.9161 8.8639L31.1764 11.3884L32.5987 7.32114L32.6369 7.21199L32.541 7.1473L28.8329 4.64411H33.4284H33.5349L33.57 4.54362L35 0.454409Z"
                fill="#FCFF5C" stroke="#E4E74F" stroke-width="0.3"/>
            </svg>
          </div>
          <h5
            class="text-white md:text-xl lg:text-3xl text-center xl:text-[32px] lg:font-semibold xl:font-bold md:leading-10 lg:leading-[48px]">
            ${title}
          </h5>
          <p
          class="text-center text-[#D3CECE] font-normal text-base lg:text-lg lx:text-xl">
          ${description}
        </p>
          <div
            class="flex flex-col items-center mt-[22px] lg:font-semibold xl:font-bold">
            <p class="text-[#54DD8B] text-base leading-6">
              ${name}
            </p>
            <span class="text-[#CACACA] text-[15px] leading-6">
              ${timePass}
            </span>
          </div>
        </div>
      </div>`;
    }
  }

  return commentsTemplate;
}

function clearInnerHtml(element) {
  element.innerHTML = "";
}
function addClass(element, className) {
  element?.classList.add(className);
}

function removeClass(className) {
  let element = document.getElementsByClassName(className)[0];
  element?.classList.remove(className);
}

// Render Comments
function renderCommentsPage(comments) {
  const commentsContainer = getCommentsContainer();
  clearInnerHtml(commentsContainer);

  let commentsTemplate = createCommentsPage(comments);
  commentsContainer.insertAdjacentHTML("beforeend", commentsTemplate);
}

window.addEventListener("DOMContentLoaded", () => {
  renderCommentsPage(comments);

  setInterval(() => {
    if (startCommentId <= comments.length - countCommentsOfPage) {
      startCommentId++;
    } else {
      startCommentId = 1; // New begin
    }

    renderCommentsPage(comments);
  }, 5000);
});

commentsPagination.addEventListener("click", (event) => {
  let newStartCommentId,
    element = event.target;

  if (element.id === "1" || element.id === "2" || element.id === "3") {
    removeClass("comments-navigation__active");
    addClass(event.target, "comments-navigation__active");

    switch (element.id) {
      case "1":
        newStartCommentId = 1;
        break;
      case "2":
        newStartCommentId = calcCountCommentsOfPage();
        break;
      case "3":
        newStartCommentId = calcCountCommentsOfPage() * 2;
        break;
      default:
        break;
    }
  }

  if (newStartCommentId) {
    startCommentId = newStartCommentId;
    // setStartCommentId(newStartCommentId);
    renderCommentsPage(comments);
  }
});

window.addEventListener("resize", () => {
  let newCountOfComments = calcCountCommentsOfPage();

  if (countCommentsOfPage !== newCountOfComments) {
    countCommentsOfPage = newCountOfComments;
    renderCommentsPage(comments);
  }
});
