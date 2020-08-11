'use strict';


// ------BURGER ICON-----------

const burger = document.querySelector('#burger');
const burgerMenu = document.querySelector('.js_burger_menu');

burger.onclick = function () {
    burger.classList.toggle('burger_active');
    burgerMenu.classList.toggle('nav_list--active');
};
