import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComp from './components/Navbar';
import Cards from './components/Cards';
import CardsDescription from './components/productDesc';


function App() {
  return <>
    <BrowserRouter>
    <NavbarComp/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path='/desc/:productId' element={<CardsDescription/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
