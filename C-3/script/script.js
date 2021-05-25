$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        var subbox = $(this);
        var x = subbox.offset().left + 151;
        var y = subbox.offset().top - 60;
        
        $(".subbox").css({left: x, top: y}).stop().slideDown();
        $(this).find(".submenu").stop().slideDown();
    }).mouseout(function(){
        $(".subbox").stop().slideUp();
        $(this).find(".submenu").stop().slideUp();
    });

    var imgList = $(".imglist li"), size = imgList.length, index = 0, prev;

    setInterval(function(){
        prev = index;
        index = index + 1;
        if(index >= size) index = 0;
        imgList.eq(index).css({left: 800 + 'px'});
        imgList.eq(index).animate({left: 0}, 1000);
        imgList.eq(prev).animate({left: -800 + 'px'}, 1000);
    }, 3000);
});