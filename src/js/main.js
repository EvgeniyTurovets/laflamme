document.addEventListener('DOMContentLoaded', function(){

  // первый екран
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // поиск
  let headerSearch = document.getElementById('headerSearch')
  let searchForm = document.getElementById('searchForm')

  headerSearch.addEventListener('click', function(){
    this.classList.add('active')
    searchForm.querySelector('input').focus()
  })

  document.addEventListener('click', function(e){
    if(!headerSearch.contains(e.target)){
      headerSearch.classList.remove('active')
    }
  })

  // бургер меню
  let burger = document.getElementById('burger')
  let mainNav = document.getElementById('main-nav')
  let backfon = document.getElementById('back-fon')

  burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    mainNav.classList.toggle('active')
    backfon.classList.toggle('active')
  })

  backfon.addEventListener('click', function(){
    burger.classList.remove('active')
    mainNav.classList.remove('active')
    backfon.classList.remove('active')
  })

  let arrNext = document.querySelectorAll('.arr-next')
  let arrBack = document.querySelectorAll('.arr-back')

  arrNext.forEach(btn => btn.addEventListener('click', function(){
    btn.closest('li').classList.add('active')
    mainNav.classList.toggle('open-level2')
  }))

  arrBack.forEach(btn => btn.addEventListener('click', function(){
    btn.closest('li').classList.add('back')
    setTimeout(function(){
      btn.closest('li').classList.remove('active')
      btn.closest('li').classList.remove('back')
      mainNav.classList.remove('open-level2')
    },300)
  }))
})
