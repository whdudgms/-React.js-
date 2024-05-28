
//1. 함수 표현식 함수 선언문


// 2. 화살표 함수 
let varC = (value) => {
    console.log(value +1);
    return value +1;
};

console.log(varC(2));

function main(value){

}

function sub(){
    console.log("sub");
}

main(sub);