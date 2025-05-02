import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    display: 'swap',
});

export const metadata = {
    title: 'Soohyun (Sean) Lee | Portfolio',
    description: 'Personal website of Soohyun (Sean) Lee, featuring projects in AI and machine learning.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
} 