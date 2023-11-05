import Providers from '@/app/providers'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navigation from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal']
})

export const metadata: Metadata = {
  title: 'Tu cita',
  description: 'Conectate con profesionales'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={roboto.className}>
        <Providers>
          <Navigation />
          <main className='min-h-[calc(100vh-64px-68px)]'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
