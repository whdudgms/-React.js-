import './App.css'
import Viewer from "./components/viewer";
import Controller from "./components/Controller";
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);

  const onClickButton = (value) =>{
    setCount(count+value);
  };

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <sction>
        <Viewer count={count}/>
      </sction> 
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div> 
  );
}

export default App;
