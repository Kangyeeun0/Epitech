import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './aboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.member-card').forEach((card) => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container">
            <header>
                <h1>ABOUT OUR TEAM</h1>
                <p className="subtitle">
                    We are a passionate team of K-pop enthusiasts dedicated to bringing you the latest news, music, and
                    insights from the vibrant world of Korean pop culture.
                </p>
            </header>

            <section className="team-section">
                {[
                    {
                        name: 'Kang Yeeun (강예은)',
                        dob: 'March 2, 2002',
                        origin: 'South Korea',
                        originClass: 'korea',
                        img: '/picture/강예은.jpg',
                        desc: 'A web developer who implements login capabilities and combines and manages detailed capabilities',
                        tags: ['Software'],
                    },
                    {
                        name: 'Zhang Xiaolei（张小蕾）',
                        dob: 'January 14, 2002',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/张小蕾.jpg',
                        desc: 'a web developer who developed the aboutUs page',
                        tags: ['hydraulic structure', 'dancer'],
                    },
                    {
                        name: 'Yu Lingge（余凌歌）',
                        dob: 'September 14, 2005',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/余凌歌.jpg',
                        desc: 'A web developer who developed the kpopinfo page',
                        tags: ['electronic engineering'],
                    },
                    {
                        name: 'Zhang Weichen（张炜晨）',
                        dob: 'January 11, 2006',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/张炜晨.jpg',
                        desc: 'web developer who developed epet and merchandise pages.',
                        tags: ['Statistics'],
                    },
                ].map((member, idx) => (
                    <div className="member-card" key={idx}>
                        <div className="photo-container">
                            <div className="photo-placeholder">
                                <img src={member.img} alt={member.name} style={{ width: '200px', height: '270px' }} />
                            </div>
                        </div>
                        <div className="info">
                            <h2 className="name">{member.name}</h2>
                            <div className="details">
                                <span>
                                    <i className="fas fa-birthday-cake"></i> {member.dob}
                                </span>
                                <span>
                                    <i className="fas fa-map-marker-alt"></i> Born in{' '}
                                    <span className={`country ${member.originClass}`}>{member.origin}</span>
                                </span>
                            </div>
                            <p>{member.desc}</p>
                            <div className="tags">
                                {member.tags.map((tag, i) => (
                                    <span className="tag" key={i}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default AboutUs;
