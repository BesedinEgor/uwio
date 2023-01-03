const burger = document.querySelector(".main-nav__burger");
const menu = document.querySelector(".main-header__menu");
const body = document.querySelector(".page-body");

const handlerOpen = (e) => {
  e.preventDefault();
  menu.classList.toggle("none");
  burger.classList.toggle("burger__active");
  body.classList.toggle("no-scroll");
};

burger.addEventListener("click", handlerOpen);

document.addEventListener("click", (elem) => {
  const withinBoundaries = elem.composedPath().includes(menu);

  if (!withinBoundaries) {
    // menu.classList.add('none')
    console.log("click");
  }
});
