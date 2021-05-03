import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartProvider from "./components/CartProvider";
import Modal from "./components/Modal"

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
document.getElementById('root')
);

reportWebVitals();
