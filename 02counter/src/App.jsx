import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const incrValue = () =>{
    if(count<20){
      setCount(count+1);
    }
    
  }
  const decrValue = () =>{
    if(count>0){
      setCount(count-1);
    }
    
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {count}</h1>
      <button onClick={incrValue}>IncreaseValue {count}</button><br></br>
      <button onClick={decrValue}>DecreaseValue {count}</button>
      <h2>Your current value is : {count}</h2>
    </>
  )
}

export default App
