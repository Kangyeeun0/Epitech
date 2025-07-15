import React from 'react';

const HeroSection = () => (
    <section className="hero">
        <h2>Welcome to K-Pop Fan Community</h2>
        <p>Discover your favorite K-pop groups, raise your own e-pet, and exchange merchandise with other fans</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn btn-primary">Explore Now</button>
            <button className="btn btn-outline">Learn More</button>
        </div>
    </section>
);

export default HeroSection;
