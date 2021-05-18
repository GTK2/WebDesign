$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    $(".img-list li").hide();
    $(".img-list li:first-child").show();

    setInterval(function(){
        $(".img-list li:first-child").fadeOut(1500).next().fadeIn(1500).end().appendTo(".img-list");
    }, 3000);
});