

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: false,
        center: true,
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992:{
                items:3
            }
        }
    })

    // smooth scrolling

    $('.cf a').on('click', function (event) {
        if(this.hash!== ''){
            event.preventDefault();

            const hash = this.hash;

            $('html,body').animate(
                {
                    scrollTop:$(hash).offset().top
                },
                800,
                function(){
                    window.location.hash = hash;
                }
            );
        }
     });
});