'use client';

import { useEffect } from 'react';

export default function TalismanVentures() {
    // Simple fade-in animation
    useEffect(() => {
        document.body.style.opacity = 0;
        setTimeout(() => {
            document.body.style.transition = 'opacity 1s ease';
            document.body.style.opacity = 1;
        }, 100);
    }, []);

    return (
        <div className="main-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Inter, sans-serif', marginBottom: '10px' }}>
                est. dec. 2024, building high quality consumer applications with ai.
            </p>
            <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Inter, sans-serif' }}>
                shipped 4+ iOS apps by may 2025. gross $100k+ revenue, 1x acq.
            </p>
        </div>
    );
} 