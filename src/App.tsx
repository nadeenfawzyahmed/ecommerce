import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Signup}from './features/user/Signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Signup/>
        <Counter />
        
      
      </header>
    </div>
  );
}

export default App;
