"use strict";

import { navigationLinks } from "./data-base.js";

let $ = document;

// Get Elements
function getFooterNavigationContainer() {
  return $.getElementById("footer-nav-items__container");
}

// Create
function createNavigationLinks(navigationLinks) {
  let linksTemplate = "";

  for (const link of navigationLinks) {
    linksTemplate += `<li>
              <a href="${link.href}">
                ${link.title}
              </a>
            </li>`;
  }

  return linksTemplate;
}

// Render Footer Links
function renderFooterNavigationLinks(navigationLinks) {
  const footerNavItemsContainer = getFooterNavigationContainer();
  clearInnerHtml(footerNavItemsContainer);

  let navigationlinks = createNavigationLinks(navigationLinks);
  footerNavItemsContainer.insertAdjacentHTML("beforeend", navigationlinks);
}

function clearInnerHtml(element) {
  element.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderFooterNavigationLinks(navigationLinks);
});
