// 클릭 방지 이벤트
$('a[href="#"]').click(function(e){
    e.preventDefault();
});

// 가로스크롤
let scrolling = false;
let scrolled = 0;
const scrollDuration = 200;
const scrollPause = 1;

function scroll(direction) {
	if (scrolling === false) {
        let htmlScrollL = $('html,body').scrollLeft();
        let sectionW = $('.container section').innerWidth();

		scrolling = true;

		$('html, body').animate({
			scrollLeft : direction === 'left' ? htmlScrollL - sectionW/2 : htmlScrollL + sectionW/2
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
            // console.log(scroll('right'));

            // $('.float_mark').css({'transform' : 'rotate('+scroll('right')+'deg)'});
		}
	
		if (e.originalEvent.deltaY < 0) {
			scroll('left');
			scrolled = 0;
            // console.log(scroll('left'));
            // $('.float_mark').css({'transform' : 'rotate('+scroll('left')+'deg)'});
		}
	}
});


// 인트로 인터랙션
$(function(){
    $('.intro > .tit span').css('animation-play-state', 'paused');

    $('.intro > .tit .before').animate({'top' : '0'}, 500, function() {
        $('.intro > .tit .after').animate({'opacity':'1', 'left' : '0'}, 1500, function() {
            // $('.intro .textEdit').animate({'opacity':'1'}, 700, function() {

                let introTitmove = $('.intro > .tit span');

                for ( let i = 0; i < introTitmove.length; i++ ) {
                    // introTitmove.eq(i).animate({'top' : '-30px'}, 300);
                    introTitmove.eq(i).css('animation-play-state', 'running');
                    
                }
                // $('.intro > .tit span').css('animation-play-state', 'running');
            // });
        });
    });


    // $('.intro > .tit .before').animate({'top' : '0'},500);

    // setTimeout(function(){
    //     $('.intro > .tit .after').animate({'opacity':'1', 'left' : '0'}, 1500);
    // }, 200);
    
    // setTimeout(function(){
    //     $('.intro .detail').animate({'opacity':'1'},700);
    // }, 1500);
    
    // setTimeout(function(){
    //     $('.intro > .tit span').css('animation-play-state', 'paused');
    // },300);
});

// 인트로 타이핑 텍스트
function showText (target, message, index, interval) {
    if( index < message.length ) {
        $(target).append(message[index++]);
        setTimeout( function() {
            showText(target, message, index, interval);
        }, interval );
    }
}


$(function(){
    setTimeout(function() {
        let text = $('.textEdit').html().replace(/<br *\/?>/gi,'\n');
        showText('.msgTxt', text, 0, 60);
    }, 500);
})




// 포트폴리오 리스트 호버 효과
// $('.pfList li').mouseover(function(){
//     $(this).addClass('on');
// })
// .mouseleave(function(){
//     $(this).removeClass('on');
// });

// 포트폴리오 리스트 이미지 효과1
mouseImgEvent();

function mouseImgEvent() {
    let imgHolderSize = $('.pfList').width() / 2;
    let halfWindowHeight = $('.pfList').height() / 2;
    let halfWindowWidth = $('.pfList').width() / 2;

    $(".pfList .li").css("margin-top", halfWindowHeight - imgHolderSize / 2);
    $(".pfList .li").css("margin-left", halfWindowWidth - imgHolderSize / 2);
  }

  $(window).on("resize", function() {
    mouseImgEvent();
  });


$(window).on("mousemove", function(e) {
    let window_height = $(this).height();
    let window_width = $(this).width();
    let mouseXpos = e.clientX;
    let mouseYpos = e.clientY;
    let YrotateDeg = (window_width / 2 - mouseXpos) * 0.05;
    let XrotateDeg = (window_height / 2 - mouseYpos) * -0.05;

    $(".pfList li").on('mousemove', function(){
        $(this).css("transform", "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)");
    });
    
    $('.pfList li').on('mouseleave', function(){
        $(this).css('transform', 'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg)') 
    });

  });


// 포트폴리오 리스트 이미지 효과 2
// let currentPos = window.pageXOffset;

// function portfolioEvent () {
//     const newPos = window.pageXOffset;
//     const diff = newPos - currentPos;
//     const speed = diff/4 * 0.35;

//     $('.pfList').css({'transform' : `skewY(${speed}deg)`});

//     currentPos = newPos;
//     requestAnimationFrame(portfolioEvent);
// }

// portfolioEvent();

// 해당 위치 인터랙션
$(window).scroll(function(){
    let scrollL = $(window).scrollLeft();
    let windowW = window.innerWidth * 3/4;
    let pfListW;

    $('.pfList li').each(function(){
        pfListW = $(this).offset().left;

        if( scrollL > pfListW - windowW ) {
            $(this).animate({'opacity' : 1}, 100);
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
let menuOpen =  $('header .menuOpen');
let btnMenu = $('.gnbBtn .btn_menu');
let btnClose = $('.gnbBtn .btn_close');

btnMenu.on('click', function(){
    menuOpen.addClass('on');
    btnMenu.css({'display':'none'});
    btnClose.css({'display':'block'});
});

btnClose.on('click', function(){
    menuOpen.removeClass('on');
    btnMenu.css({'display':''});
    btnClose.css({'display':''});
});

// 마우스 커서 인터랙션
let cursorOriginSize = '30px';
let cursorEffectSize = '50px';

$('html').on('mousemove', function(e){
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    $('.mouseCursor').css({'left':  mouseX + 'px', 'top' : mouseY + 'px'});
});

$('html').on('mousedown', function(e){
    $('.mouseCursor').animate({width : cursorEffectSize, height : cursorEffectSize, opacity : '1'}, 300,
        function(){
            $('.mouseCursor').animate({width : cursorOriginSize , height : cursorOriginSize, opacity : '0.5'}, 300)
        }
    )
});


// float_mark 호버시 인터랙션 정지
$('.float_mark').on('mouseover', function(){
    $(this).css('animation-play-state', 'paused');
}).on('mouseleave', function(){
    $(this).css('animation-play-state', 'running');
});