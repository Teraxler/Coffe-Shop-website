"use strict";

import { products as productsList } from "../data-base.js";

let $ = document,
  startProductId,
  countProductOfPage;

// Get Elments
const nextProductsBtn = $.getElementById("next-products");
const beforeProductsBtn = $.getElementById("before-products");

// Initial value
startProductId = 1;

// Get Elements
function getProductsContainer() {
  return $.getElementById("products-container");
}

// Create
function createProductsPage(productsList) {
  let endProductId,
    products = "";

  endProductId = calculateEndPoint(startProductId, countProductsPageFunc());

  for (const product of productsList) {
    if (product.id >= startProductId && product.id < endProductId) {
      products += `<div 
          class="basis-56 max-w-[260px] bottom-0 hover:bottom-1 hover:shadow-xl relative duration-300 grow px-[15px] pt-[15px]
           pb-[26px] bg-primary-500 rounded-[20px] text-white">
        <div
          class="md:w-[230px] md:h-[149px] rounded-xl overflow-hidden mb-2.5">
          <img
            src="${product.cover}"
            alt=""
            width="230"
            height="149"/>
        </div>
        <div>
          <h4
            class="font-semibold lg:font-bold text-xl lg:text-[25px] mb-[11px]">
            ${product.name}
          </h4>
          <p
            class="text-primary-50 text-base leading-[21px] mb-8 lg:mb-[50px]">
            ${product.description}
          </p>
        </div>
        <div class="flex justify-between items-center">
          <span
            class="text-lg lg:text-[21px] font-semibold lg:font-bold">
            $${product.price}
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

// Calculate
function calculateEndPoint(startPoint, countInPgae) {
  return startPoint + countInPgae;
}

function countProductsPageFunc() {
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

// Set Product Id
function setStartProductId(newValue) {
  startProductId = newValue;
}

// Render Products
function renderProductsPage(productsList) {
  const productsContainer = getProductsContainer();
  clearProductsPage(productsContainer);

  let products = createProductsPage(productsList);
  productsContainer.insertAdjacentHTML("beforeend", products);
}

function clearProductsPage(container) {
  container.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderProductsPage(productsList);
});

window.addEventListener("resize", () => {
  let newCountOfProducts = countProductsPageFunc();

  if (countProductOfPage !== newCountOfProducts) {
    countProductOfPage = newCountOfProducts;
    renderProductsPage(productsList);
  }
});

nextProductsBtn.addEventListener("click", () => {
  let countproduct = countProductsPageFunc();

  startProductId++;

  if (startProductId > productsList.length - countproduct + 1) {
    startProductId = 1;
  }

  setStartProductId(startProductId);

  renderProductsPage(productsList);
});

beforeProductsBtn.addEventListener("click", () => {
  let countProductOfPage = countProductsPageFunc();

  startProductId--;

  if (startProductId <= 0) {
    startProductId = productsList.length + 1 - countProductOfPage;
  }

  setStartProductId(startProductId);

  renderProductsPage(productsList);
});
