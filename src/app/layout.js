import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rishi Gadhia\'s Portfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="nord">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
