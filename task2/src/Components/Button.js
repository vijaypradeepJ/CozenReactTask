import React from 'react'

function Button() {
    const handlecontent=()=>{
        alert("Hi Im vijay pradeep");
    }
  return (
    <div>
        <button onClick={handlecontent}>click me!</button>
    </div>
  )
}

export default Button