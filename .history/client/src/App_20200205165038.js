import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  
        <Switch>
         
        </Switch>
    
  return (
    <Switch>
    <App/>
    <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
  </Switch>
  );
}

export default App;
