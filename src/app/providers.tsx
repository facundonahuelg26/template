'use client'
import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ToggleProvider } from '@/features/ui/toggle'
// import { ProtectedRoutes } from '@/features/ui/navigation/protected-routes'
type Props = {
  children: ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          {/* <ProtectedRoutes> */}
          <ToggleProvider>{children}</ToggleProvider>
          {/* </ProtectedRoutes> */}
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}
