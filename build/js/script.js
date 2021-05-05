'use strict';
const pageHeader = document.querySelector('.header');
const headerToggle = document.querySelector('.header__toggle-menu');

pageHeader.classList.remove('header--no-js');

headerToggle.addEventListener('click', () => {
  if (pageHeader.classList.contains('header--open-menu')) {
    pageHeader.classList.remove('header--open-menu');
  } else {
    pageHeader.classList.add('header--open-menu');
  }
});
