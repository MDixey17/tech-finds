import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter basename="/tech-finds">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Products/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;