import './App.css';
import Shop from './places/Shop';
import Home from './places/Home';
import About from './places/About';
import Contact from './places/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
        <BrowserRouter >
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route exact path="/Shop" element={<Shop/>}/>
            <Route exact path="/About" element={<About/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
