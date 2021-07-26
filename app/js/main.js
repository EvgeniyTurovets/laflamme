"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // первый екран
  var swiper = new Swiper('.swiper-container-main', {
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
  }); // каталог товар

  var swiperLeft = new Swiper(".swiper-container-left", {
    spaceBetween: 20,
    slidesPerView: 2,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      992: {
        direction: 'vertical',
        allowTouchMove: false
      }
    }
  });
  var swiperRight = new Swiper(".swiper-container-right", {
    spaceBetween: 10,
    slidesPerView: 1,
    allowTouchMove: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: swiperLeft
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      992: {
        allowTouchMove: false,
        effect: "fade"
      }
    }
  });

  if (document.querySelectorAll(".select").length) {
    var els = document.querySelectorAll(".select");
    els.forEach(function (select) {
      NiceSelect.bind(select);
    });
  } // табы товара


  var tovar_tabs_nav = document.querySelectorAll('.tovar__tabs__nav');
  var tovar_tabs_item = document.querySelectorAll('.tovar__tabs__item');
  var tovar_tabs = document.querySelector('.tovar__tabs');
  tovar_tabs_nav.forEach(function (el) {
    return el.addEventListener('click', function () {
      if (!el.closest('.tovar__tabs__item').classList.contains('active')) {
        tovar_tabs_item.forEach(function (el, index) {
          el.classList.remove('active');
        });
        el.closest('.tovar__tabs__item').classList.add('active');
        var containerH = el.closest('.tovar__tabs__item').querySelector('.tovar__tabs__container').offsetHeight + 50;
        tovar_tabs.style.marginBottom = containerH + "px";
      } else {
        el.closest('.tovar__tabs__item').classList.remove('active');
        tovar_tabs.style.marginBottom = "100px";
      }
    });
  }); // фильтр

  var filter__title = document.querySelectorAll('.filter__title');
  filter__title.forEach(function (el) {
    return el.addEventListener('click', function () {
      el.closest('.filter__row').classList.toggle('active');
    });
  });
});
//# sourceMappingURL=main.js.map
