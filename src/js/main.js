document.addEventListener('DOMContentLoaded', function() {

    // первый екран
    const swiper = new Swiper('.swiper-container-main', {
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

    headerSearch.addEventListener('click', function() {
        this.classList.add('active')
        searchForm.querySelector('input').focus()
    })

    document.addEventListener('click', function(e) {
        if (!headerSearch.contains(e.target)) {
            headerSearch.classList.remove('active')
        }
    })

    // бургер меню
    let burger = document.getElementById('burger')
    let mainNav = document.getElementById('main-nav')
    let backfon = document.getElementById('back-fon')

    burger.addEventListener('click', function() {
        burger.classList.toggle('active')
        mainNav.classList.toggle('active')
        backfon.classList.toggle('active')
    })

    backfon.addEventListener('click', function() {
        burger.classList.remove('active')
        mainNav.classList.remove('active')
        backfon.classList.remove('active')
    })

    let arrNext = document.querySelectorAll('.arr-next')
    let arrBack = document.querySelectorAll('.arr-back')

    arrNext.forEach(btn => btn.addEventListener('click', function() {
        btn.closest('li').classList.add('active')
        mainNav.classList.toggle('open-level2')
    }))

    arrBack.forEach(btn => btn.addEventListener('click', function() {
        btn.closest('li').classList.add('back')
        setTimeout(function() {
            btn.closest('li').classList.remove('active')
            btn.closest('li').classList.remove('back')
            mainNav.classList.remove('open-level2')
        }, 300)
    }))


    // каталог товар
    var swiperLeft = new Swiper(".swiper-container-left", {
        spaceBetween: 20,
        slidesPerView: 2,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            
        },
        breakpoints: {
            992: {
                direction: 'vertical',
                allowTouchMove: false,
            },
        }
    });
    var swiperRight = new Swiper(".swiper-container-right", {
        spaceBetween: 10,
        slidesPerView: 1,
        allowTouchMove: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        thumbs: {
            swiper: swiperLeft,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            992: {
                allowTouchMove: false,
                effect: "fade",
            },
        }
    });

    if (document.querySelectorAll(".select").length) {
        var els = document.querySelectorAll(".select");
        els.forEach(function(select) {
            NiceSelect.bind(select);
        });
    }


    // табы товара
    let tovar_tabs_nav = document.querySelectorAll('.tovar__tabs__nav')
    let tovar_tabs_item = document.querySelectorAll('.tovar__tabs__item')
    let tovar_tabs = document.querySelector('.tovar__tabs')

    tovar_tabs_nav.forEach(el => el.addEventListener('click', function(){
       
        if(!el.closest('.tovar__tabs__item').classList.contains('active')){
            
            tovar_tabs_item.forEach(function(el, index){
                el.classList.remove('active')
            })

            el.closest('.tovar__tabs__item').classList.add('active')
            let containerH = el.closest('.tovar__tabs__item').querySelector('.tovar__tabs__container').offsetHeight + 50
            tovar_tabs.style.marginBottom = containerH + "px"

        }else{
            el.closest('.tovar__tabs__item').classList.remove('active')
            tovar_tabs.style.marginBottom = "100px"
        }
        
    }))


    // фильтр
    if(document.querySelectorAll('.filter__title')){
        let filter__title = document.querySelectorAll('.filter__title')

        filter__title.forEach(el => el.addEventListener('click', function(){
            el.closest('.filter__row').classList.toggle('active')
        }))
    }
    

    // добавить в избраное
    if(document.querySelectorAll('.add-wich')){
        let addWich = document.querySelectorAll('.add-wich')

        addWich.forEach(el => el.addEventListener('click', function(){
            el.classList.toggle('active')
        }))
    }
    
    // фильтр товаров
    if(document.getElementById('filter')){
        let filter = document.getElementById('filter')
        let catalog__top = document.querySelector('.catalog__top')
        let catalog__wrap = document.querySelector('.catalog__wrap')

        const filterRefresh = () =>{
            if(window.innerWidth < 768){
                catalog__top.append(filter)
            }else{
                catalog__wrap.prepend(filter)
            }
        } 
        filterRefresh();

        window.addEventListener('resize', ()=>{
            filterRefresh();
        })

        let filterToggle = document.getElementById('filter-toggle')

        filterToggle.addEventListener('click', ()=>{
            filterToggle.classList.toggle('active')
            filter.classList.toggle('active')
        })
    }   
})