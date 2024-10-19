
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
   
      <Router>
        <div className="App">
          <Home/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/About' exact Component={About}/>
            <Route path='/Menu' exact Component={Menu}/>
            </Routes>

        </div>

      </Router>
      
    
  );
}

export default App;
