/* main.js */

$(function(){
  $('body').imagesLoaded(function(){    

    // 스와이퍼 풀스크린

    $('.swiper-container').swiper({
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
      direction: 'vertical',
      slidesPerView: 1,
      paginationClickable: true,
      // spaceBetween: 30,
      mousewheelControl: true,
      mousewheelForceToAxis: true,
      speed: 600
    });
  
  $(function() {
    // gnb
    $(function() {
      $('.depth1 > li > a').mouseenter(function(){
          $('.depth2').addClass('show');
          $('.depth2_bg').addClass('show');
          $('#header_wrap').css('background','#fff');
      });

      $('.depth2_bg').mouseleave(function(){
          $('.depth2_bg').removeClass('show');
          $('.depth2').removeClass('show');
          $('#header_wrap').css('background','rgba(255,255,255,0.6)');
      });

    });

    // 메인 배너 슬라이드
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

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e13d7f927773e0d832c2bda/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
  }); 
});// end $

