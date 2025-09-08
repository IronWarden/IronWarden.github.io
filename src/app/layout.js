import './globals.css'
import NavbarAndDarkMode from './components/NavbarAndDarkMode';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Providers } from './providers';
import { Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Rishi Gadhia\'s Portfolio',
    description: '',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body className={`${firaSans.className} max-w-7xl mx-auto px-[6vw]`}>
                <Providers>
                    <NavbarAndDarkMode />
                    {children}
                    <ScrollToTopButton />
                    <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                        <div>
                            <p>Copyright © 2025 - All rights reserved by Rishi Gadhia</p>
                        </div>
                    </footer>
                </Providers>
            </body>
        </html>
    )
}
