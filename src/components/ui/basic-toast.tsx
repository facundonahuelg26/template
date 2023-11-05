import { FC } from 'react'
import { Toaster } from 'sonner'

interface ToastProps {
  bgColor?: string
  color?: string
}
const BasicToast: FC<ToastProps> = ({ bgColor, color }) => {
  return (
    <Toaster
      position='top-center'
      richColors
      theme='system'
      toastOptions={{
        style: {
          background: bgColor,
          color,
          borderRadius: '16px',
          height: 'auto',
          padding: '8px 16px',
          border: 'none'
        }
      }}
    />
  )
}

export default BasicToast
