import './App.css'
import Viewer from "./components/viewer";
import Controller from "./components/Controller";

function App() {
  

  return (
    <div className="App">
      <h1>Simple Count</h1>
      <sction>
        <Viewer />
      </sction> 
      <section>
        <Controller/>
      </section>
    </div> 
  );
}

export default App
