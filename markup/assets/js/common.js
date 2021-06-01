// 클릭 방지 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
});

// 가로스크롤
/*
$('.container').touchFlow({
    axis : 'x',
    page : 'section',
    speed : 200,
    useMouse : true,
    useWheel : true,
    scrollbar : true,
    scrollbarAutoHide: false,
    // snap : true,
});
*/

$(function(){
    $('html').mousewheel(function(e, delta) { 
        this.scrollLeft -= (delta);
    });
});

/*
function scrollW() {
    $('body').on('mousewheel DOMMouseScroll', function(delta) {
        let wheelDelta = e.originalEvent.wheelDelta;
        // $(this).scrollLeft -= (delta * 100);
    
        if( wheelDelta > 0 ) {
            $(this).animate({scrollLeft : '1=100'});
        } else {
            $(this).animate({scrollLeft : '+=100'});
        }
    });
}

scrollW();
*/

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


// 인트로 인터랙션
$(function(){

    $('.intro > .tit p').animate({'top' : '0'},500);

    setTimeout(function(){
        $('.intro > .tit span').animate({'opacity':'1', 'left' : '0'}, 900);
    }, 300);

    setTimeout(function(){
        $('.intro .detail').animate({'opacity':'1'},700);
    }, 1200);
    
});


// 포트폴리오 리스트 호버 효과
$('.pfList li').mouseover(function(){
    $(this).addClass('on');
})
.mouseleave(function(){
    $(this).removeClass('on');
});


// 해당 위치 인터랙션
$(window).scroll(function(){
    let scrollL = $(window).scrollLeft();
    let windowW = window.innerWidth * 2/3;
    let pfListW;

    $('.pfList li').each(function(){
        pfListW = $(this).offset().left;

        if( scrollL > pfListW - windowW ) {
            $(this).animate({'opacity' : 1}, 200);
        }
    });


    $('.contact > .inner').each(function(){
        contactW = $(this).offset().left;
        
        if( scrollL > contactW - windowW ) {
            $(this).animate({'opacity' : 1}, 500);
        }
    });

});

// 스크롤 이동 부드럽게
// let locationW = $('body').offset().left;
// window.scrollTo({left: 100, behavior: 'smooth'});