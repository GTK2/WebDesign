$(document).ready(function(){
    $(".menu ul li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    }.mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    }));
});