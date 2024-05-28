//함수

function greeting (){
    console.log("안녕하세요");
}

console.log("호출 전 ");
greeting();
console.log("호출 후 ");


// 함수에서 값을 전달받아서 저정하는 매개변수 
function getArea(width , height){
        function another(){
            console.log("another");
        }
        another();
    let area = width * height;
    console.log(area); // 콘솔창 출력

    return area; // 리턴하기 
}

console.log("호출 전 ");
greeting();
console.log("호출 후 ");

let area  = getArea(19,20)
// 전달하는 값 인수 
getArea(10,22);
getArea(10,2223);