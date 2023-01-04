import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import TechProducts from "./pages/TechProducts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GamingProducts from "./pages/GamingProducts";
import DecorProducts from "./pages/DecorProducts";
import Home from "./pages/Home";

function App() {
  // Use this whenever adding new products: { aLink: '', pImage: '', pName: '' },
  const techProds = [
    { aLink: 'https://amzn.to/3X2mDER', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/618E33M4mVL._AC_SX425_.jpg', pName: 'MOUNTUP Dual Monitor Stand - Freestanding & Height Adjustable Desk Mount'},
    { aLink: 'https://amzn.to/3Bl7tC6', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/711QqQZk+PL._SX425_.jpg', pName: 'EppieBasic LED Desk Lamp'},
    { aLink: 'https://amzn.to/3hmafk9', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71oPdIcALXL._AC_SX679_.jpg', pName: 'HUANUO Dual Monitor Stand' },
    { aLink: 'https://amzn.to/3uQMRyh', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61mCmjW5RiL.__AC_SX300_SY300_QL70_FMwebp_.jpg', pName: 'JoyReken 4-Port USB 3.0 Hub' },
    { aLink: 'https://amzn.to/3UGOauc', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71AsjjEAwqL._AC_SX425_.jpg', pName: 'Elgato Stream Deck MK.2' },
  ];

  const gamingProds = [
    { aLink: 'https://amzn.to/3UiePNz', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ANdv+2OxL._AC_SX425_.jpg', pName: 'MSI G241VC 24" Gaming Monitor' },
    { aLink: 'https://amzn.to/3ELFtbR', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61A34gN0jfL._AC_SX425_.jpg', pName: 'Corsair Virtuoso RGB Wireless Gaming Headset' },
  ];

  const decorProds = [
    { aLink: 'https://amzn.to/3FvmmnX', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/616qQCQHs2L._AC_SX679_.jpg', pName: 'PC Gaming Headset Headphone Hook Holder Hanger Mount' },
    { aLink: 'https://amzn.to/3iNdJfR', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/619Q4n3POzL._AC_SX679_.jpg', pName: 'LEKUSHA Large Desk Cup Holder' },
    { aLink: 'https://amzn.to/3ZfdjzE', pImage: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61At5cG9b7L._AC_SX425_.jpg', pName: 'Benks Desktop Headphone Stand' },
  ];

  return (
    <>
      <BrowserRouter basename="/tech-finds">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/tech" element={<TechProducts products={techProds}/>}/>
            <Route path="/gaming" element={<GamingProducts products={gamingProds}/>}/>
            <Route path="/office" element={<DecorProducts products={decorProds}/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;