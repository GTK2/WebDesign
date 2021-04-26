$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseleave(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    setInterval(function(){
        $(".imglist li:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".imglist");
    }, 3000);
});