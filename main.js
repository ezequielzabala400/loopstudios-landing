const navbarList = document.querySelector('.navbar__list');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');


menuIcon.addEventListener("click", () => {
  navbarList.classList.remove("hide")
  closeIcon.classList.remove("hide")
})

closeIcon.addEventListener("click", () => {
  navbarList.classList.add("hide")
  closeIcon.classList.add("hide")
})

window.addEventListener("scroll", () => {
  navbarList.classList.add("hide")
  closeIcon.classList.add("hide")
})