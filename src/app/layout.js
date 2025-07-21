import './globals.css'

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
            <body>{children}</body>
        </html>
    )
}
