
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menu.classList.toggle('menu--open');
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // console.log(menu);
// // console.log(menu[0]);


// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', toggleMenu);

const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);