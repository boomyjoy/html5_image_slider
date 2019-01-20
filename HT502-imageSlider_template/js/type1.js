$(document).ready(function() {

    var $items = $("#slider ul .item")
    console.log($items);
    
    var currentindex = 0;
    setInterval(function() {
        if(currentindex > 2) {
            currentindex = 0;
        }
       console.log($items.eq(currentIndex).hasClass("active");
       $items.removeClass("active") 
       $items.eq(currentindex++).addClass("active");
        console.log(currentindex);
    }, 1000);

});

// var 변수 =데이터를 담는 공간 variable var~ 을쓰면 변수를 선언한다고 이야기 함 
// var num=1 ; 변수 정의 
// 함수, method 코드의집합 function sum(num1, num2){ consol.log(num1 + num2)} 이런식으로 함수 정의

var num=1;
function sum(num1, num2){
    console.log(num1+num2);

}
sum(1,2);