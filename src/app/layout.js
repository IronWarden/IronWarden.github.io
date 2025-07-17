import './globals.css'

export const metadata = {
    title: 'Rishi Gadhia \'s Portfolio',
    description: '',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="solarized_light">
            <head>
            </head>
            <body>{children}</body>
        </html>
    )
}
