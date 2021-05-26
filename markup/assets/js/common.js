// 가로스크롤
function scrollW() {
    $('html, body').on('mousewheel DOMMouseScroll', function(e) {
        let wheelDelta = e.originalEvent.wheelDelta;
        // let scrollL =  -wheelDelta + $(this).scrollLeft();

        // if( wheelDelta > 0 ) {
        //     $(this).animate({scrollLeft : -wheelDelta + $(this).scrollLeft() }, 500);
        // } else {
        //     $(this).animate({scrollLeft : -wheelDelta + $(this).scrollLeft() }, 500);
        // }

        if( wheelDelta > 0 ) {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
        } else {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
        }

        

        // let scrollL = $(window).scrollLeft();
        // let windowW = window.innerWidth * 2/3;
        // let listX;

        // $('.keyVisual').each(function(){
        //     listX = $(this).offset().left;

        //     if (scrollL < listX - windowW ) {
        //         $(this).children('li').animate({scrollLeft : 100}, 500);
        //     }

        // });
    });
}

scrollW();

// 가로스크롤 인터랙션
$('.container').horizon();

$.fn.horizon.defaults = {
    scrollTimeout: null,
    scrollEndDelay: 250,
    scrollDuration: 400,
    i: 0,
    limit: 0,
    docWidth: 0,
    sections: null,
    swipe: true,
    fnCallback: function (i) {}
};

$(document).horizon('scrollRight');
$(document).horizon('scrollLeft');