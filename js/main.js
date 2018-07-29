
//滚动公告栏开始
$(function(){

    let i=0;
    let size=$(".billboard li").length;
    move();
    let t = setInterval(function () { i++; move();},5000);
    $(".billboard").hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(function () { i++; move(); }, 5000);
    });
    function move(){
        if (i==size){
            $('.billboard div').css({top:0});
            i=1;
        }
        $(".billboard div").stop().animate({ top: -i * 36}, 400);
    }

    //滚动公告栏结束

    //登陆导航栏开始


    //文字变色
    $('.siteNav2  div ').mouseenter(function(){
        $(this).children('a').css({'color':'white'});
    });
    $('.siteNav2  div  ').mouseleave(function(){

        $(this).children('a').css({'color':'#ccc'});
    });


//文字变色
$(".siteNav2 div:nth-child(7)").hover(function(){

    $(".drop-down-list").toggleClass("on")}
);
$(".siteNav2 div:nth-child(8)").hover(function(){

    $(".QRcode").toggleClass("show")}
);
// 输入框默认输入开始
$("input").focus(function(){
    $(".defaultText").css({'display':'none'});

});
$("input").blur(function(){
    $(".defaultText").css({'display':'block'});
});
//输入框默认输入结束;


    // 功能区开始
    $('.tabNav>li a').mouseenter(function(){
        $(".cateCardList").eq($(this).index()).stop().show();
    });
    $('.cateCardList').mouseleave(function(){
        $(".cateCardList").stop().hide();
    });
    //功能区待完善


    // 轮播图开始

    let a=0;
    $(".slider-button .prev").click(function(){
        a--;
        slider();

    });
    $(".slider-button .next").click(function(){
        a++;
        slider();

    });
    slider();


      var timeout=  setInterval(function(){a++;slider()},3000);


    $(".sliderBox").hover(function () {
        clearInterval(timeout);
    }, function () {
        timeout = setInterval(function () { a++; slider(); }, 3000);
    });
    function slider(){
        if(a==4){
            a=0;
        }
        if(a==-1){
            a=3;
        }
        $(".sliderImg ").eq(a).fadeIn().siblings(".sliderImg ").stop().fadeOut();
        $(".dot").eq(a).addClass("active").siblings().removeClass("active");
    }
    $(".dot").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        let index=$(this).index();
        a = index;//将小圆点索引赋值给轮播图索引
        $(".sliderImg ").eq(a).fadeIn().siblings(".sliderImg ").stop().fadeOut();
    });

});
$(function(){
    $(".slickProduct").mouseover(function(){
        $(this).find("img").show();
        $(this).addClass("slickShadow");
        $(".slickBox .bd").eq($(this).index()).css({'background-color':'#F4EFE9'});
    });
    $(".slickProduct").mouseleave(function(){
        $(this).find("img").hide();
        $(this).removeClass("slickShadow");
        $(".slickBox .bd").eq($(this).index()).css({'background-color':'white'});
    });
    var count=0;

    $(".slickItem .next").click(function(){
        count++;
        slick();
    });
    $(".slickItem .prev").click(function(){
        count--;
        slick();
    });
    var len=$(".slickProduct").length/4;
    var slick=function(){
        if(count>len-1){
            count=len-1;
        }
        if(count==-1){
            count=0;
        }
        $(".slickList").animate({left:-count*1100},500)
    }
});
// $(function () {
//     $(window).scroll(function () {
//         var winTop = $(window).scrollTop();
//         if (winTop >= 100) {
//             $(".tabNav").css({position:'fixed',height:60,zIndex:9999});
//
//
//         } else {
//
//         }
//     });
// });




