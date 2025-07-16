import React, { useState, useEffect } from 'react';

export default function Epet() {
    const [feedback, setFeedback] = useState(null);
    const [scale, setScale] = useState(1);

    const handleAction = (action) => {
        setScale(1.1);
        setFeedback(`You just ${action} your pet!`);

        setTimeout(() => setScale(0.9), 300);
        setTimeout(() => setFeedback(null), 2000);
    };

    return (
        <div id="epet" className="tab-content">
            <div className="pet-container">
                <div className="pet-display">
                    <div className="pet-circle">
                        <div className="pet" style={{ transform: `scale(${scale})` }}>
                            🐰
                        </div>
                    </div>
                    {/* ... 상태 표시 ... */}
                </div>

                <div className="pet-actions">
                    {/* ... 제목 및 설명 ... */}
                    <div className="action-buttons">
                        {['Feed', 'Play', 'Clean', 'Rest'].map((action) => (
                            <button key={action} className="action-btn" onClick={() => handleAction(action)}>
                                <i
                                    className={`fas fa-${
                                        {
                                            Feed: 'utensils',
                                            Play: 'gamepad',
                                            Clean: 'bath',
                                            Rest: 'bed',
                                        }[action]
                                    }`}
                                ></i>
                                <span>{action}</span>
                            </button>
                        ))}
                    </div>

                    {feedback && (
                        <div
                            style={{
                                position: 'fixed',
                                bottom: 20,
                                right: 20,
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: 5,
                                zIndex: 1000,
                            }}
                        >
                            {feedback}
                        </div>
                    )}

                    {/* ... Pet Status ... */}
                </div>
            </div>
        </div>
    );
}
