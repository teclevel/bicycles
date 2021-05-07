'use strict';
var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle-menu');

if (pageHeader) {
  pageHeader.classList.remove('header--no-js');
}

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--open-menu')) {
    pageHeader.classList.remove('header--open-menu');
  } else {
    pageHeader.classList.add('header--open-menu');
  }
});
