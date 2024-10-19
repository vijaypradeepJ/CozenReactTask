import React from 'react'
import withAuth from './withAuth'

function Authcomponent({logout,login,isAunthenticated}) {
  return (
    <div>
        <h1>{isAunthenticated?'Welcome Back!':'please Log In'}</h1>
        {isAunthenticated ?(
        <button onClick={logout}>Logout</button>
        ) :(
        <button onClick={login}>logIn</button>
        )}

    </div>
  )
}
const Enhancedcomponent=withAuth(Authcomponent);

export default Enhancedcomponent;