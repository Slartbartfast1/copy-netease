//滚动公告栏开始
$(function(){
    // let clone=$(".billboard li").first().clone();
    // $(".billdoard ul").append(clone);
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
    })


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
    $('.tabNav>li>a').mouseover(function(){
        $(".cateCardList").eq($(this).index()).stop().slideDown();
    });
    $('.cateCardList').mouseleave(function(){
        $(".cateCardList").stop().slideUp();
    });
    //功能区待完善


    // 轮播图开始

    let a=0;
    $(".prev").click(function(){
        a--;
        slider();
        console.log(a);
    });
    $(".next").click(function(){
        a++;
        slider();
        console.log(a);
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




