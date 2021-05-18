$(document).ready(function(){
    setInterval(function(){
        $(".imglist li:first-child").fadeOut(1500).next().fadeIn(1500).end().appendTo(".imglist");
    }, 3000);
});