import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {Signup}from './features/users/Signup'
import { Login } from './features/users/Login';
import {Productlist} from './features/products/products'
import { ProductDetails } from './features/products/productDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Signup/>
        <Productlist/>
        <ProductDetails/>


     
        
       
      </header>
    </div>
  );
}

export default App;
