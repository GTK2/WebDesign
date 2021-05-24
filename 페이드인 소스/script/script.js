$(document).ready(function(){
    // 이미지 슬라이드(페이드 인아웃)
    // 8 line : 전체 이미지를 가리고
    // 9 line : 첫번째 이미지만 보이게 함
    // 11 line : $(.img-list li:first-child).fadeOut() : img-list의 첫번째 li 요소를 페이드 아웃시킴
    // .next().fadeIn() : 현재 선택된(첫번쨰 li요소)의 다음 요소를 페이드 인시킴
    // .end().appanedTo(".img-list") : 현재 선택된(next에서 선택된 두번째 li 요소)의 이전 선택 요소(img-list의 첫번째 li요소)를 잘라서 img-list의 맨 뒤에 붙여넣음. (1번 이미지가 리스트의 맨 뒤로가서 전체 이미지의 순서가 2 - 3 - 1로 바뀜. 그래서 다음 실행시에는 2번 이미지가 img-list의 첫번째 li 요소가 됨.)
    $(".imglist li").hide(); 
    $(".imglist li:first-child").show();    
    setInterval(function(){
        $(".imglist li:first-child").fadeOut(1500).next().fadeIn(1500).end().appendTo(".imglist");
    }, 3000);
});