


// 5가지 요소 순회 및 탐색 메서드 
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드 

let arr1 = [1,2,3]; // 3회 호출 

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2, arr);
});

let doubleArr = [];

// arr1 1,2,3
arr1.forEach((item) =>{doubleArr.push(item*2)})
console.log(doubleArr)

// 2. includes 
// 배열의 특정 요소가 있는지 확인하는 그런 메서드 
let arr2 = [1,2,3];
arr2.includes(3);
let isIncludes = arr2.includes(10);
console.log(isIncludes)


//3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 
let arr3 = [2,2,2];
let index = arr3.indexOf(20);
//console.log(index);



