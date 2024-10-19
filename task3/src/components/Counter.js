import React, { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const handleincrement=()=>{
        setCount(count+1);
    }
    const handledecrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        <p>Counter:{count}</p>

    </div>
  )
}

export default Counter