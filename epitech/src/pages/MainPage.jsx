import React, { useState } from 'react';
import HeroSection from './HeroSection';
import Tabs from './Tabs';
import KpopInfo from './KpopInfo';
import Epet from './Epet';
import Merchandise from './Merchandise';
import './mainPage.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('kpop');

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <i className="fas fa-music"></i>
                    <h1>KPOP FAN COMMUNITY</h1>
                </div>
                <div className="nav-links">
                    <a
                        href="#kpop"
                        className={activeTab === 'kpop' ? 'active' : ''}
                        onClick={() => setActiveTab('kpop')}
                    >
                        K-pop Info
                    </a>
                    <a
                        href="#epet"
                        className={activeTab === 'epet' ? 'active' : ''}
                        onClick={() => setActiveTab('epet')}
                    >
                        E-Pet
                    </a>
                    <a
                        href="#market"
                        className={activeTab === 'market' ? 'active' : ''}
                        onClick={() => setActiveTab('market')}
                    >
                        Merchandise
                    </a>
                    <a href="#about">About Us</a>
                </div>
                <div className="user-actions">
                    <a href="Login/login.html" className="btn btn-outline">
                        Login
                    </a>
                    <button className="btn btn-primary">Register</button>
                </div>
            </nav>

            <div className="container">
                <HeroSection />
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === 'kpop' && <KpopInfo />}
                {activeTab === 'epet' && <Epet />}
                {activeTab === 'market' && <Merchandise />}
            </div>

            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            KPOP FAN COMMUNITY is a platform for global K-pop fans, providing group information, e-pet
                            raising, and merchandise exchange services.
                        </p>
                        <div className="social-icons">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">K-pop Info</a>
                            </li>
                            <li>
                                <a href="#">E-Pet</a>
                            </li>
                            <li>
                                <a href="#">Merchandise</a>
                            </li>
                            <li>
                                <a href="#">Fan Forum</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>
                            <i className="fas fa-map-marker-alt"></i> 123 Apgujeong-ro, Gangnam-gu, Seoul
                        </p>
                        <p>
                            <i className="fas fa-phone"></i> +82 2-1234-5678
                        </p>
                        <p>
                            <i className="fas fa-envelope"></i> contact@kpopfancommunity.com
                        </p>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2023 KPOP FAN COMMUNITY. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default App;
