$(document).ready(function() {
    $("#slider ul li") .eq(1).hide();
    $("#slider ul li") .eq(2).hide();
    
    //위와 아래는 같은 결과 
    // $("#slider ul li:nth-child(2)").hide();
    // $("#slider ul li:nth-child(3)").hide();

setInterval(function() {
  //첫번째 사진 사라짐  :가상선택자
    $("#slider ul li:first-of-type").fadeOut();
    //두번째 사진 나타남
    $("#slider ul li:nth-child(2)").fadeIn();
        //li 순서를 자동 변경해주면, 자동으로 위 두 페이드 기능이 .. 

    $("#slider ul").append ($("#slider ul li:first-of-type"));
},1000);
});