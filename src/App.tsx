import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import CheckOutPage from './pages/CheckOutPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/bookdetails/:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  )
}

export default App
