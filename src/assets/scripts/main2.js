// import fortawesome from '@fortawesome/fontawesome-free';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

import $ from 'jquery';
import jQuery from 'jquery';

// $('.swiper').css('display','none')










const swiperOptions5 = {
    slidesPerView: 1.1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        },
    },
    navigation: {
        nextEl: '.swiperrewiews-button-next',
        prevEl: '.swiperrewiews-button-prev',
    },
};

const swiperrewiews = new Swiper(".swiperrewiews", swiperOptions5);

const swiperOptions6 = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 40
        },
    },
    navigation: {
        nextEl: '.swiperslaidering-button-next',
        prevEl: '.swiperslaidering-button-prev',
    },
};

const swiperslaidering = new Swiper(".swiperslaidering", swiperOptions6);


const swiperOptions7 = {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 4,
            spaceBetween: 40
        },
    },
    navigation: {
        nextEl: '.swiperslaidering-button-next',
        prevEl: '.swiperslaidering-button-prev',
    },
    pagination: {
        el: '.swipergood-pagination',
        type: 'bullets',
        clickable: true,
    },
};

const goodslaidering = new Swiper(".goodslaidering", swiperOptions7);





(function($) {
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('.questions__block-top').on('click',function (){
            // $('.questions__block-top').removeClass('questions__block-top_active');
            // $('.questions__block-content').hide(1000);
            $(this).next().slideToggle(1000);
            $(this).toggleClass('questions__block-top_active',1000);
        })
        $('.header-burger').on('click',function (){
            $('.mobile-menu').addClass('mobile-menu_active');
            $('body').addClass('body_modal');
            $('.header').addClass('header_modal');



        })
        $('.mobile-menu-close').on('click',function (){
            $('.mobile-menu').removeClass('mobile-menu_active');
            $('body').removeClass('body_modal');
            $('.header').removeClass('header_modal');
        })
        $('.main-content-filter__top').on('click',function (){
            $(this).next().toggleClass('main-content-filter__top-list_show');
            $(this).toggleClass('main-content-filter__top_open');

        })
        $('.prices-tables').on('click',function (){
            $(this).next().toggleClass('prices-tables_active');
            $(this).toggleClass('prices-tables-arrow_active');

        })

        // prices-tables_active
    });
})(jQuery);
