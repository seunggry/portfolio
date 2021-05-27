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
    $('.container').on('mousewheel DOMMouseScroll', function(e) {
        let wheelDelta = e.originalEvent.wheelDelta;

        if( wheelDelta > 0 ) {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
        } else {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
        }
    });
}

scrollW();