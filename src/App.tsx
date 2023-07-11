import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count , setCount]=useState(0);
  const increaseCount=()=>{
    setCount(count+1)
  }
  const decreaseCount=()=>{
    setCount(count-1)
  }
  const setZero=()=>{
    setCount(0)
  }
  return (
    <div>
      <h3>{count}</h3>
      <button className='btn' onClick={increaseCount}>Increase</button>
      <button className='btn' onClick={decreaseCount}>Decrease</button>
      <button className='btn' onClick={setZero}>Set to 0</button>
    </div>
  )
}

export default App
