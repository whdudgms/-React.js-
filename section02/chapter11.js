// 자바스크립트는 멀티스레드가 아님 
// 그래서 비동기로 작업을 함 (비동기 순서대로 하지 않음.)


console.log(1);

// 비동기로 함수를 호출해줌
setTimeout(()=>{
    console.log(2);
},1000);
//javascript엔진은 비동기 함수를 만다면 Web APIs에 위임함

console.log(3);




