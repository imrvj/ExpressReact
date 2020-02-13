import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import List from './List';

function App() {
  
    
  return (
    <Router>
    <Switch>
    <App/>
    <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
  </Switch>
  </Router>
  );
}

export default App;
