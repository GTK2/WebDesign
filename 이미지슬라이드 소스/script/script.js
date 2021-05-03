$(document).ready(function(){
    var index = 0, prev, $imgList = $(".imglist > li"), totalNum = $imgList.length;

    setInterval(function(){
        // prev = 현재 화면 보이는 이미지. 즉 흘러 나갈 이미지
        // index = 다음에 보여질 이미지. 즉 흘러 들어올 이미지
       prev = index; 
       index = index + 1;
       if(index >= totalNum) index = 0;
       $imgList.eq(index).css({top: -300 + 'px', display: 'block'});
       $imgList.eq(index).stop().animate({top: 0}, 1500);
       $imgList.eq(prev).stop().animate({top: 300 + 'px'}, 1500);
    }, 3000);
});