// 가로스크롤
/*
$(".container").touchFlow({
    useMouse : true,
    useWheel : true,
    axis : "x",
    page : "section",
    speed : "300",
    // snap : true,
    // scrollbar : true
});
*/

function scrollW() {
/*
    let win_w = $(window).width();

    $('section').each(function(index){
        $(this).attr('left', win_w * index );
    });
    
    $('section').on('mousewheel DoMMouseScroll', function(e) {
        let wheelDelta = e.originalEvent.wheelDelta;
        let sectionPos = parseInt( $(this).attr('left') );

        if( wheelDelta >= 0 ) {
            $('html, body').stop().animate({scrollLeft: sectionPos - win_w });
        } else {
            $('html, body').stop().animate({scrollLeft: sectionPos + win_w});
        }
    });
*/

    $('section').on('mousewheel DOMMouseScroll', function(e) {
        let wheelDelta = e.originalEvent.wheelDelta;

        // let sectionIndex = $('.container section').index(this);
        // if ( $('.container').children('section').eq(sectionIndex) ) {

        // }

        if( wheelDelta > 0 ) {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());

        } else {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());

        }
    });

}

scrollW();