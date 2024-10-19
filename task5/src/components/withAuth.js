import React,{useState,useEffect} from 'react';
const fakeAuth={
    isAunthenticated:false,
    login(callback){
        fakeAuth.isAunthenticated=true;
        setTimeout(callback,100);
    },
    logout(callback){
        fakeAuth.isAunthenticated=false;
        setTimeout(callback,100);
    }
}

const withAuth=(Wrappedcomponent)=> {
  return(props) =>{
    const[isAunthenticated,setIsAuthenticated]=useState(fakeAuth.isAunthenticated);
    const login=()=>{
        fakeAuth.login(()=>setIsAuthenticated(true));
    }
    const logout=()=>{
        fakeAuth.logout(()=>setIsAuthenticated(false));
    }
    useEffect(()=>{
        setIsAuthenticated(fakeAuth.isAunthenticated);
    },[]);

  
  return (
    <Wrappedcomponent
    isAunthenticated={isAunthenticated}
    login={login}
    logout={logout}
    {...props}
    />
  )
}
}

export default withAuth