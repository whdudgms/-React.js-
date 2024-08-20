import './App.css'
import Viewer from "./components/viewer";
import Controller from "./components/Controller";
import Even from './components/Even'
import {useState,useEffect, useRef} from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount= useRef(false);

  //1. 마운트 : 탄생 
    // 최초로 한번 실행됨 의존성 배열에 빈 배열을 넣어주면 된다 
  useEffect(()=>{
  console.log('mount');
  },[])

  //2. 업데이터 : 변화, 리렌더링 
    // 의존성 배열을 생략하면 이 컴포넌트 update될 때 마다 실행
    // + 진찌 update시에만 호출하고 싶으면 flag용으로 useRef생성해서 활용 
    // useRef는 컴포넌트가 리렌더링되더라도 값이 유지되는 “변수”를 생성할 수 있습니다. 
  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log('update');
  })

  //3. 언마운트 : 죽음

  //의존성 배열 
  //dependency array
  //depth

  const onClickButton = (value) =>{
    setCount(count+value);
  };

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}></input>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0? <Even/> :null }
      </section> 
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div> 
  );
}

export default App;
