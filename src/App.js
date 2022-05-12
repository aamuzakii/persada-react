import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import Orders from './views/Orders'

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
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
