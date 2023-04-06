import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import AddACat from './pages/AddACat';
import CatGallery from './pages/CatGallery';
import CatRandoo from './pages/CatRandoo';
import HomePage from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cat-gallery" element={<CatGallery />} />
                <Route path="/add-a-cat" element={<AddACat />} />
                <Route path="/catrandoo" element={<CatRandoo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
