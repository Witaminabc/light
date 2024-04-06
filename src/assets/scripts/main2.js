// import fortawesome from '@fortawesome/fontawesome-free';
// import Swiper from 'swiper';
import Swiper from 'swiper/bundle';

import $ from 'jquery';
import jQuery from 'jquery';

// $('.swiper').css('display','none')

const swiper = new Swiper('.swipergood', {
    // modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 5000,
    },
    longSwipesRatio: 0.5,
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
    breakpoints: {

        // 320: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // },
        // 767: {
        //     slidesPerView: 1,
        //     spaceBetween: 40
        // }
    },
    // Navigation arrows
    //     nextButton: '.swiper2-button-next',
    //     prevButton: '.swiper2-button-prev',

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiperOptions2 = {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1279: {
            slidesPerView: 4,
            spaceBetween: 40
        },


    },
    freeMode: true,
    speed: 4000,
    freeModeMomentum: false
};

const swipercompany = new Swiper(".swipercompany", swiperOptions2);


const swiperOptions = {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1279: {
            slidesPerView: 4,
            spaceBetween: 40
        },


    },
    freeMode: true,
    speed: 5000,
    freeModeMomentum: false
};

const swipercompany2 = new Swiper(".swipercompany2", swiperOptions);



const swiperOptions3 = {

    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    speed: 1000,
    additionalSlide: 1,
    coverflow: {
        scale:0.5,
        rotate: 0,
        stretch: 150,
        depth: 200,
        modifier: 1,
        slideShadows : false,
    },
    grabCursor: true,
    slidesPerView: 2,
    loop: true,
    autoplay: {
        // delay: 1,
        // disableOnInteraction: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1279: {
            slidesPerView: 3,
            spaceBetween: 10
        },


    },
    pagination: {
        el: '.swipersuccess-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swipersuccess-pagination',
    },
    navigation: {
        nextEl: '.swipersuccess-button-next',
        prevEl: '.swipersuccess-button-prev',
    },
};

const swipersuccess = new Swiper(".swipersuccess", swiperOptions3);








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
    // freeMode: true,
    // speed: 5000,
    // freeModeMomentum: false
};

const swiperrewiews = new Swiper(".swiperrewiews", swiperOptions5);



(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('.questions__block-top').on('click',function (){
            $(this).next().toggle();
            $(this).toggleClass('questions__block-top_active');

        })
    });
})(jQuery);
