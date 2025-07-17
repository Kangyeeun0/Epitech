import React, { useState } from 'react';
import './info.css';

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
        imgUrl: '/picture/bts.jpeg',
    },
    {
        id: 3,
        name: 'TWICE',
        type: 'Girl Group',
        members: ['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu'],
        description:
            'A nine-member girl group under JYP Entertainment, famous for their cute concepts and addictive songs.',
        imgUrl: '/picture/twice.jpg',
    },
    {
        id: 4,
        name: 'AESPA',
        type: 'Girl Group',
        members: ['Karina', 'Winter', 'NingNing', 'Giselle'],
        description:
            'K-pop girl group with metaverse concept, blending members and virtual avatars.',
        imgUrl: `/picture/aespa.jpg`, 
    },
    {
        id: 5,
        name: 'SEVENTEEN',
        type: 'Boy Group',
        members: ['S.Coups', 'Jeonghan', 'Joshua', 'Jun', 'Hoshi', 'Wonwoo', 'Woozi', 'DK', 'Mingyu', 'The8', 'Seungkwan', 'Vernon', 'Dino'],
        description:
            ' 13-member self-producing boy band, known for co-ed units and sharp choreography.',
        imgUrl: `/picture/svt.jpeg`, 
    },
     {
        id: 6,
        name: 'Tomorrow X Together ',
        type: 'Boy Group',
        members: ['SooBin', 'YeonJun', 'BeomGyu', 'TaeHyun', 'HueningKai'],
        description:
        'Youthful K-pop boy group, music focusing on teen emotions and dreams.',
        imgUrl: `/picture/txt.JPG`, 
    },
     {
        id: 7,
        name: 'EXO',
        type: 'Boy Group',
        members: ['Xiumin', 'Suho', 'Lay', 'Baekhyun', 'Chen', 'Chanyeol', 'D.O.', 'Kai', 'Sehun'],
        description:
            ' Influential K-pop group with unique concepts and multi-genre hits.',  
         imgUrl: `/picture/exo.jpeg`, 
    },
   {
        id: 8,
        name: 'red velvet',
        type: 'Girl Group',
        members: ['Seulgi', 'Irene', 'Wendy', 'Joy', 'Yeri'],
        description:
            'K-pop girl group with dual "red" and "velvet" musical styles.Known for diverse concepts and strong vocals.   ',
        imgUrl: `/picture/redvelvet.jpg`, 
    },
     {
        id: 9,
        name: 'riize',
        type: 'Boy Group',
        members: ['Shotaro', 'Sungchan', 'Eunseok', 'Seunghan', 'Wonbin', 'Dongheon'],
        description:
            ' Fresh K-pop boy group blending pop and R&B, known for dynamic performances.',
        imgUrl: `/picture/riize.jpeg`, 
    },

];

const KpopInfo = () => {
    const [activeFilter, setAsctiveFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // 필터 버튼 클릭 핸들러
    const handleFilterClick = (filter) => {
        setAsctiveFilter(filter);
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
                                {group.name === 'BTS' && (
                                    <button
                                        onClick={() => window.open('https://ibighit.com/bts/eng/profile/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit BTS Official Site
                                    </button>
                                )}
                                {group.name === 'BLACKPINK' && (
                                    <button
                                        onClick={() => window.open('https://www.blackpinkofficial.com/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit BLACKPINK Official Site
                                    </button>
                                )}
                                {group.name === 'TWICE' && (
                                    <button
                                        onClick={() => window.open('https://twice.jype.com/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit TWICE Official Site
                                    </button>       )}
                                {group.name === 'AESPA' && (
                                    <button
                                        onClick={() => window.open('https://www.aespa.com/', '_blank')}   
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit AESPA Official Site
                                    </button>
                                )}
                                {group.name === 'SEVENTEEN' && (
                                    <button         
                                        onClick={() => window.open('https://www.seventeen-17.com/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit SEVENTEEN Official Site
                                    </button>
                                )}
                                {group.name === 'Tomorrow X Together ' && (
                                    <button
                                        onClick={() => window.open('https://ibighit.com/txt/eng/profile/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit Tomorrow X Together Official Site
                                    </button>
                                )}
                                {group.name === 'EXO' && (
                                    <button
                                        onClick={() => window.open('https://exo-jp.net/en/profile/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit EXO Official Site
                                    </button>
                                )}
                                {group.name === 'red velvet' && (
                                    <button
                                        onClick={() => window.open('https://redvelvet-jp.net/zh-CHS/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit red velvet Official Site
                                    </button>
                                )}
                                {group.name === 'riize' && (
                                    <button
                                        onClick={() => window.open('https://riizeofficial.jp/', '_blank')}
                                        style={{ marginTop: '8px' }}
                                    >
                                        Visit riize Official Site
                                    </button>
                                )}  
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
export default KpopInfo;
