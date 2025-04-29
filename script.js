let menuIcon = document.querySelector('#menu-icon');
let naavbar =document.querySelector(',navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  naavbar.classList.toggle('active');
}