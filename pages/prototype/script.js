const burgerMenu = document.querySelector(".header__menu");
const headerNavBlock = document.querySelector(".hn__block");
const firstSectionBlock = document.querySelector(".fs__block");
const headerNav = document.querySelector(".header__nav");
const exit = document.querySelector(".exit");

burgerMenu.onclick = function () {
  headerNavBlock.classList.add("active");
  if (headerNavBlock.classList.contains("active")) {
    firstSectionBlock.classList.add("active");
  }
  burgerMenu.style.display = "none";
  exit.classList.add("active");
  headerNav.classList.add("active");
};

exit.onclick = function () {
  burgerMenu.style.display = "flex";
  headerNavBlock.classList.remove("active");
  firstSectionBlock.classList.remove("active");
  exit.classList.remove("active");
  headerNav.classList.remove("active");
};