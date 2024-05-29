
function returnFalse(){
    console.log("False 함수");
    return undefined;
}

function returnTrue(){
    console.log("True 함수");
    return 10;
}


// 논리 연산에 Trushy한값 혹은 Falsy한 값을 넣으면 연산의 결과가 됨 
// 즉 true false가 아님
// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());




function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name : "이정환"});