/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price');
const productImg = document.querySelector('.product-img');
const productColor1 = document.querySelector('#color-1');
const productColor2 = document.querySelector('#color-2');
const productColor3 = document.querySelector('#color-3');


const pdi1 = document.querySelector('.product-detalis-img-1')
const pdi2 = document.querySelector('.product-detalis-img-2')
const pdi3 = document.querySelector('.product-detalis-img-3')
const pdi4 = document.querySelector('.product-detalis-img-4')


productColor1.addEventListener('click', () => {
    productImg.src = '/imgs/p-1.png';
    productPrice.innerText = '299 JOD';
    pdi1.src = '../imgs/p-d-img1.avif';
    pdi2.src = '../imgs/p-d-img2.avif';
    pdi3.src = '../imgs/p-d-img3.avif';
    pdi4.src = '../imgs/p-d-img4.avif';

})

productColor2.addEventListener('click', () => {
    productImg.src = '/imgs/p-2.png';
    productPrice.innerText = '299 JOD';
    pdi1.src = '../imgs/p-d-img-2-1.avif';
    pdi2.src = '../imgs/p-d-img-2-2.avif';
    pdi3.src = '../imgs/p-d-img-2-3.avif';
    pdi4.src = '../imgs/p-d-img-2-4.avif';


})

productColor3.addEventListener('click', () => {
    productImg.src = '/imgs/p-3.png';
    productPrice.innerText = '299 JOD';
    pdi1.src = '../imgs/p-d-img-3-1.avif';
    pdi2.src = '../imgs/p-d-img-3-2.avif';
    pdi3.src = '../imgs/p-d-img-3-3.avif';
    pdi4.src = '../imgs/p-d-img-3-4.avif';

})


pdi1.addEventListener('click', () => {
    original = productImg.src;
    productImg.src = pdi1.src;
})

pdi1.addEventListener('mouseleave', () => {
    productImg.src = original;
})


pdi2.addEventListener('click', () => {
    original = productImg.src;
    productImg.src = pdi2.src;
})

pdi2.addEventListener('mouseleave', () => {
    productImg.src = original;
})

pdi3.addEventListener('click', () => {
    original = productImg.src;
    productImg.src = pdi3.src;
})

pdi3.addEventListener('mouseleave', () => {
    productImg.src = original;
})


pdi4.addEventListener('click', () => {
    original = productImg.src;
    productImg.src = pdi4.src;
})

pdi4.addEventListener('mouseleave', () => {
    productImg.src = original;
})





jQuery(document).ready(function ($) {

    'use strict';

    var top_header = $('.parallax-content');
    top_header.css({ 'background-position': 'center center' }); // better use CSS

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
    });


    $('body').scrollspy({
        target: '.fixed-side-navbar',
        offset: 200
    });

    // smoothscroll on sidenav click

    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function (e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })

    var owl = $("#owl-testimonials");

    owl.owlCarousel({

        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        items: 7, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

    });


});



let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 10;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});



