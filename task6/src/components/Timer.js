import {React,useState,useEffect} from 'react'

function Timer() {
    const [seconds, setseconds] = useState(0)
    useEffect(() => {
        const timer=setInterval(()=>{
            setseconds((prevseconds)=>prevseconds+1);
        },1000)
      
    
      return () => {
        clearInterval(timer);
      }
    }, [])
    
  return (
    <div>
        
        <h4>Seconds:{seconds}</h4>
    </div>
  )
}

export default Timer