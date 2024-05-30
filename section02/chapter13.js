function add10(num){
    const promise = new Promise((resolve, reject)=>{
        //비동기 작업 실행 함수 
        //executor
    
        setTimeout(()=>{
    
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가아닙니다.")
            }
    
        },2000)
    });

    return promise;
}

const p = add10(0);
p.then((result)=>{
    console.log(result);

    const newP = add10(result);
    newP.then((result)=>{
        console.log(result);    
    });
    return newP;
}).then((result)=>{
    console.log(result);
    return add10("result");
})
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


// // then 메서드 (성공했을 때만 호출)
// // ->  그 후의 

// //이렇게 연결하는걸 promise 체이닝
// promise.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });

