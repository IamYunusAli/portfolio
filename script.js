const openMenu = document.querySelector('.hamburger');
const bodyBlur = document.querySelector('.main-section');
const menuCont = document.querySelector('.items');
const closeMenu = document.querySelector('.close');
function openMobMenu() {
  menuCont.classList.add('menu-open');
  bodyBlur.classList.add('blurred');
}
openMenu.addEventListener('click', openMobMenu);
function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}
closeMenu.addEventListener('click', closeMobMenu);
