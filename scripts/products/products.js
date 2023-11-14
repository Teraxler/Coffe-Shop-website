import { products2 as products } from "../data-base.js";

let $ = document,
countProducts = setCountProducts()

function getProductsContainer() {
  return $.getElementById("products__container");
}

function setCountProducts() {
  let screenWidth, countProducts;
  screenWidth = window.innerWidth;

  if (screenWidth > 1280) {
    countProducts = 8;
  } else if (screenWidth > 768) {
    countProducts = 6;
  } else if (screenWidth > 567) {
    countProducts = 4
  } else {
    countProducts = 2
  }

  return countProducts
  // return 8
}

function createProducts() {
  let productList = "",
    countProducts = setCountProducts()

  for (const product of products) {
    if (product.id <= countProducts) {
      productList += `<div
      class="flex flex-1 flex-col uppercase text-center w-40 sm:w-[200px] lg:w-[228px] 2xl:w-auto items-center"
      >
      <div class="rounded-full sm:w-48 lg:w-auto border-white border-2 shadow-xl mb-8">
        <img src="${product.img}" alt="" />
      </div>
      <div class=" text-lg lg:text-xl">
        <h4 class="px-1 mb-2 md:font">${product.title}</h4>
        <span class="text-[#E04848] mb-1.5">${product.price}</span>
        <p class="text-base">${product.description}</p>
      </div>
      </div>`;
    }
  }

  return productList;
}

function renderProductsPage() {
  const productsContainer = getProductsContainer();
  let products = createProducts();

  productsContainer.innerHTML = products;
}

window.addEventListener("DOMContentLoaded", () => {
  renderProductsPage();
})

window.addEventListener("resize", () => {
  let newCountProducts = setCountProducts()

  if (countProducts !== newCountProducts) {
    countProducts = newCountProducts
    renderProductsPage()
  }
})