import React, { useState } from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'kpop', label: 'K-pop Info' },
        { id: 'epet', label: 'E-Pet' },
        { id: 'market', label: 'Merchandise' },
    ];
    console.log(activeTab);
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    data-tab={tab.id}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
