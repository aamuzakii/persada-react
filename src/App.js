import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import Orders from './views/Orders'
import Cart from './views/Cart'
import Address from './views/Address'
import Login from './views/Login'
import SuccessOrder from './views/SuccessOrder'

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cart" element={<Cart />} />
        <Route path="address" element={<Address />} />
        <Route path="login" element={<Login />} />
        <Route path="success-order" element={<SuccessOrder />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
