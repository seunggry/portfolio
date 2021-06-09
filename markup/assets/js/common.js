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
		}
	
		if (e.originalEvent.deltaY < 0) {
			scroll('left');
			scrolled = 0;
		}
	}
});

// 화면이 1920px일 경우, 스크롤 없애기
let containerW = $('.container').innerWidth();
let bodyW = $('body').innerWidth();

if( containerW <= bodyW ) {
    $('body').css({'overflow-x': 'hidden', 'width' : '100%'});

    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let headerH = $('header .gnb').innerHeight();

        if(scrollTop >= headerH) {
            $('header .gnb').addClass('on');

        } else {
            $('header .gnb').removeClass('on');
        }
    });
}

// 메뉴 클릭 시
let menuOpen =  $('header .menuOpen');
let btnMenu = $('.gnbBtn .btn_menu');
let btnClose = $('.gnbBtn .btn_close');

btnMenu.on('click', function(){
    $('body').css({'overflow-x' : 'hidden'});
    menuOpen.addClass('on');
    btnMenu.css({'display':'none'});
    btnClose.css({'display':'block'});
});

btnClose.on('click', function(){
    $('body').css({'overflow-x' : ''});
    menuOpen.removeClass('on');
    btnMenu.css({'display':''});
    btnClose.css({'display':''});
});


// 인트로 텍스트 인터랙션
$('.intro > .tit .before').animate({'top' : '0'}, 500, function() {
    $('.intro > .tit .after').animate({'opacity':'1', 'left' : '0'}, 1500, function() {

        function introTitmove() {
            let introtit = $('.intro > .tit span');
            for ( let i = 0; i < introtit.length; i++ ) {
                introtit.eq(i).delay( i * 100 ).animate({'top' : '-30px'}, 300, function(){
                    $(this).animate({'top' : '0'});
                });
            }
        }
        function titEffect() {
            introTitmove();
            setTimeout(titEffect, 2000);
        }

        titEffect();
    });
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

setTimeout(function() {
    let text = $('.textEdit').html().replace(/<br *\/?>/gi,'\n');
    showText('.msgTxt', text, 0, 30);
}, 500);


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

// 해당 위치 인터랙션
$(window).scroll(function(){
    let scrollL = $(window).scrollLeft();
    let windowW = window.innerWidth * 3/4;

    $('.contact > .inner').each(function(){
        contactW = $(this).offset().left;
        
        if( scrollL > contactW - windowW ) {
            $(this).animate({'opacity' : 1}, 500);
        }
    });

});

// 마우스 커서 인터랙션
let windowW = $(window).innerWidth();
let mobileSize = 980;
let cursorOriginSize = '30px';
let cursorEffectSize = '50px';

if (windowW > mobileSize ) {
    $('.mouseCursor').css({'display' : 'block'});
    $('html').on('mousemove', function(e){
        const mouseX = e.pageX;
        const mouseY = e.pageY;
    
        $('.mouseCursor').css({'left':  mouseX + 'px', 'top' : mouseY + 'px'});
    });
    
    $('html').on('mousedown', function(){
        $('.mouseCursor').animate({width : cursorEffectSize, height : cursorEffectSize, opacity : '1'}, 300,
            function(){
                $('.mouseCursor').animate({width : cursorOriginSize , height : cursorOriginSize, opacity : '0.5'}, 300)
            }
        )
    });
    
    $('a').on('mouseover', function(){
        $('.mouseCursor').animate({width : cursorEffectSize, height : cursorEffectSize}, 300)
    }).on('mouseleave', function(){
        $('.mouseCursor').animate({width : cursorOriginSize, height : cursorOriginSize}, 300)
    });
} else {
    $('.mouseCursor').css({'display' : 'none'});
}


// float_mark 호버시 인터랙션 정지
$('.float_mark').on('mouseover', function(){
    $(this).css('animation-play-state', 'paused');
}).on('mouseleave', function(){
    $(this).css('animation-play-state', 'running');
});

// subPage show
$('.about .imgWrap .img',).animate({'left' : 0}, 800, function(){
    $('.about .title p').animate({'left' : 0}, 800, function(){
        $('.about .txtWrap .subTxt').animate({'right' : 0}, 800);
    });
});

$('.contact > h2').animate({'top' : '35%'}, 800, function(){
    $('.contact .txtWrap .subTxt').animate({'right' : 0}, 800);
});

$('.pfDetail .subVisual .imgWrap').animate({'left' : 0}, 800, function(){
    $('.pfDetail .subVisual .overviewTxt').animate({'right' : 0}, 800);
});