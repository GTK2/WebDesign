$(document).ready(function(){
    // 필요한 변수 선언
    // index : 다음에 보여질 이미지. 즉 흘러 들어올 이미지의 인덱스
    // prev : 현재 화면 보이는 이미지. 즉 흘러 나갈 이미지의 인덱스
    // $imgList : .imglist의 li 요소들을 배열로 저장
    // totalNum : $imgList의 크기를 저장
    var index = 0, prev, $imgList = $(".imglist > li"), totalNum = $imgList.length;

    // 15 line : setInterval : 정해진 시간마다 계속 실행하는 함수
    // 16~17 line : 현재 보여지는 이미지와 다음에 보여질 이미지 인덱스 값 설정
    // 18 line : 다음에 보여질 이미지의 인덱스가 전체 이미지 개수 이상이면 인덱스를 0으로 설정(1, 2, 3번 이미지가 모두 보여진 후 다시 1번부터 시작)
    // 19 line : imgList의 index 번째 요소의 css 값을 설정(화면 밖 위치로 준비시킴)
    // 20 line : imgList의 index 번째 요소를 지정된 css 값 위치로 슬라이드 시킴(화면 밖에서 화면 안으로 슬라이드 인)
    // 21 line : imgList의 prev 번째 요소를 지정된 css 값 위치로 슬라이드 시킴(화면 안에서 화면 밖으로 슬라이드 아웃)
    setInterval(function(){
       prev = index; 
       index = index + 1;
       if(index >= totalNum) index = 0;
       $imgList.eq(index).css({left: 1200 + 'px', display: 'block'});
       $imgList.eq(index).stop().animate({left: 0}, 1500);
       $imgList.eq(prev).stop().animate({left: -1200 + 'px'}, 1500);
    }, 3000);
});