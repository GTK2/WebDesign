$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseleave(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    $(".imglist > li").hide();
    $(".imglist > li:first-child").show();

    $(".notice > li:first-child").click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });

    setInterval(function(){
        $(".imglist > li:first-child").fadeOut(1500).next().fadeIn(1500).end().appendTo(".imglist")
    }, 3000);
});