$(document).ready (function () {

    new WOW().init();


    $('.js-wp-2').waypoint(function (direction) {
       $('.js-wp-2').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.burger').on("click", function () {
        $(".burger").toggleClass('change');
        if($(".black-bg").hasClass('active')){
            $(".black-bg").addClass('remove');
            $(".black-bg").removeClass('active');
        } else if (!$(".black-bg").hasClass('active')) {
            $(".black-bg").addClass('active');
            $(".black-bg").removeClass('remove');

        }
    });




    $('.iphone-btn').delay(2300).animate({bottom: "+=-3"}, 300);
    $('.iphone-btn').delay(300).animate({top: "-=+3"}, 100);
});


