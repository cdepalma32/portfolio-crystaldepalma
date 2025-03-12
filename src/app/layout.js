import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crystal DePalma | Full-Stack Engineer',
  description:
    'Portfolio of Crystal DePalma, a Full-Stack Engineer specializing in modern web technologies'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}