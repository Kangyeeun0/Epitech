import React from 'react';

export default function Epet() {
    console.log('..');
    return (
        <div id="epet">
            <div className="pet-container">
                <div className="pet-display">
                    <div className="pet-circle">
                        <div className="pet" style={{ fontSize: '4rem' }}>
                            🐰
                        </div>
                    </div>
                    <div className="pet-stats">
                        <div className="stat">
                            <div className="stat-name">Hunger</div>
                            <div className="stat-value">75%</div>
                        </div>
                        <div className="stat">
                            <div className="stat-name">Happiness</div>
                            <div className="stat-value">90%</div>
                        </div>
                        <div className="stat">
                            <div className="stat-name">Energy</div>
                            <div className="stat-value">60%</div>
                        </div>
                    </div>
                </div>

                <div className="pet-actions">
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                        Take Care of Your Pet
                    </h3>
                    <p style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                        Interact with your pet to increase its stats. Log in daily for extra rewards!
                    </p>

                    <div className="action-buttons">
                        <button className="action-btn">
                            <i className="fas fa-utensils"></i>
                            <span>Feed</span>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-gamepad"></i>
                            <span>Play</span>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-bath"></i>
                            <span>Clean</span>
                        </button>
                        <button className="action-btn">
                            <i className="fas fa-bed"></i>
                            <span>Rest</span>
                        </button>
                    </div>

                    <div
                        style={{
                            marginTop: '2rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '1.5rem',
                            borderRadius: '10px',
                        }}
                    >
                        <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Pet Status</h4>
                        <p>
                            <i className="fas fa-heart" style={{ color: 'var(--primary)', marginRight: '10px' }}></i>
                            Your pet is happy today!
                        </p>
                        <p>
                            <i className="fas fa-star" style={{ color: 'gold', marginRight: '10px' }}></i>
                            Login Streak: 5 days
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
