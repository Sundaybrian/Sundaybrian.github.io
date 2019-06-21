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


});