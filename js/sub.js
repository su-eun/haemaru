/* main.js */
$('body').imagesLoaded(function(){    
  // 페이지 스크롤 함수
  function goto_scroll(move_top) {
    $("html,body")
      .stop()
      .animate({ scrollTop: move_top + "px" }, 800);
  }

  $(function() {
  // gnb 이벤트
  /* var link = document.querySelectorAll("#gnb a");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
      var top = document.querySelector(link[i].hash).offsetTop;
      goto_scroll(top);
      // 인디케이터 업데이트
      update_pager(i);
    });
  } */
  
  // 우측 인디케이터 이벤트
  $("#pager li a").click(function() {
    $("#pager li").removeClass("on");
    $(this).parent().addClass("on");
    var top = $(this.hash).offset().top;
    goto_scroll(top);
  });

  // 인디케이터 업데이트 함수
  function update_pager(page_num){
    console.log(page_num);
    $("#pager li").removeClass("on");
    $('#pager li')
      .eq(page_num)
      .addClass("on");
  }

  // scroll 이벤트
  var s = $('section').length;
  var sec_top_y = [];
  for(var i = 0; i < s; i++){
    sec_top_y[i] = $('section').eq(i).offset().top;
    console.log(sec_top_y)
  }

  $(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= sec_top_y[0]){
      update_pager(0);
    }
    if(top >= sec_top_y[1]){
      update_pager(1);
    }
    if(top >= sec_top_y[2]){
      update_pager(2);
    }
    if(top >= sec_top_y[3]){
      update_pager(3);
    }

  });

  // gnb
  $(function() {
    $('.depth1 > li > a').mouseenter(function(){
        $('.depth2').addClass('show');
        $('.depth2_bg').addClass('show');
    });

    $('.depth2_bg').mouseleave(function(){
        $('.depth2_bg').removeClass('show');
        $('.depth2').removeClass('show');
    });

  });

    var count = 1;  // 이미지번호

    // 인터벌함수(함수, 재생시간ms)
    setInterval(function(){
        /* console.log(count); */
        if(count > 2) count = 0;
        // 모든 이미지 비표시
        $('.bg_slide div').removeClass('show');
        // 현재 이미지만 표시
        $('.bg_slide div')
            .eq(count)
            .addClass('show');

        count++;
    }, 10000);
    });

  
}); // end $

// 1페이지씩 스크롤
/* window.onload = function () {
    var elm = ".section";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
              
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });
} */

