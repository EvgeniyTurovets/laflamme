"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // первый екран
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }); // поиск

  var headerSearch = document.getElementById('headerSearch');
  var searchForm = document.getElementById('searchForm');
  headerSearch.addEventListener('click', function () {
    this.classList.add('active');
    searchForm.querySelector('input').focus();
  });
  document.addEventListener('click', function (e) {
    if (!headerSearch.contains(e.target)) {
      headerSearch.classList.remove('active');
    }
  }); // бургер меню

  var burger = document.getElementById('burger');
  var mainNav = document.getElementById('main-nav');
  var backfon = document.getElementById('back-fon');
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mainNav.classList.toggle('active');
    backfon.classList.toggle('active');
  });
  backfon.addEventListener('click', function () {
    burger.classList.remove('active');
    mainNav.classList.remove('active');
    backfon.classList.remove('active');
  });
  var arrNext = document.querySelectorAll('.arr-next');
  var arrBack = document.querySelectorAll('.arr-back');
  arrNext.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      btn.closest('li').classList.add('active');
      mainNav.classList.toggle('open-level2');
    });
  });
  arrBack.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      btn.closest('li').classList.add('back');
      setTimeout(function () {
        btn.closest('li').classList.remove('active');
        btn.closest('li').classList.remove('back');
        mainNav.classList.remove('open-level2');
      }, 300);
    });
  });
});
//# sourceMappingURL=main.js.map
