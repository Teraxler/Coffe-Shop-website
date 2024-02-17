import { menus } from "../data-base.js";

let $ = document;

// Get Elements
function getCoffeesContainer() {
  return $.getElementById("coffees-container");
}
function getTeasContainer() {
  return $.getElementById("teas-container");
}
function getSmoothiesContainer() {
  return $.getElementById("smoothies-container");
}

// Create
function createMenuItem(item) {
  let {name, description, price} = item
  
  return `<li>
      <a class="flex items-start gap-14 xs:gap-6 md:gap-14 lg:gap-24 xl:gap-44 2xl:gap-[189px]" href="#">
        <div>
          <h6 class="text-[22px] font-medium leading-[33.66px] tracking-normal capitalize">
            ${name}
          </h6>
          <p class="text-xs font-praise leading-[18.36px] tracking-tight capitalize">
            ${description}
          </p>
        </div>
        <span>$${price}</span>
      </a>
    </li>`;
}

function createMenu() {
  let teas, coffees, smoothies;

  teas = "";
  coffees = "";
  smoothies = "";

  for (const menuItem of menus) {
    if (menuItem.type === "tea") {
      teas += createMenuItem(menuItem);
    } else if (menuItem.type === "coffee") {
      coffees += createMenuItem(menuItem);
    } else {
      smoothies += createMenuItem(menuItem);
    }
  }

  return { tea: teas, coffee: coffees, smoothie: smoothies };
}

// Render
function renderMenuItems() {
  let teas, coffees, smoothies, menuItems;

  const teaContainer = getTeasContainer();
  const coffeeContainer = getCoffeesContainer();
  const smoothiesContainer = getSmoothiesContainer();

  menuItems = createMenu();

  teas = menuItems.tea;
  coffees = menuItems.coffee;
  smoothies = menuItems.smoothie;

  teaContainer.innerHTML = teas;
  coffeeContainer.innerHTML = coffees;
  smoothiesContainer.innerHTML = smoothies;
}

window.addEventListener("DOMContentLoaded", () => {
  renderMenuItems();
});
