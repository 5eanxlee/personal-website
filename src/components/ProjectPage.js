'use client';

import Link from 'next/link';

export default function ProjectPage({ projectName }) {
    return (
        <div className="project-page">
            <div className="project-container">
                <h1>{projectName}</h1>
                <p className="placeholder-text">Project details coming soon</p>
                <div className="back-link">
                    <Link href="/">← Back to home</Link>
                </div>
            </div>
            <style jsx global>{`
        .project-page {
          padding: 40px 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .project-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .placeholder-text {
          color: #666;
        }
        .back-link {
          margin-top: 30px;
        }
        .back-link a {
          color: var(--link-color);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .back-link a:hover {
          color: var(--link-hover);
        }
      `}</style>
        </div>
    );
} 