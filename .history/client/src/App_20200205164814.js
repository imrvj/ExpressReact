import React from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
  return (
    <Switch>
    <App/>
  </Switch>
  );
}

export default App;
