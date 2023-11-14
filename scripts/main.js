import { addMenuLinks } from "../scripts/modules.js";
import { addFooterMenuLinks } from "../scripts/modules.js";
import { countProductsPage as countProductsPageObj } from "../scripts/modules.js";
import { countCommentsPage as countCommentsPageObj } from "../scripts/modules.js";
import { changeMenuVisibility } from "../scripts/modules.js";
import { addProductsPage } from "../scripts/modules.js";
import { addCommentsPage } from "../scripts/modules.js";
import { changeStartProductId } from "../scripts/modules.js";
import { changeStartCommentId } from "../scripts/modules.js";
// import {  } from "../scripts/modules.js";

let $ = document,
  startProductId,
  productsListArray,
  commentsListArray,
  navigationLinksArray,
  countProductOfPage,
  countCommentsOfPage;

// Initial value
startProductId = 1;
countProductOfPage = countProductsPageObj();
countCommentsOfPage = countCommentsPageObj();

// List items
productsListArray = [
  {
    id: 1,
    name: "Cappacino",
    cover: "../images/coffee-shop-page/cappacino.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "8.601",
  },
  {
    id: 2,
    name: "Mocha",
    cover: "../images/coffee-shop-page/mocha.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "9.202",
  },
  {
    id: 3,
    name: "Latte",
    cover: "../images/coffee-shop-page/latte.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "11.403",
  },
  {
    id: 4,
    name: "Cold Java",
    cover: "../images/coffee-shop-page/cold-java.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "6.404",
  },
  {
    id: 5,
    name: "Cappacino",
    cover: "../images/coffee-shop-page/cappacino.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "8.605",
  },
  {
    id: 6,
    name: "Mocha",
    cover: "../images/coffee-shop-page/mocha.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "9.206",
  },
  {
    id: 7,
    name: "Latte",
    cover: "../images/coffee-shop-page/latte.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "11.407",
  },
  {
    id: 8,
    name: "Cold Java",
    cover: "../images/coffee-shop-page/cold-java.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "6.408",
  },
  {
    id: 9,
    name: "Cappacino",
    cover: "../images/coffee-shop-page/cappacino.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, fermentum id id vitae, integer fermentum tellus. In vitae id nisl quis ornare diam commodo in vel dolor.",
    price: "8.609",
  },
  // {id: 5, name: "Cappacino", cover: "", description: "", price: ""},
];

commentsListArray = [
  {
    id: 1,
    name: "Mrs Catherine White",
    gender: "female",
    photo: "../images/coffee-shop-page/ellipse 39.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
  {
    id: 2,
    name: "Mrs Catherine White",
    gender: "female",
    photo: "../images/coffee-shop-page/ellipse 38.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
  {
    id: 3,
    name: "Mrs Catherine White",
    gender: "female",
    photo: "../images/coffee-shop-page/ellipse 39.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
  {
    id: 4,
    name: "Mrs Catherine White",
    gender: "female",
    photo: "../images/coffee-shop-page/ellipse 39.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
  {
    id: 5,
    name: "Mrs Catherine White",
    gender: "female",
    photo: "../images/coffee-shop-page/ellipse 39.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
  {
    id: 6,
    name: "Mr John White",
    gender: "male",
    photo: "../images/coffee-shop-page/ellipse 38.jpg",
    title: "As good as advertised",
    description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit,”",
    timePass: "44 Hours Ago",
  },
];

navigationLinksArray = [
  { id: 1, title: "hoem", href: "../pages/index.html" },
  { id: 2, title: "about", href: "../pages/about.html" },
  { id: 3, title: "menu", href: "../pages/menu.html" },
  { id: 4, title: "products", href: "../pages/products.html" },
  { id: 5, title: "news", href: "#" },
  { id: 6, title: "locations", href: "../pages/location.html" },
  // {id: 7, title: ""},
];

// Get Elments
const nextProductsBtn = $.getElementById("next-products");
const beforeProductsBtn = $.getElementById("before-products");
const commentsPagination = $.getElementById("comments-pagination");
const toggleMenu = $.getElementById("toggle-menu");

window.addEventListener("DOMContentLoaded", () => {
  addMenuLinks(navigationLinksArray);
  addProductsPage(productsListArray);
  addCommentsPage(commentsListArray);
  addFooterMenuLinks(navigationLinksArray);
});

window.addEventListener("resize", () => {
  let newCountOfProducts = countProductsPageObj();
  let newCountOfComments = countCommentsPageObj();

  if (countProductOfPage !== newCountOfProducts) {
    countProductOfPage = newCountOfProducts;
    addProductsPage(productsListArray);
  }

  if (countCommentsOfPage !== newCountOfComments) {
    countCommentsOfPage = newCountOfComments;
    addCommentsPage(commentsListArray);
  }
});

nextProductsBtn.addEventListener("click", () => {
  let countproduct = countProductsPageObj();

  startProductId++;

  if (startProductId > productsListArray.length - countproduct + 1) {
    startProductId = 1;
  }

  changeStartProductId(startProductId);

  addProductsPage(productsListArray);
});

beforeProductsBtn.addEventListener("click", () => {
  let countProductOfPage = countProductsPageObj();

  startProductId--;

  if (startProductId <= 0) {
    startProductId = productsListArray.length + 1 - countProductOfPage;
  }

  changeStartProductId(startProductId);

  addProductsPage(productsListArray);
});

commentsPagination.addEventListener("click", (event) => {
  let newStartCommentId;

  if (event.target.id === "1") {
    newStartCommentId = 1;
    event.target.style.fill = "#8C8C8C";
  } else if (event.target.id === "2") {
    newStartCommentId = countCommentsPageObj();
    event.target.style.fill = "#8C8C8C";
  } else if (event.target.id === "3") {
    newStartCommentId = countCommentsPageObj() * 2;
    event.target.style.fill = "#8C8C8C";
  }

  if (newStartCommentId) {
    changeStartCommentId(newStartCommentId);
    addCommentsPage(commentsListArray);
  }
});

toggleMenu.addEventListener("click", () => {
  changeMenuVisibility();
});
