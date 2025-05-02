'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                <Image
                    src="/sto.jpg"
                    alt="Cover Image"
                    className="hero-image"
                    width={800}
                    height={600}
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
                />
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
                            <li><Link href="/projects/swoleai">SwoleAI</Link></li>
                            <li><Link href="/projects/askai">Ask AI</Link></li>
                            <li><Link href="/projects/skinvision">SkinVision</Link></li>
                            <li><Link href="/projects/mathai">Math AI</Link></li>
                            <li><Link href="/projects/ferrari-lamborghini">Ferrari vs. Lamborghini Price Prediction</Link></li>
                            <li><Link href="/projects/quantum-state-transfer">Quantum State Transfer</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="links-section connect-section">
                        <h2 className="links-title">CONNECT</h2>
                        <ul className="links-list">
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 