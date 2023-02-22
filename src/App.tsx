import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Launcher from './components/Launcher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<Home />} />
        <Route path='/' element={<Launcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
