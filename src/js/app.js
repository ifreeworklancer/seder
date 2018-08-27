import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu-nav');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
            $(menu).css("display", 'flex');
        }
    });


    $('#open-list').click(function () {
        var list = $('.menu-nav-inList');
        var triangle = $('.triangle');
        triangle.toggleClass('active');
        $(this).toggleClass('active');
        if (list.is(':visible')) {
            list.slideUp();
        } else {
            list.slideDown();
        }
    });


    /**
     * Form-label
     */

    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });

    /**
     * Block animate
     */
    $('.header-banner-item').addClass('animated zoomIn');
    $('.scroll-down').addClass('animated zoomIn');
    $('.header-banner-elena-img').addClass('animated slideInRight');
    $('.header-banner-elena-description').addClass('animated slideInRight');

    var windowHeight = $(window).height();

    $(window).on('scroll', function () {

        if ($(this).scrollTop() + windowHeight >= $('#patients').offset().top) {
            $('.patients-item-img').eq(0).addClass('animated slideInRight');
            $('.patients-item-title-decoration').eq(0).addClass('animated slideInLeft');
        }
        if ($(this).scrollTop() + windowHeight >= $('.patients-item').eq(1).offset().top) {
            $('.patients-item-img').eq(1).addClass('animated slideInLeft');
            $('.patients-item-title-decoration').eq(1).addClass('animated slideInRight');
        }
        if ($(this).scrollTop() + windowHeight >= $('.patients-item').eq(2).offset().top) {
            $('.patients-item-img').eq(2).addClass('animated slideInRight');
            $('.patients-item-title-decoration').eq(2).addClass('animated slideInLeft');
        }
        if ($(this).scrollTop() + windowHeight >= $('.how-we-work-item').offset().top) {
            $('.how-we-work-item').addClass('animated zoomIn');
        }
        if ($(this).scrollTop() + windowHeight >= $('.services-item').eq(1).offset().top) {
            $('.services-item').addClass('animated zoomIn');
        }
        if ($(this).scrollTop() + windowHeight >= $('#reviews').offset().top) {
            $('.reviews-slider-item').addClass('animated bounceInUp');
        }
        if ($(this).scrollTop() + windowHeight >= $('.footer-form').offset().top) {
            $('.footer-contacts').addClass('animated bounceInUp');
            $('.footer-form').addClass('animated bounceInDown');
        }
    });


    $(".scroll-link").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('href');

        if (id.length > 1) {

           var top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top }, 1500);
        } 
    });


})(jQuery)

/**
* Sliders header
*/
if ($('.reviews-slider')) {

    var elem1 = document.querySelector('.reviews-slider');
    if (elem1) {

        const flkty1 = new Flickity(elem1, {

            prevNextButtons: false,
            cellAlign: 'left',
            contain: true,
            draggable: false,
            groupCells: 1
        });


        var nextArrowReviews = document.querySelector('.arrow-prev');

        nextArrowReviews.addEventListener('click', function () {
            flkty1.previous(false, false);
        });

        var prevArrowReviews = document.querySelector('.arrow-next');

        prevArrowReviews.addEventListener('click', function () {
            flkty1.next(false, false);
        });

    }
}

