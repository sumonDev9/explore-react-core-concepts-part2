import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
 
function handleClick(){
  alert("button clicked")
}

const handleClick2 = () => {
  alert('button 2 click');
}

const addToFive = (num) => {
  alert(num +5 );
}
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
       <Counter></Counter>
       <Team></Team>
        {/* <button onClick={handleClick}>Click me</button>
        <button onClick={handleClick2}>Click2</button>
        <button onClick={() => {alert('third clicked')}}>third</button>
        <button onClick={() => addToFive(3)}>Four</button> */}
    </>
  )
}

export default App
