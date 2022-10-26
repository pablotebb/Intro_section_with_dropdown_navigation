const btnHamburger = document.querySelector(".header-snap__hamburger");
const btnClose = document.querySelector(".header-snap__close");
const subMenu = document.querySelector(".header-snap-sub-menu");
const subMenuFeatures = document.querySelector(".features");
const MenuFeatures = document.querySelector(".header-snap-sub-menu-features");
const subMenuCompany = document.querySelector(".company");
const MenuCompany = document.querySelector(".header-snap-sub-menu-company");
const arrowCompany = document.querySelector("#img-company");
const arrowFeatures = document.querySelector("#img-features");
const arrowMobileFeatures = document.querySelector("#arrow-features");
const arrowMobileCompany = document.querySelector("#arrow-company");
const arrowSummaryCompany = document.querySelector("#arrow-summary-company");
const arrowSummaryFeatures = document.querySelector("#arrow-summary-features");
const wrapper = document.querySelector(".wrapper-header");
let windowWidth = window.innerWidth;

btnHamburger.addEventListener("click", () => {
  wrapper.classList.add("display-background");
  subMenu.style.display = "flex";
  btnHamburger.style.display = "none";
  btnClose.style.display = "block";
});

btnClose.addEventListener("click", () => {
  wrapper.classList.remove("display-background");
  subMenu.style.display = "none";
  btnHamburger.style.display = "block";
  btnClose.style.display = "none";
});

subMenuFeatures.addEventListener("click", () => {
  deleteArrows(false, true);
  arrowFeatures.classList.toggle("reverse-arrow");
  MenuFeatures.classList.toggle("display-flex");
  MenuCompany.classList.remove("display-flex");
});

subMenuCompany.addEventListener("click", () => {
  deleteArrows(true, false);
  arrowCompany.classList.toggle("reverse-arrow");
  MenuCompany.classList.toggle("display-flex");
  MenuFeatures.classList.remove("display-flex");
});

arrowSummaryFeatures.addEventListener("click", () => {
  arrowMobileFeatures.classList.toggle("reverse-arrow");
  deleteArrows(false, true);
});

arrowSummaryCompany.addEventListener("click", () => {
  arrowMobileCompany.classList.toggle("reverse-arrow");
  deleteArrows(true, false);
});

function deleteArrows(arr1 = true, arr2 = true) {
  if (arr1) {
    arrowFeatures.classList.remove("reverse-arrow");
  }
  if (arr2) {
    arrowCompany.classList.remove("reverse-arrow");
  }
}

function deleteMobileArrows(arr1 = true, arr2 = true) {
  if (arr1) {
    arrowMobileFeatures.classList.remove("reverse-arrow");
  }
  if (arr2) {
    arrowMobileCompany.classList.remove("reverse-arrow");
  }
}

window.onresize = () => {
  windowWidth = window.innerWidth;
  console.log("win:", windowWidth);
  if (windowWidth >= 1100) {
    btnHamburger.style.display = "none";
    wrapper.classList.remove("display-background");
    subMenu.style.display = "none";
    btnClose.style.display = "none";
    windowWidth = 900;
  } else {
    btnHamburger.style.display = "block";
    MenuFeatures.classList.remove("display-flex");
    deleteArrows(false, true);
    MenuCompany.classList.remove("display-flex");
    deleteArrows(true, false);
  }
};
