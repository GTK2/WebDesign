$(document).ready(function(){
   // 슬라이드 메뉴
    $('.menu > ul > li').mouseover(function(){
       $(this).find('.submenu').stop().slideDown();
       $('.subbox').stop().slideDown();
    }).mouseout(function(){
       $(this).find('.submenu').stop().slideUp();
       $('.subbox').stop().slideUp();
    });

    // 모달 팝업
    $(".nlist > li").eq(0).click(function(){
      $("#modal").show();
    });
    $("#btn-close").click(function(){
       $("#modal").hide();
    })

    // 이미지 슬라이드
    var selNum = 0,
    $imgList = $(".slideimg > li"),
    totalNum = $imgList.length,
    oldNum;
    console.log(totalNum);

    setInterval(function(){
       oldNum = selNum;
       selNum = selNum + 1;
       if(selNum >= totalNum){
          selNum = 0;
       }
       $imgList.eq(selNum).css({left : 1200+'px',display: 'block'});
       $imgList.eq(oldNum).stop().animate({left: -1200+'px'}, 1500);
       $imgList.eq(selNum).stop().animate({left: 0}, 1500)
       
    }, 3000);

    
    

});