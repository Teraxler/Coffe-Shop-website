"use strict";

import { navigationLinks } from "./data-base.js";

let $ = document;

// Get Elements
function getFooterNavigationContainer() {
  return $.getElementById("footer-nav-items__container");
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

// Render Footer Links
function renderFooterNavigationLinks(navigationLinks) {
  const footerNavItemsContainer = getFooterNavigationContainer();
  clearFooterLinks(footerNavItemsContainer);

  let navigationlinks = createNavigationLinks(navigationLinks);
  footerNavItemsContainer.insertAdjacentHTML("beforeend", navigationlinks);
}

function clearFooterLinks(container) {
  container.innerHTML = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderFooterNavigationLinks(navigationLinks);
});
