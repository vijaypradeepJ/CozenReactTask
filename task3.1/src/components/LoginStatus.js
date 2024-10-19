

import React, { useState } from 'react'

function LoginStatus() {
    const[isLogin,setIsLogin]=useState(false);
    const handlelogin =()=>{
        setIsLogin(prevstate=>!prevstate);
    }
  return (
    <div>
        <h1>{isLogin?'Welcome Back!':" Please Login"}</h1>
        <button onClick={handlelogin}>{isLogin?"Log Out":" Log In"}</button>
        {isLogin && <p>you access the courses</p>}
        
    </div>
  )
}

export default LoginStatus