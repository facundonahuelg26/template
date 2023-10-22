'use client'

import DarkMode from '@/components/icons/dark-mode'
import LightMode from '@/components/icons/light-mode'
import { iconClasses } from '@/components/icons/style'
import { Button } from '@nextui-org/button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {theme === 'light' ? (
        <Button
          variant='bordered'
          color='secondary'
          radius='full'
          isIconOnly
          onClick={() => setTheme('dark')}
        >
          <DarkMode className={iconClasses} />
        </Button>
      ) : (
        <Button
          variant='bordered'
          color='secondary'
          radius='full'
          isIconOnly
          onClick={() => setTheme('light')}
        >
          <LightMode className={iconClasses} />
        </Button>
      )}
    </div>
  )
}
