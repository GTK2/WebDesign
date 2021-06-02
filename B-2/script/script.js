$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(".submenu").stop().slideDown();
        $(".subbox").stop().slideDown();
    }).mouseout(function(){
        $(".submenu").stop().slideUp();
        $(".subbox").stop().slideUp();
    });

    var index = 0, prev, imgList = $(".imglist li"), size = imgList.length;
    setInterval(function(){
        prev = index;
        index++;
        if(index >= size) index = 0;
        imgList.eq(index).css({top : 300 + 'px'});
        imgList.eq(index).animate({top : 0}, 1000);
        imgList.eq(prev).animate({top : -300 + 'px'}, 1000);
    }, 3000);

    $(".notice li:first-child").click(function(){
        $("#modal").show();
    });
    $(".popup input").click(function(){
        $("#modal").hide();
    });
});