
import React, { useState, useEffect } from 'react';
import './Epet.css';

const Epet = () => {
  const [currentPet, setCurrentPet] = useState('');
  const [selectedPet, setSelectedPet] = useState('🐰');
  const [feedCount, setFeedCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const maxFeed = 5;

  const [petStats, setPetStats] = useState({
    hunger: 75,
    happiness: 90,
    energy: 60,
    loginStreak: 5,
  });

  const handleSelect = () => {
    setCurrentPet(selectedPet);
  };

  const clampValue = value => Math.max(0, Math.min(100, value));

  const updateStats = (changes) => {
    setPetStats(prev => {
      const updated = {
        ...prev,
        ...changes,
      };
      return {
        ...updated,
        hunger: clampValue(updated.hunger),
        happiness: clampValue(updated.happiness),
        energy: clampValue(updated.energy),
      };
    });
  };

  const handleFeed = () => {
    if (feedCount >= maxFeed) {
      showNotification("You don't have enough food!");
      updatePetMessage('No more food for now!');
      return;
    }
    updateStats({
      hunger: petStats.hunger + 10,
      energy: petStats.energy + 3,
      happiness: petStats.happiness + 1,
    });
    setFeedCount(feedCount + 1);
    showNotification("Ymm!");
    updatePetMessage("I'm full now!");
    animatePet();
  };

 const handlePlay = () => {
  if (petStats.energy < 50) {
    showNotification("Not enough energy to play!");
    updatePetMessage("I'm too tired to play...");
    return; // 阻止后续执行
  }

  updateStats({
    happiness: petStats.happiness + 15,
    energy: petStats.energy - 10,
    hunger: petStats.hunger - 5,
  });
  showNotification("Hooray!");
  updatePetMessage("Let's play together!");
  animatePet(true);
};

  const handleClean = () => {
    showNotification("Nice!");
    updatePetMessage("I'm clean!");
    rotatePet();
  };

  const handleRest = () => {
    if (cooldown) {
      showNotification("Resting... Please wait!");
      return;
    }

    setCooldown(true);
    showNotification("Resting...");
    updateStats({
      energy: petStats.energy + 20,
      hunger: petStats.hunger - 5,
    });
    updatePetMessage("Zzz...");
    setCurrentPet('😴');

    setTimeout(() => {
      setCurrentPet(selectedPet);
    }, 10000);

    setTimeout(() => {
      setCooldown(false);
      showNotification("You can rest again!");
    }, 10000);
  };

  const showNotification = (message) => {
    const note = document.getElementById('notification');
    note.textContent = message;
    note.style.opacity = '1';
    note.style.top = '20px';
    setTimeout(() => {
      note.style.opacity = '0';
      note.style.top = '0px';
    }, 2000);
  };

  const updatePetMessage = (msg) => {
    const el = document.getElementById('pet-message');
    if (el) el.textContent = msg;
  };

  const animatePet = (play = false) => {
    const el = document.querySelector('.pet');
    if (play) {
      el.style.animation = 'none';
      setTimeout(() => {
        el.style.animation = 'float 3s infinite ease-in-out';
      }, 10);
    } else {
      el.style.transform = 'scale(1.2)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 300);
    }
  };

  const rotatePet = () => {
    const el = document.querySelector('.pet');
    el.style.transform = 'rotate(10deg)';
    setTimeout(() => (el.style.transform = 'rotate(-10deg)'), 150);
    setTimeout(() => (el.style.transform = 'rotate(0deg)'), 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateStats({
        hunger: petStats.hunger - 1,
        happiness: petStats.happiness - 0.5,
        energy: petStats.energy - 0.7,
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [petStats]);

  return (
    <div>
      <header>
        <h1>Your Onl!ne Pet</h1>
        <p className="subtitle">Have fun and take care of your pet!</p>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="pet">Choose your pet:</label><br />
        <select id="pet" value={selectedPet} onChange={(e) => setSelectedPet(e.target.value)}>
          <option value="🐰">🐰</option>
          <option value="🐱">🐱</option>
          <option value="🐶">🐶</option>
          <option value="🐹">🐹</option>
          <option value="🐯">🐯</option>
        </select>
        <button type="button" onClick={handleSelect}>Go</button>
      </form>

      <div className="pet-container">
        <div className="pet-display">
          <div className="pet-circle">
            <div className="pet">{currentPet}</div>
          </div>

          <div className="pet-stats">
            <StatBar name="Fullness" value={petStats.hunger} icon="fa-utensils" />
            <StatBar name="Happiness" value={petStats.happiness} icon="fa-smile" />
            <StatBar name="Energy" value={petStats.energy} icon="fa-bolt" />
          </div>

        </div>

        <div className="pet-actions">
          <h3 className="action-title">Pet care</h3>
          <p className="action-description">Interact with your pet to improve its status values. Each day you log in, you can get extra rewards!</p>

          <div className="action-buttons">
            <button className="action-btn" onClick={handleFeed}>🍽 Feed</button>
            <button className="action-btn" onClick={handlePlay}>🎮 Play</button>
            <button className="action-btn" onClick={handleClean}>🛁 Clean</button>
            <button className="action-btn" onClick={handleRest}>🛌 Rest</button>
          </div>

          <div className="status-container">
            <h4 className="status-title">Status</h4>
            <div className="status-item"><i className="fas fa-heart heart"></i> <span id="mood-text">Your pet is happy today!</span></div>
            <div className="status-item"><i className="fas fa-star login-streak"></i> <span>Login days: {petStats.loginStreak}</span></div>
            <div className="pet-message" id="pet-message">Welcome back!</div>
          </div>
        </div>
      </div>

      <div className="notification" id="notification">Success!</div>
    </div>
  );
};

const StatBar = ({ name, value, icon }) => (
  <>
    <div className="stat">
      <div className="stat-name">
        <i className={`fas ${icon}`}></i>
        <span>{name}</span>
      </div>
      <div className="stat-value">{Math.round(value)}%</div>
    </div>
    <div className="progress-container">
      <div className={`progress-bar ${name.toLowerCase()}-bar`} style={{ width: `${value}%` }}></div>
    </div>
  </>
);

export default Epet;
