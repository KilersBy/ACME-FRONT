import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
// import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
// import useToken from './useToken';
import Login from './components/Login/Login';

// Copyright ABED
function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/home' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div >

  );
};

export default App;