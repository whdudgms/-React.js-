// 1. 배열의 구조 분해 할당 

let arr = [1,2,3];
let [one, two, three, four = 4] = arr;
console.log(one,two,three)

//2. 객체의 구조 분해 할당 

let person= {
    name:"이정환",
    age :27,
    hobby:"테니스"
};

//2. 객체를 상징하는 중괄호 이용
// key값과 다르게 변수명 하고 싶으면     객체변수명 : 원하는 변수명
let {name, age: myAge, hobby,extra} = person;
console.log(name, myAge, hobby,extra)


//3. 객체 구조 분해 할당을 함수를 이용해서 매개변수를 받는 방법 
// 반드시 중괄호를 이용해서 구조분해 할당이라는 것을 명시해야한다.
const func = ({name,age,hobby, extra})=>{
   console.log(name,age,hobby,extra);
}

func(person);