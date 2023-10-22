import React, { createContext, useContext, useState } from 'react'

interface ToggleState {
  menuBtn: boolean
  otherBtn: boolean
  otherTwoBtn: boolean
}

interface ToggleContextProps {
  toggle: ToggleState
  handleToggle: (buttonName: keyof ToggleState) => void
}

const ToggleContext = createContext<ToggleContextProps | undefined>(undefined)

export const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<ToggleState>({
    menuBtn: false,
    otherBtn: false,
    otherTwoBtn: false
  })

  const handleToggle = (buttonName: keyof ToggleState) => {
    setToggle((prevToggle) => ({
      ...prevToggle,
      [buttonName]: !prevToggle[buttonName]
    }))
  }
  const value = { toggle, handleToggle }
  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  )
}

export const useToggle = (): ToggleContextProps => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggle debe ser usado dentro de un ToggleProvider')
  }
  return context
}
