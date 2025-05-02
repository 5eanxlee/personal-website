'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
    // Simple fade-in animation from the original site
    useEffect(() => {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = 1;
        }, 100);
    }, []);

    return (
        <div className="main-container">
            {/* Hero Image */}
            <div className="hero-container">
                <div className="image-wrapper">
                    <Image
                        src="/sto.jpg"
                        alt="Cover Image"
                        className="hero-image"
                        width={600}
                        height={450}
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
                    />
                </div>
            </div>

            {/* Info and Links */}
            <div className="info-container">
                {/* Personal Info */}
                <div className="personal-info">
                    <h1 className="name">Soohyun (Sean) Lee</h1>
                    <p className="location">Irvine, CA</p>
                    <p className="email">sseanxlee@gmail.com</p>
                </div>

                {/* Links Sections */}
                <div className="links-container">
                    {/* Projects */}
                    <div className="links-section projects-section">
                        <h2 className="links-title">PROJECTS</h2>
                        <ul className="links-list">
                            <li><a href="#">Talisman Studio</a></li>
                            <li><a href="#">Ferrari vs. Lamborghini Price Prediction</a></li>
                            <li><a href="#">Quantum State Transfer</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="links-section connect-section">
                        <h2 className="links-title">CONNECT</h2>
                        <ul className="links-list">
                            <li><a href="https://www.linkedin.com/in/soohyun-sean-lee-ab774126b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://x.com/5eanxlee_" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="mailto:sseanxlee@gmail.com">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 