import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Signup from './features/users/Signup';
import { Login } from './features/users/Login';
import { ProductDetails } from './features/products/productDetails';
import { Productlist } from './features/products/products';
import { Cart } from './features/Cart/Cart';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <BrowserRouter>

    <Provider store={store}>
      <Routes>
    <Route path="/" element={< Signup/>} />
      <Route path="home" element={<Productlist />} />
      <Route path="login" element={<Login />} />
      <Route path="details/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart/>} />

      </Routes>
    </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
