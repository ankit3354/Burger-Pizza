const HumburgurContent = document.querySelector(".Humburger_container");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav_list");
const cross_icon = document.querySelector(".close_icon");

HumburgurContent.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.add("menu_open");
});

navList.addEventListener("click", (e) => {
  e.stopPropagation();
});

cross_icon.addEventListener("click", () => {
  navbar.classList.remove("menu_open");
});

window.addEventListener("click", () => {
  navbar.classList.remove("menu_open");
});
