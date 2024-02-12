const navbarList = document.querySelector('.navbar__list');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.menu-icon');


menuIcon.addEventListener("click", () => {
  navbarList.classList.remove("hide")
  closeIcon.classList.remove("hide")
  navbarList.classList.add("show")
  closeIcon.classList.add("show")
})

closeIcon.addEventListener("click", () => {
  navbarList.classList.remove("show")
  closeIcon.classList.remove("show")
  navbarList.classList.add("hide")
  closeIcon.classList.add("hide")
})

window.addEventListener("scroll", () => {
  navbarList.classList.remove("show")
  closeIcon.classList.remove("show")
  navbarList.classList.add("hide")
  closeIcon.classList.add("hide")
})