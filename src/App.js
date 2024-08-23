import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compilation from './Components/Compilation/Compilation';
import About from './Components/About/About';
import CustomCardsPage from './Components/CustomCards/CustomCardsPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Compilation />} />
        <Route path='/about' element= {<About />} />
        <Route path="/project/:id" element={<CustomCardsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
