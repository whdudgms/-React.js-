


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
console.log(index);


let ObjectArr = [
    {name : "이정환"},
    {name:"홍길동"},
];

console.log(
    ObjectArr.indexOf({name:"이정환"})
);
// === 얕은 비교로 indexOf가 진행됨 

console.log(
    ObjectArr.findIndex((item)=>item.name === "이정환")
);


//4 . findIndex
//모드 요소를 순회하면, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드 
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex(
    (item)=> item ===999
)
console.log(findedIndex);


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name: "이정환"},
    {name: "홍길동"},
];

//첫번째로 찾은 객체 자체가 반환된다. 
const finded = arr5.find(
    (item) => item.name === "이정환"
)
console.log(finded)





















