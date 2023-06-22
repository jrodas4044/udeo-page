import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Universidad De Occidente - Extensión Antonio Beristain',
  description: 'Facultad de Ciencias Forenses e Investigación Criminal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        {children}

        <Footer/>
      </body>
    </html>
  )
}
