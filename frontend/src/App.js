import React from 'react';
import './App.css';
import Public from './components/public';
import Signup from './components/signup';
import Login from './/components/login';
import {BrowserRouter as Router,Switch,  Route, Link } from 'react-router-dom';

// function Index() {
//   return <h2>Home</h2>;
// }
function App() {
  return (
    
    <div>
            {/* <Link to="/"><h1 className="end">puplic</h1></Link>
            <Route path="/" exact component={Login} /> */}
        <Router>
            <nav className="nav">
              <Link  to="/lo"><span className="end">public</span> </Link>
              <Link  to="/login"><span  className="end">login</span> </Link>   
              <Link  to="/signup"><span  className="end">signup</span></Link>
            </nav> 
             <Switch>
              <Route path="/lo" exact component={Public} />
              <Route path="/login" component={Login}  />
              <Route path="/signup" component={Signup} />
            </Switch>
        </Router>
        </div>
  );
}

export default App;
