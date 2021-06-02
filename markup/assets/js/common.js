// 클릭 방지 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
});

// 가로스크롤

/*
let scrolling = false;
let scrolled = 0;
const scrollDuration = 200;
const scrollPause = 1;

function scroll(direction) {
	if (scrolling === false) {
		scrolling = true;
		$('html, body').animate({
			scrollLeft: direction == 'left' ? $('html,body').scrollLeft() - $('.container section').innerWidth() : $('html,body').scrollLeft() + $('.container section').innerWidth()
		}, scrollDuration, function() {
			scrolling = false;
		});
	}
}

$(document).scrollTop(0);
$(window).on('mousewheel DOMMouseScroll', function(e) {
	if (scrolling === false) {
		scrolled++;
	}
	if (scrolled > scrollPause) {
		if (e.originalEvent.deltaY > 0) {
			scroll('right');
			scrolled = 0;
		}
	
		if (e.originalEvent.deltaY < 0) {
			scroll('left');
			scrolled = 0;
		}
	}
});
*/

/*
$('html').touchFlow({
    axis : 'x',
    page : 'section',
    speed : 200,
    useMouse : true,
    // useWheel : true,
    scrollbar : false,
    // scrollbarAutoHide:false
});
*/

$(function(){
    $('html').mousewheel(function(e, delta) { 
        this.scrollLeft -= (delta);

        $('.float_mark').css({'transform': 'rotate('+(-delta)+'deg)'});
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
        $('.intro > .tit span').animate({'opacity':'1', 'left' : '0'}, 1500);
    }, 200);
    
    setTimeout(function(){
        $('.intro .detail').animate({'opacity':'1'},700);
    }, 1500);
    
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
    let windowW = window.innerWidth * 3/4;
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

// 메뉴 클릭 시
$('.gnbBtn .btn_menu').on('click', function(){
    $('header .menuOpen').addClass('on');
    $('.gnbBtn .btn_menu').css({'display':'none'});
    $('.gnbBtn .btn_close').css({'display':'block'});
    // if ($(this).is(':visible')) {
    //     $('header .menuOpen').addClass('on');
    //     $(this).css({'display':'none'});
    //     $('.gnbBtn .btn_close').css({'display':'block'});
    // } else {
    //     $('header .menuOpen').removeClass('on');
    //     $(this).css({'display':''});
    //     $('.gnbBtn .btn_close').css({'display':''});
    // }
});

$('.gnbBtn .btn_close').on('click', function(){
    $('header .menuOpen').removeClass('on');
    $('.gnbBtn .btn_menu').css({'display':''});
    $('.gnbBtn .btn_close').css({'display':''});
});