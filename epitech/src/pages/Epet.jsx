import React, { useEffect, useState } from 'react';
import './epet.css';
import Modal from '../component/Modal';
import { useNavigate } from 'react-router-dom';

export default function Epet({ activeTab, setActiveTab }) {
    const navigate = useNavigate();
    const [selectedPet, setSelectedPet] = useState('🐰');
    const [feedCount, setFeedCount] = useState(0);
    const maxFeed = 5;
    const [cooldown, setCooldown] = useState(false);
    const [displayedPet, setDisplayedPet] = useState(selectedPet);
    const isLogin = localStorage.getItem('login');
    const [isOpenModal, setIsOpenModal] = useState(false);

    const [petStats, setPetStats] = useState({
        hunger: 55,
        happiness: 60,
        energy: 60,
        loginStreak: 5,
    });

    useState(() => {
        if (isLogin) {
            return;
        } else {
            setIsOpenModal(true);
        }
    }, []);

    useEffect(() => {
        setDisplayedPet(selectedPet);
    }, [selectedPet]);

    useEffect(() => {
        // updateDisplay();
        const interval = setInterval(() => {
            setPetStats((prev) => ({
                ...prev,
                hunger: clampValue(prev.hunger - 1),
                happiness: clampValue(prev.happiness - 0.5),
                energy: clampValue(prev.energy - 0.7),
            }));
        }, 10000);
        setTimeout(dailyLogin, 1000);
        return () => clearInterval(interval);
    }, []);

    function clampValue(value) {
        return Math.max(0, Math.min(100, value));
    }

    function dailyLogin() {
        setPetStats((prev) => ({
            ...prev,
            loginStreak: prev.loginStreak + 1,
            happiness: clampValue(prev.happiness + 5),
        }));
        showNotification('Login bonus: +5 happiness');
    }

    function showNotification(message) {
        const notification = document.getElementById('notification');
        if (!notification) return;
        notification.textContent = message;
        notification.style.opacity = '1';
        notification.style.top = '20px';
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.top = '0px';
        }, 2000);
    }

    function handleAction(type) {
        if (type === 'feed') {
            if (feedCount >= maxFeed) {
                showNotification("You don't have enough food!");
                updatePetMessage('No more food for now!');
                return;
            }
            setPetStats((prev) => ({
                ...prev,
                hunger: clampValue(prev.hunger + 10),
                energy: clampValue(prev.energy + 3),
                happiness: clampValue(prev.happiness + 1),
            }));
            setFeedCount(feedCount + 1);
            showNotification('Ymm!');
            updatePetMessage("I'm full now!");
        } else if (type === 'play') {
            setPetStats((prev) => ({
                ...prev,
                happiness: clampValue(prev.happiness + 15),
                energy: clampValue(prev.energy - 10),
                hunger: clampValue(prev.hunger - 5),
            }));
            showNotification('Hooray!');
            updatePetMessage("Let's play together!");
        } else if (type === 'clean') {
            showNotification('Nice!');
            updatePetMessage("I'm clean!");
        } else if (type === 'rest') {
            if (cooldown) {
                showNotification('Resting... Please wait!');
                return;
            }
            setCooldown(true);
            setDisplayedPet('😴'); // ← 여기서 이모지 바꿈

            setPetStats((prev) => ({
                ...prev,
                energy: clampValue(prev.energy + 20),
                hunger: clampValue(prev.hunger - 5),
            }));
            updatePetMessage('Zzz...');
            showNotification('Resting...');

            setTimeout(() => {
                setDisplayedPet(selectedPet); // ← 다시 원래 이모지로
                setCooldown(false);
                showNotification('You can rest again!');
            }, 10000);
        }
    }

    function updatePetMessage(message) {
        const petMessage = document.getElementById('pet-message');
        if (petMessage) petMessage.textContent = message;
    }

    const onCloseModal = () => {
        if (activeTab) {
            setActiveTab('kpop');
        }
        setIsOpenModal(false);
        navigate('/');
    };

    return (
        <div className="pet-container">
            <header>
                <h1>Your Onl!ne Pet</h1>
                <p className="subtitle">Have fun and take care of your pet!</p>
            </header>

            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="pet">
                    Choose your pet:
                    <br />
                </label>
                <select id="pet" value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
                    <option value="🐰">🐰</option>
                    <option value="🐱">🐱</option>
                    <option value="🐶">🐶</option>
                    <option value="🐹">🐹</option>
                    <option value="🐯">🐯</option>
                </select>
            </form>

            <div className="pet-display">
                <div className="pet-circle">
                    <div className="pet">{displayedPet}</div>
                </div>

                <div className="pet-stats">
                    {['hunger', 'happiness', 'energy'].map((stat) => (
                        <React.Fragment key={stat}>
                            <div className="stat">
                                <div className="stat-name">
                                    <i
                                        className={`fas fa-${
                                            stat === 'hunger' ? 'utensils' : stat === 'happiness' ? 'smile' : 'bolt'
                                        }`}
                                    ></i>
                                    <span>{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                                </div>
                                <div className="stat-value">{Math.round(petStats[stat])}</div>
                            </div>
                            <div className="progress-container">
                                <div
                                    className={`progress-bar ${stat}-bar`}
                                    style={{ width: `${petStats[stat]}%` }}
                                ></div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="pet-actions">
                <h3 className="action-title">Pet care</h3>
                <p className="action-description">
                    Interact with your pet to improve its status values. Each day you log in, you can get extra rewards!
                </p>

                <div className="action-buttons">
                    <button className="action-btn" onClick={() => handleAction('feed')}>
                        <i className="fas fa-utensils"></i>
                        <span> Feed (+10)</span>
                    </button>
                    <button className="action-btn" onClick={() => handleAction('play')}>
                        <i className="fas fa-gamepad"></i>
                        <span> Play (+15)</span>
                    </button>
                    <button className="action-btn" onClick={() => handleAction('clean')}>
                        <i className="fas fa-bath"></i>
                        <span> Clean (+5)</span>
                    </button>
                    <button className="action-btn" onClick={() => handleAction('rest')}>
                        <i className="fas fa-bed"></i>
                        <span> Rest (+20)</span>
                    </button>
                </div>

                <div className="status-container">
                    <h4 className="status-title">Status</h4>
                    <div className="status-item">
                        <i className="fas fa-heart heart"></i>
                        <span id="mood-text">
                            {petStats.happiness >= 90
                                ? 'Your pet is very happy today!'
                                : petStats.happiness >= 70
                                ? 'Your pet is feeling good!'
                                : petStats.happiness >= 50
                                ? 'Your pet is okay, but could use some attention.'
                                : 'Your pet is sad, please take care of it!'}
                        </span>
                    </div>
                    <div className="status-item">
                        <i className="fas fa-star login-streak"></i>
                        <span>
                            Login days: <span id="login-streak">{petStats.loginStreak}</span> days
                        </span>
                    </div>
                    <div className="pet-message" id="pet-message">
                        Welcome back!
                    </div>
                </div>
            </div>

            <div className="notification" id="notification">
                Success!
            </div>
            {isOpenModal && <Modal isOpen={isOpenModal} onClose={onCloseModal} />}
        </div>
    );
}
