import { productsOfProductPage as products } from "../data-base.js";

let $ = document,
  countProducts = calcCountProductsOfPage();

function getProductsContainer() {
  return $.getElementById("products__container");
}

function calcCountProductsOfPage() {
  let screenWidth, countProducts;
  screenWidth = window.innerWidth;

  if (screenWidth > 1280) {
    countProducts = 8;
  } else if (screenWidth > 768) {
    countProducts = 6;
  } else if (screenWidth > 567) {
    countProducts = 4;
  } else {
    countProducts = 2;
  }

  return countProducts;
  // return 8
}

function createProducts() {
  let productsTemplate = "",
    countProducts = calcCountProductsOfPage();

  for (const product of products) {
    if (product.id <= countProducts) {
      let { title, img, price, description } = product;

      productsTemplate += `<div
      class="flex flex-1 flex-col uppercase text-center w-40 sm:w-[200px] lg:w-[228px] 2xl:w-auto items-center"
      >
      <div class="rounded-full sm:w-48 lg:w-auto border-white border-2 shadow-xl mb-8">
        <img src="${img}" alt="" />
      </div>
      <div class=" text-lg lg:text-xl">
        <h4 class="px-1 mb-2 md:font">${title}</h4>
        <span class="text-[#E04848] mb-1.5">${price}</span>
        <p class="text-base">${description}</p>
      </div>
      </div>`;
    }
  }

  return productsTemplate;
}

function renderProductsOfPage() {
  const productsContainer = getProductsContainer();
  let products = createProducts();

  productsContainer.innerHTML = products;
}

window.addEventListener("DOMContentLoaded", () => {
  renderProductsOfPage();
});

window.addEventListener("resize", () => {
  let newCountProducts = calcCountProductsOfPage();

  if (countProducts !== newCountProducts) {
    countProducts = newCountProducts;
    renderProductsOfPage();
  }
});
