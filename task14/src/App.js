
import './App.css';
import React,{Suspense} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
const Home=React.lazy(()=>import('./Components/Home'));
const About=React.lazy(()=>import('./Components/About'));
const Menu=React.lazy(()=>import('./Components/Menu'));


function App() {
  return (
   
      <Router>
        <div className="App">
          <Suspense fallback={<div>Loading........</div>}>
          <Routes>
            <Route exact path='/'  Component={Home}/>
            <Route path='/About' Component={About}/>
            <Route path='/Menu'  Component={Menu}/>
            </Routes>
            </Suspense>

        </div>

      </Router>
      
    
  );
}

export default App;
