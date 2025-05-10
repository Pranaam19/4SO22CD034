import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Stock from './Stock';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Stock/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
