$(document).ready(function(){
    $(".menu > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
        $(".subbox").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
        $(".subbox").stop().slideUp();
    });

    $(".slidelist li:nth-child(2)").hide();
    $(".slidelist li:nth-child(3)").hide();
    setInterval(function(){
        $(".slidelist li:first-child").fadeOut(1000).next().fadeIn(1000).end().appendTo(".slidelist");
    }, 3000);


    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > ul");
    tabCont.hide().eq(0).show();
    tabBtn.click(function(){
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("on");
        target.addClass("on");
        tabCont.hide();
        tabCont.eq(index).show();
    });

    $(".notice > li").eq(0).click(function(){
        $("#modal").show();
    });
    $(".popup > input").click(function(){
        $("#modal").hide();
    });

});