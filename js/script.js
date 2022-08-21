/* ============ SHOW MENU ============ */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ====== MENU SHOW ======*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ====== MENU HIDEN ======*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ============ REMOVE MENU MOVILE ============ */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const nanMenu = document.getElementById("nav-menu");
  /* When we click on each nav-link, we remove the show-menu */
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ============ CHANGE BACKGROUND HEADER ============ */
const scrollHeader = () => {
  const header = document.getElementById("header");
  /* When the scroll is greater that 50 viewport heigth, add the scroll-header class */
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
