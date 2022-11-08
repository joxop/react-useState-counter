import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'


function App() {
  const [count, setCount] = useState(4)
  
  function decrementCount(){
    setCount(prevcount => prevcount - 1)
  }

  function incrementCount(){
    setCount(prevcount => prevcount + 1)
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      
      
    </div>
  );
}

export default App;
