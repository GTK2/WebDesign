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
        
    }, 3000);
});