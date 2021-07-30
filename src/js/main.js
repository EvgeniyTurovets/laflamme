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

    Inputmask().mask(document.querySelectorAll("input"));

    if(document.getElementById('order_info')){
        let order_info = document.getElementById('order_info')
        let order_info_wrap = document.getElementById('order_info_wrap')

        order_info.addEventListener('click', () => {
            order_info_wrap.classList.toggle('active')
        })
    }

    if(document.querySelectorAll('.order__pay-choose__block').length){
        let choosePay = document.querySelectorAll('.order__pay-choose__block')

        choosePay.forEach(el => el.addEventListener('click', () =>{
            if(!el.classList.contains('disabled')){
                choosePay.forEach((el) =>{
                    el.classList.remove('active')
                })

                el.classList.add('active')
            }
        }))
    }


    if(document.querySelector('.auth')){
       
        let btnLogin = document.getElementById('btn-login')
        let btnReg = document.getElementById('btn-reg')
        let btnFogot = document.getElementById('btn-fogot')
        let loginWrap = document.getElementById('login-wrap')
        let regWrap = document.getElementById('reg-wrap')
        let fogotWrap = document.getElementById('fogot-wrap')
        let auth__item = document.querySelectorAll('.auth__item')

        btnLogin.addEventListener('click', ()=>{
            btnReg.classList.remove('active')
            btnLogin.classList.add('active')

            auth__item.forEach((el) =>{
                el.classList.remove('active')
            })

            loginWrap.classList.add('active')
        })


        btnReg.addEventListener('click', ()=>{
            btnLogin.classList.remove('active')
            btnReg.classList.add('active')

            auth__item.forEach((el) =>{
                el.classList.remove('active')
            })

            regWrap.classList.add('active')
        })

        btnFogot.addEventListener('click', ()=>{
            auth__item.forEach((el) =>{
                el.classList.remove('active')
            })

            fogotWrap.classList.add('active')
        })
    }

    if(document.querySelector('.app.black')){
        let app = document.querySelector('.app')
        
        window.addEventListener('scroll', ()=>{
            
            if(window.scrollY > 0){    
                app.classList.remove('active')
            }else{
                app.classList.add('active')
            }
        })
    }


    const swiperPolit = new Swiper('.swiper-container', {
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });

    // политика вопросы табы
    if(document.querySelector('.polit-question')){
        let tabs__t = document.querySelectorAll('.tabs__t')
        
        tabs__t.forEach(el => el.addEventListener('click', ()=>{
            if(!el.closest('.tabs__item').classList.contains('active')){
                tabs__t.forEach((el2)=>{
                    el2.closest('.tabs__item').classList.remove('active')
                }) 

                el.closest('.tabs__item').classList.add('active')
            }
        }))
    }

    if(document.querySelector('.new-menu')){
        let newMenuParents = document.querySelectorAll('.new-menu .parent')

        newMenuParents.forEach(el => el.addEventListener('click', (e)=>{
            e.preventDefault()

            newMenuParents.forEach((el2)=>{
                el2.classList.remove('active')
            })

            el.classList.add('active')
        }))

        document.addEventListener('click', function(e) {
            if (!document.querySelector('.new-menu .parent').contains(e.target)) {
                newMenuParents.forEach((el2)=>{
                    el2.classList.remove('active')
                })
            }
        })
    }
})