"use strict";

import { navigationLinks } from "../scripts/data-base.js";

let $ = document,
  isMenuVisible;

// Initial value
isMenuVisible = false;

// Get Elments
const toggleMenu = $.getElementById("toggle-menu");

// Get Elements
function getMenu() {
  return $.getElementById("menu");
}

function getMenuItemsContainer() {
  return $.getElementById("menu-items__container");
}

// Change
function toggleMenuVisibility() {
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

// Create
function createNavigationLinks(navigationLinks) {
  let linksContainer = "";

  for (const link of navigationLinks) {
    linksContainer += `<li>
            <a href="${link.href}">
              ${link.title}
            </a>
          </li>`;
  }

  return linksContainer;
}

// Render
function renderMenuNavigationLinks(navigationLinks) {
  const menuItemsContainer = getMenuItemsContainer();
  clearInnerHtml(menuItemsContainer);

  let navlinks = createNavigationLinks(navigationLinks);
  menuItemsContainer.insertAdjacentHTML("beforeend", navlinks);
}

function clearInnerHtml(element) {
  element.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderMenuNavigationLinks(navigationLinks);
});

toggleMenu.addEventListener("click", toggleMenuVisibility);
