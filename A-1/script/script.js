$(document).ready(function(){
    $(".menu > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    var index = 0, prev,
    $imgList = $(".slidelist > li"),
    totalNum = $imgList.length;

    setInterval(function(){
        prev = index;
        index = index + 1;
        if(index >= totalNum) index = 0;
        $imgList.eq(index).css({top : 300 + 'px', display: 'block'});
        $imgList.eq(index).stop().animate({top : 0}, 1500);
        $imgList.eq(prev).stop().animate({top : -300 + 'px'}, 1500);
    }, 3000);

});