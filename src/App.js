import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  const ps = [
    { aLink: 'https://amzn.to/3X2mDER', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/618E33M4mVL._AC_SX425_.jpg', pName: 'MOUNTUP Dual Monitor Stand - Freestanding & Height Adjustable Desk Mount'}
  ];

  return (
    <>
      <BrowserRouter basename="/tech-finds">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Products products={ps}/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;