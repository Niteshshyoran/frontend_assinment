import logo from './logo.svg';
import './App.css';
import {useState} from "react";


    function App() {
      const [count, setCount] = useState(0)
    
      return (
        <>
        <h1>Count:-{count}</h1>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        </>
      )
    }
export default App;
