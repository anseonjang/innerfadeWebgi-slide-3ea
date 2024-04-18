$(function () {
    // 페이드인아웃슬라이드
    var x = 0;
    setInterval(function(){
       var next = (x + 1) % 3;  // 0에서 1씩 증가하는 변수 next 만듬
    // (2+1) % 3 으로 계산된 결과는 0이 되므로 0,1,2
    $(".fadeSlide").find("div").eq(x).fadeOut();
    $(".fadeSlide").find("div").eq(next).fadeIn(); 
    // 첫번째인 0을 찾아 사라지게 함
    x = next; // x값 재할당
    }, 3000); // 3초
  
});


// .find() 후손 중에서 찾기 찾기 
// .fadeOut(); 서서히 사라짐
// .fadeIn(); 서서히 나타짐	
// .eq(변수) -> 지정한 변수만 선택  