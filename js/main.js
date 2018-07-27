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
});



