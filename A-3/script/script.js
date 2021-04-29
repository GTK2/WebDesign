$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseleave(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    setInterval(function(){
        $(".imglist li:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".imglist");
    }, 3000);

    var tabBtn = $(".tab-btn > ul > li");
    var tabCont = $(".tab-cont > div");

    tabCont.hide().eq(0).show();
    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("on");
        target.addClass("on");
        tabCont.hide();
        tabCont.eq(index).show();
    });

    $(".notice ul li").eq(0).click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });
});