$(function(){
        console.log($(".s_slider").length);
        /* 제품 리트 내 이미지 슬라이더 */
        var count = 1; // 이미지 번호
        /* 인터벌 함수 (함수, 재생시간ms) */
        setInterval(function(){
    
            if(count > 1 ) count = 0;
            // 모든 이미지 비표시
            $('.s_slider img').removeClass('show')
            // 현재 이미지만 표시
            for(var i = 0; i < $('.s_slider').length; i++){
                $('.s_slider').eq(count).find('img').addClass('show');
            }
            // $('.s_slider.1 > a').eq(count).addClass('show');
            // $('.s_slider.2 > a').eq(count).addClass('show');
            // $('.s_slider.3 > a').eq(count).addClass('show');
            // $('.s_slider.4 > a').eq(count).addClass('show');
            // $('.s_slider.5 > a').eq(count).addClass('show');
            // $('.s_slider.6 > a').eq(count).addClass('show');
            // $('.s_slider.7 > a').eq(count).addClass('show');
            // $('.s_slider.8 > a').eq(count).addClass('show');
            // $('.s_slider.9 > a').eq(count).addClass('show');
            // $('.s_slider.10 > a').eq(count).addClass('show');
            // $('.s_slider.11 > a').eq(count).addClass('show');
            // $('.s_slider.12 > a').eq(count).addClass('show');
            // $('.s_slider.13 > a').eq(count).addClass('show');
            // $('.s_slider.14 > a').eq(count).addClass('show');
            // $('.s_slider.15 > a').eq(count).addClass('show');
            // $('.s_slider.16 > a').eq(count).addClass('show');
            // $('.s_slider.17 > a').eq(count).addClass('show');
            // $('.s_slider.18 > a').eq(count).addClass('show');
            // $('.s_slider.19 > a').eq(count).addClass('show');
            // $('.s_slider.20 > a').eq(count).addClass('show');
            // $('.s_slider.21 > a').eq(count).addClass('show');
            count++;
        }, 5000);
    
    $('.internal').click(function(){
        $('.treatment_list').removeClass('show');
        $('.treatment_list.01').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.internal').addClass('show');
    });
    $('.surgery').click(function(){
        $('.treatment_list').removeClass('show');
        $('.treatment_list.02').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.surgery').addClass('show');
    });
    $('.xray').click(function(){
        $('.treatment_list').removeClass('show');
        $('.treatment_list.03').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.xray').addClass('show');
    });
    $('.emergency').click(function(){
        $('.treatment_list').removeClass('show');
        $('.treatment_list.04').addClass('show');
        $('.sub_menu2 ul li').removeClass('show');
        $('.emergency').addClass('show');
    });
});

