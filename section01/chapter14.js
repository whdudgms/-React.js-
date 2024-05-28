// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프 
// - > 전역 스코프 : 전체 영역에서 접근 가능 
// - > 지역 스코프 : 특정 지역에서만 접근 가능 


let a = 1; // 전역 스코프 

function funcA(){
    let b = 2; // 지역 스코프 
    console.log(a);
}

funcA();
//console.log(b); // 에러 

if(true){
    let c = 1;
}

// console.log(c);

for(let i = 0; i < 10; i++){
    let d = 1;
}

console.log(d);
// 함수도 지역 스코프를 가질 수 있음. 
// 함수는 반복문 조건문에서는 지역 스코프를 가지지 않음! 