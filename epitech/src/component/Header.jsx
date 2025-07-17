import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import '../pages/mainPage.css';

const Header = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('kpop');
    const isLogin = localStorage.getItem('login');
    return (
        <header className="header-header">
            <nav className="navbar">
                <div className="logo">
                    <i className="fas fa-music"></i>
                    <h1 onClick={() => navigate('/')}>KPOP FAN COMMUNITY</h1>
                </div>
                <div className="nav-links">
                    <a className={activeTab === 'kpop' ? 'active' : ''} onClick={() => navigate('/kpopInfo')}>
                        K-pop Info
                    </a>
                    <a className={activeTab === 'epet' ? 'active' : ''} onClick={() => navigate('/ePet')}>
                        E-Pet
                    </a>
                    <a
                        href="#market"
                        className={activeTab === 'market' ? 'active' : ''}
                        onClick={() => setActiveTab('market')}
                    >
                        Merchandise
                    </a>
                    <a onClick={() => navigate('/aboutUs')}>About Us</a>
                </div>
                {isLogin ? (
                    ''
                ) : (
                    <div className="user-actions">
                        <button className="btn btn-outline" onClick={() => navigate('/login')}>
                            Login
                        </button>
                        <button className="btn btn-primary" onClick={() => navigate('/register')}>
                            Register
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
