$(function () {
    // 좌우슬라이드
    var x = 0;
    // setInterval = 일정시간동안 반복하여 실행
    setInterval(function () {
        if (x < 2) {
            x++; // 0,1,2,0,1,2
        } else {
            x = 0;
        }
        var sp = x * (-800) + "px";
        // 0 * -800px = 0
        // 1 * -800px = -800px
        // 2 * -800px = -1600px 
        $(".leftSlide").animate({
            left: sp
        }, 400); //0.4초 

    }, 3000); // 3초
});