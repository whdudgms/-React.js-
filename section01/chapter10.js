// for(초기식; 조건식; 증감식){
//     console.log("반복!");
// }
//소괄호 중괄호 조건문 반복문 
// 
for(let idx = 1; idx <= 10; idx++){
    if(idx % 2 ===0)
    continue;
    console.log(idx);
}



for(let idx = 1; idx <= 10; idx++){
    console.log(idx);

    if(idx >= 5){
        break;
    }
}

