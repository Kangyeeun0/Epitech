import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import React, { useRef } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Header from './component/Header';
import Epet from './pages/Epet';
import KpopInfo from './pages/KpopInfo';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/ePet" element={<Epet />} />
                    <Route path="/kpopInfo" element={<KpopInfo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
