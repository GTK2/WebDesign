$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
        $(this).find(".subbox").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
        $(this).find(".subbox").stop().slideUp();
    });

    var index = 0, prev, imgList = $(".imglist li"), size = imgList.length;
    setInterval(function(){
        prev = index;
        index++;
        if(index >= size) index = 0;
        imgList.eq(index).css({left : 800 + 'px'});
        imgList.eq(index).animate({left : 0}, 1000);
        imgList.eq(prev).animate({left : -800 + 'px'}, 1000);
    }, 3000);

    $(".notice li:first-child").click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });
});