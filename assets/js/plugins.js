$(document).ready(function(){
    /* Project Image Popup */
    $('.project-popup').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image'
    });

    /* Counter Up */
    $(".counter-up").counterUp();

    /* Video Popup */
    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    $(".review-wrap").slick({
        slidesToShow: 3,
        infinite: true,
        loop: true,
        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    });
  
});