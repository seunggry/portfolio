// 가로스크롤

/*
$(".container").touchFlow({
    useMouse : true,
    useWheel : true,
    axis : "x",
    page : "section",
    speed : "100",
    snap : true,
    // scrollbar : true
});
*/
$(document).ready(function() {
    $('html').mousewheel(function(e, delta) { 
        this.scrollLeft -= (delta);
    });

});


// function scrollW() {
//     $('body').on('mousewheel', function(delta) {
//         $(this).scrollLeft -= (delta * 100);
    
//         if( delta > 0 ) {
//             $(this).scrollLeft( -delta + $(this).scrollLeft());
//         } else {
//             $(this).scrollLeft( -delta + $(this).scrollLeft());
//         }
//     });
// }

// scrollW();


// function scrollW() {
//     $('.container').on('mousewheel DOMMouseScroll', function(e) {
//         let wheelDelta = e.originalEvent.wheelDelta;

//         if( wheelDelta > 0 ) {
//             $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
//         } else {
//             $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());
//         }
//     });
// }

// scrollW();


// function scrollW() {

//     $('.container').on('mousewheel DOMMouseScroll', function(e) {
//         let wheelDelta = e.originalEvent.wheelDelta;

//         if ( wheelDelta > 0 ) {
//             console.log('up');
//             $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
//         } else {
//             console.log('down');
//             $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
//         }
//     });


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

/*
    $('section').on('mousewheel DOMMouseScroll', function(e) {
        let wheelDelta = e.originalEvent.wheelDelta;

        // let sectionIndex = $('.container section').index(this);
        // if ( $('.container').children('section').eq(sectionIndex) ) {

        // }

        if( wheelDelta > 0 ) {
            $(this).scrollLeft( -wheelDelta + $(this).scrollLeft());

        } else {
            $(this).scrollLeft( -wheelDelta - $(this).scrollLeft());

        }
    });
*/
// }

// scrollW();