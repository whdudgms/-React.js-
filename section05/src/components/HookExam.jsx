import useInput from "./../hooks/useInput";

// 3가지 hook 관련 팁
// 1. 함수 컴퍼논트, 커스텀 훅 내부에서만 호출 가능 
// 2. 조건부로 호출될 수는 없다.  
// 3. 나만의 훅(Custom Hook) 직접  만들 수 있다.


const HookExam = () =>{
    const [input , onChange] = useInput();
    const [input2, onChage2] = useInput();

    return (
    <div>
        <input value={input} onChange={onChange}/>
        <input value={input2} onChange={onChage2}/>
    </div>
    );
}

export default HookExam; 