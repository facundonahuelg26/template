import Providers from '@/app/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Drawer from '@/components/drawer'
import Navigation from '@/components/navigation'
import { redirect } from 'next/navigation'
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  style: ['normal']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const session = false
  if (!session) {
    redirect('/dashboard')
  }
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={roboto.className}>
        <Providers>
          {session && (
            <>
              <Navigation />
              <Drawer />
            </>
          )}
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
