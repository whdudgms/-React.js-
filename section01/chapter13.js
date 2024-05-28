

// 1. 콜백함수 
function main(value){
    value();
}


main(() => {

});


// 2. 콜백 함수의 화용 
function repeat(count,  callback){
    for(let idx =   1 ; idx <=  count;  idx++){
        callback(idx);
    }
}


repeat(5, function (idx) {
    console.log(idx * 2);
});

repeat(5, function (idx) {
    console.log(idx * 3);
});

