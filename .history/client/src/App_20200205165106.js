import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import List from './List';

function App() {
  
    
  return (
    <Switch>
    <App/>
    <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
  </Switch>
  );
}

export default App;
