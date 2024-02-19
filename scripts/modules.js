"use strict";

let $ = document,
  isMenuVisible,
  startProductId,
  startCommentId;

// Initial value
isMenuVisible = false;
startProductId = 1;
startCommentId = 1;

// Get Elements
function getMenu() {
  return $.getElementById("menu");
}

function getMenuItemsContainer() {
  return $.getElementById("menu-items__container");
}

function getFooterMenuItemsContainer() {
  return $.getElementById("footer-nav-items__container");
}

function getCommentsContainer() {
  return $.getElementById("comments-container");
}

function getProductsContainer() {
  return $.getElementById("products-container");
}

// Change
function changeStartProductId(newValue) {
  startProductId = newValue;
}

function changeStartCommentId(newValue) {
  startCommentId = newValue;
}

function changeMenuVisibility() {
  isMenuVisible ? hideMenu() : showMenu()
  
  isMenuVisible = !isMenuVisible;
}

function showMenu() {
  const menu = getMenu();
  menu.style.left = "0";
}

function hideMenu() {
  const menu = getMenu();
  menu.style.left = "-256px";
}

// Calculate
function calculateEndPoint(startPoint, countInPgae) {
  return startPoint + countInPgae;
}

function CalcCountProductsOfPage() {
  let count, screenWidth;
  screenWidth = window.innerWidth;

  if (screenWidth > 1280) {
    count = 4;
  } else if (screenWidth > 1023) {
    count = 3;
  } else if (screenWidth > 580) {
    count = 2;
  } else {
    count = 1;
  }

  return count;
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
function createNavigationLinks(navigationLinksArray) {
  let linksContainer = "";

  for (const link of navigationLinksArray) {
    linksContainer += `<li>
            <a href="${link.href}">
              ${link.title}
            </a>
          </li>`;
  }

  return linksContainer;
}

function createProductsPage(productsList) {
  let endProductId = calculateEndPoint(startProductId, CalcCountProductsOfPage());
  let products = "";

  for (const product of productsList) {
    if (product.id >= startProductId && product.id < endProductId) {

      let {cover, name, description, price}  = product

      products += `<div 
          class="basis-56 max-w-[260px] bottom-0 hover:bottom-1 hover:shadow-xl relative duration-300 grow px-[15px] pt-[15px]
           pb-[26px] bg-primary-500 rounded-[20px] text-white">
        <div
          class="md:w-[230px] md:h-[149px] rounded-xl overflow-hidden mb-2.5">
          <img
            src="${cover}"
            alt=""
            width="230"
            height="149"/>
        </div>
        <div>
          <h4
            class="font-semibold lg:font-bold text-xl lg:text-[25px] mb-[11px]">
            ${name}
          </h4>
          <p
            class="text-primary-50 text-base leading-[21px] mb-8 lg:mb-[50px]">
            ${description}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <span
            class="text-lg lg:text-[21px] font-semibold lg:font-bold">
            $${price}
          </span>
          <button
            class="bg-[#A0583C] rounded-xl py-1.5 sm:py-2 w-24 sm:w-30 shadow-xs text-sm lg:text-base font-normal lg:font-medium">
            Order now
          </button>
        </div>
      </div>`;
    }
  }

  return products;
}

function createCommentsPage(commentsListArray) {
  let endCommentId = calculateEndPoint(startCommentId, calcCountCommentsOfPage());
  let comments = "";

  for (const comment of commentsListArray) {
    if (comment.id >= startCommentId && comment.id < endCommentId) {

      let {photo, title, name, timePass, description} = comment

      comments += `<div
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
            class="text-white lg:text-3xl lg:text-center xl:text-[32px] lg:font-semibold xl:font-bold leading-[48px]">
            ${title}
          </h5>
          <p
          class="text-center text-[#D3CECE] font-normal lg:text-lg lx:text-xl">
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

  return comments;
}

// Add to HTML
function addMenuLinks(navigationLinksArray) {
  const menuItemsContainer = getMenuItemsContainer();
  menuItemsContainer.innerHTML = "";

  let navigationlinks = createNavigationLinks(navigationLinksArray);
  menuItemsContainer.insertAdjacentHTML("beforeend", navigationlinks);
}

function addFooterMenuLinks(navigationLinksArray) {
  const footerNavItemsContainer = getFooterMenuItemsContainer();
  footerNavItemsContainer.innerHTML = "";

  let navigationlinks = createNavigationLinks(navigationLinksArray);
  footerNavItemsContainer.insertAdjacentHTML("beforeend", navigationlinks);
}

function addProductsPage(productsListArray) {
  const productsContainer = getProductsContainer();
  productsContainer.innerHTML = "";

  let products = createProductsPage(productsListArray);
  productsContainer.insertAdjacentHTML("beforeend", products);
}

function addCommentsPage(commentsListArray) {
  const commentsContainer = getCommentsContainer();
  commentsContainer.innerHTML = "";

  let comments = createCommentsPage(commentsListArray);
  commentsContainer.insertAdjacentHTML("beforeend", comments);
}

// Exports
export {
  addMenuLinks,
  addFooterMenuLinks,
  CalcCountProductsOfPage,
  calcCountCommentsOfPage,
  changeMenuVisibility,
  addProductsPage,
  addCommentsPage,
  changeStartProductId,
  changeStartCommentId,
};
