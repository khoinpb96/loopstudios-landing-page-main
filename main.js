const $ = document.querySelector.bind(document);
const navBarMobile = $(".navBar-mb");
const closeBtn = $(".close");
const hamburgerBtn = $(".hamburger");
function openAndCloseMenu() {
  navBarMobile.classList.toggle("opened");
}
hamburgerBtn.onclick = openAndCloseMenu;
closeBtn.onclick = openAndCloseMenu;
