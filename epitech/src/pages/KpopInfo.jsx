import React, { useState } from 'react';

const groupsData = [
    {
        id: 1,
        name: 'BLACKPINK',
        type: 'Girl Group',
        members: ['Jisoo', 'Jennie', 'Rosé', 'Lisa'],
        description:
            'A four-member girl group under YG Entertainment, known for their powerful stage presence and global popularity.',
        imgUrl: `/picture/blackpink.jpeg`,
    },
    {
        id: 2,
        name: 'BTS',
        type: 'Boy Group',
        members: ['RM', 'Jin', 'Suga', 'J-Hope', 'Jimin', 'V', 'Jungkook'],
        description:
            'A seven-member boy group under Big Hit Entertainment with massive global influence, spreading positive messages through their music.',
        imgUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    },
    {
        id: 3,
        name: 'TWICE',
        type: 'Girl Group',
        members: ['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu'],
        description:
            'A nine-member girl group under JYP Entertainment, famous for their cute concepts and addictive songs.',
        imgUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
    },
];

const KpopInfo = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // 필터 버튼 클릭 핸들러
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // 검색어 입력 핸들러
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // 필터링된 그룹 리스트 계산
    const filteredGroups = groupsData.filter((group) => {
        // 필터 조건
        if (activeFilter !== 'All' && group.type !== activeFilter) return false;

        // 검색어 포함 여부 검사 (대소문자 구분 없음)
        if (!group.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;

        return true;
    });

    return (
        <div id="kpop" className="tab-content active">
            <div className="search-container">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search for your favorite K-pop group..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {/* 검색 버튼 눌러도 필터링은 실시간으로 되기 때문에 클릭 이벤트는 필요 없어요 */}
                    <button>Search</button>
                </div>
                <div className="filter-btns">
                    {['All', 'Girl Group', 'Boy Group'].map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="groups-container">
                {filteredGroups.length === 0 ? (
                    <p>No groups found.</p>
                ) : (
                    filteredGroups.map((group) => (
                        <div key={group.id} className="group-card">
                            <div className="group-img" style={{ backgroundImage: `url(${group.imgUrl})` }}></div>
                            <div className="group-info">
                                <h3>{group.name}</h3>
                                <span className={`group-type ${group.type === 'Girl Group' ? 'female' : 'male'}`}>
                                    {group.type}
                                </span>
                                <p className="group-members">Members: {group.members.join(', ')}</p>
                                <p>{group.description}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default KpopInfo;
