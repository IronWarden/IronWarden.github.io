import './globals.css'
import NavbarAndDarkMode from './components/NavbarAndDarkMode';

export const metadata = {
    title: 'Rishi Gadhia \'s Portfolio',
    description: '',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="solarized_light">
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body className="max-w-7xl mx-auto px-10 md:px-20 lg:px-40 font-hack">
                <NavbarAndDarkMode />
                {children}
                <footer className="footer footer-center p-4 bg-base-100 text-base-content">
                    <div>
                        <p>Copyright © 2025 - All right reserved by Rishi Gadhia</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
