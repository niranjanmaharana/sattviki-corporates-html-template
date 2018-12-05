$(document).ready(function(){
    // ------------------------------------------------------- //
    // Products Slider
    // ------------------------------------------------------ //
    $('.products-slider').owlCarousel({
        loop: true,
        margin: 20,
        //dots: false,
        nav: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    $(".owl-carousel").on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
        if (!event.namespace) return;
        var carousel = event.relatedTarget,
            element = event.target,
            current = carousel.current();
            console.log('current : ' + current);
        $('.owl-next', element).toggleClass('disabled', current === carousel.maximum());
        $('.owl-prev', element).toggleClass('disabled', current === carousel.minimum());
    })
});