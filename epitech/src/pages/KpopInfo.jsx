import React, { useState } from 'react';

export default function KpopInfo() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Girl Groups', 'Boy Groups', 'Popular'];

    return (
        <div id="kpop" className="tab-content active">
            <div className="search-container">
                <div className="search-box">
                    <input type="text" placeholder="Search for your favorite K-pop group..." />
                    <button>Search</button>
                </div>
                <div className="filter-btns">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* 그룹 카드 리스트는 activeFilter와 검색어 조건에 따라 필터링 가능 */}
        </div>
    );
}
