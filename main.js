/**
 * Created by cristina on 11/02/17.
 */
$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('#menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed')
    });
});

//fixed menu

//$(document).on('scroll', document.body, function () {
//    var top = $(window).scrollTop();
//    if (top < 100) {
//        $('.header').css({'position': 'relative'});
//        $('.logo').css({'width': '1044px'});
//    } else {
//        $('.header').css({'position': 'fixed', "height": "90px"});
//        $('.logo').css({'width':"104px"});
//
//    }
//});

