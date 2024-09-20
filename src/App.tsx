import React from 'react';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Link to="/Labs">Labs</Link> | <Link to="/Labs/Lab1">Lab1</Link> | <Link to="/Kanbas">Kanbas</Link>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
