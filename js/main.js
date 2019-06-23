$(document).ready(function () {

    var $header = $('header');

    // select header element and add a clone header before it
    var $sticky = $header.before($header.clone().addClass('sticky'));

    /**
     * when you scroll from top past 350px or scroll up less than 350px ,
     * add the class "scroll" to the body.
     * with the scroll class, we change the translateY of the sticky clone header in css to 0,
     * making it visible if distance is more than 350 or hiding it if not
     */

    $(window).on('scroll', function () {
        var scrollFromTop = $(window).scrollTop();
        $('body').toggleClass('scroll', (scrollFromTop > 350));
    });

    // smooth scrolling
    $('.menu li a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);
        console.log(target);

        if (target.length) {
            $('html,body').stop().animate({
                scrollTop: target.offset().top - 62
            }, 1000);
        }

    });

    // masonry

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 120,
        fitWidth: true,
        gutter: 0
    });

    // slick slider
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        slidesToShow: 3,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'

    });


    // responsive menu

    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function () {
        body.addClass('menu-is-active');
    });


    $('.menu li a').on('click', function () {
        body.removeClass('menu-is-active');
    });

    mainOverlay.on('click', function () {
        body.removeClass('menu-is-active')
    })







});