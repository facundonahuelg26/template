'use client'
import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ToggleProvider } from '@/features/ui/toggle'
import { SessionProvider } from 'next-auth/react'
type Props = {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          <SessionProvider>
            <ToggleProvider>{children}</ToggleProvider>
          </SessionProvider>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
