import './globals.css'
import NavbarAndDarkMode from './components/NavbarAndDarkMode';
import ScrollToTopButton from './components/ScrollToTopButton';
import SchemePicker from './components/SchemePicker';
import { Providers } from './providers';

export const metadata = {
    title: 'Rishi Gadhia\'s Portfolio',
    description: '',
    icons: {
        icon: '/icon.webp',
        shortcut: '/icon.webp',
        apple: '/icon.webp',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body className="font-mono max-w-5xl 2xl:max-w-7xl mx-auto px-[6vw]">
                <Providers>
                    <NavbarAndDarkMode />
                    {children}
                    <ScrollToTopButton />
                    <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-8 mt-10 border-t border-base-300 text-sm md:text-base">
                        <p className="opacity-50">© 2025 Rishi Gadhia</p>
                        <SchemePicker />
                    </footer>
                </Providers>
            </body>
        </html>
    )
}
