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
                        desc: 'Our Korean culture expert with an innate understanding of K-pop trends and industry insights.',
                        tags: ['Software'],
                    },
                    {
                        name: 'Zhang Xiaolei（张小蕾）',
                        dob: 'January 14, 2002',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/张小蕾.jpg',
                        desc: 'Our web developer who ensures our platform runs smoothly with the latest technology.',
                        tags: ['hydraulic structure', 'dancer'],
                    },
                    {
                        name: 'Yu Lingge（余凌歌）',
                        dob: 'September 14, 2005',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/余凌歌.jpg',
                        desc: 'Our creative content creator who brings K-pop stories to life through engaging articles and visuals.',
                        tags: ['electronic engineering'],
                    },
                    {
                        name: 'Zhang Weichen（张炜晨）',
                        dob: 'January 11, 2006',
                        origin: 'China',
                        originClass: 'china',
                        img: '/picture/张炜晨.jpg',
                        desc: 'Our community manager who connects with fans and keeps our community vibrant and engaged.',
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

            <footer>
                <p>Connect with us on social media for the latest K-pop updates!</p>
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
                <p style={{ marginTop: '20px', color: '#ffb6c1' }}>&copy; 2025 KPOP FUSION. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
