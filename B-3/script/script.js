$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    var index = 0, prev, imgList = $(".imglist li"), size = imgList.length;
    setInterval(function(){
        prev = index;
        index++;
        if(index >= size) index = 0;
        imgList.eq(index).css({top : 300+'px'});
        imgList.eq(index).animate({top : 0}, 1000);
        imgList.eq(prev).animate({top : -300+'px'}, 1000);
    }, 3000);

    $(".notice li:first-child").click(function(){
        $("#modal").show();
    });
    $(".close").click(function(){
        $("#modal").hide();
    });
});