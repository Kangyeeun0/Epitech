import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import Tabs from './Tabs';
import KpopInfo from './KpopInfo';
import Epet from './Epet';
import Merchandise from './Merchandise';
import './mainPage.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const App = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('kpop');
    const isLogin = localStorage.getItem('login');
    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    return (
        <>
            <div className="container">
                <HeroSection />
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === 'kpop' && <KpopInfo />}
                {activeTab === 'epet' && <Epet activeTab={activeTab} setActiveTab={setActiveTab} />}
                {activeTab === 'market' && <Merchandise />}
            </div>

            {/* <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            KPOP FAN COMMUNITY is a platform for global K-pop fans, providing group information, e-pet
                            raising, and merchandise exchange services.
                        </p>
                        <div className="social-icons">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faTiktok} />
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
                                <a onClick={() => navigate('/kpopInfo')}>K-pop Info</a>
                            </li>
                            <li>
                                <a onClick={() => navigate('/ePet')}>E-Pet</a>
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
                            <i className="fas fa-map-marker-alt">kangyeeun55@gmail.com</i>
                        </p>
                        <p>
                            <i className="fas fa-phone">timotheezxl@outlook.com</i>
                        </p>
                        <p>
                            <i className="fas fa-envelope">2428155536@qq.com</i>
                        </p>
                        <p>
                            <i className="fas fa-envelope">elena111zhang@gmail.com</i>
                        </p>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2025 KPOP FAN COMMUNITY. All rights reserved.</p>
                </div>
            </footer> */}
        </>
    );
};

export default App;
