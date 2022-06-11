import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
import Login from './components/Login/Login';
import Footer from './components/Footer';

// Copyright ABED
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/Accueil' element={<Home />} />
            <Route path='/Produit' element={<Product />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter >
    </div >

  );
};

export default App;