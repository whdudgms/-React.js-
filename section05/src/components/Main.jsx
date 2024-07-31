import "./Main.css";
// JSX주의 사항 
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. => 값으로서 평가되야한다 if문 사용 불가, 연산자 사용가능 
//2. 숫자, 문자열, 배열 값만 렌러딩뢴다. => true, undefined,객체,null 이런건 안 된다. 
//3. 모든 캐그는 닫혀있어야 한다.
//4. 최상위 태그는 반드시 하나여야한다.
const Main = () =>{
    const user = {
        name:"이정환",
        isLogin: true,
    };
        
    if(user.isLogin){
        return  <div className="logout">
        로그아웃</div>;
    }else{
        return <div>로그인</div>;
    }
}

export default Main;