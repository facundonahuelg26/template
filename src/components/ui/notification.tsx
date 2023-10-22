'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Cancel from '@/components/icons/cancel'
import CheckCircle from '@/components/icons/check-circle'
import Info from '@/components/icons/info'
import Warning from '@/components/icons/warning'

type Props = {
  color: string
  position: 'top-center' | 'bottom-center'
  icon?: ReactNode
  message: string
}

const enum COLOR_TYPES {
  SUCCESS = 'success',
  DANGER = 'danger',
  INFO = 'info',
  WARNING = 'warning'
}
const Notification: FC<Props> = ({ color, position, icon, message }) => {
  const [isVisible, setIsVisible] = useState(true)
  const ALERT_COLOR: { [key: string]: string } = {
    danger:
      'flex items-center bg-[#f31260] bg-opacity-20 text-[#E43E78] px-4 py-2 rounded-full shadow',
    success:
      'flex items-center bg-[#2bbb48] bg-opacity-20 text-[#18C964] px-4 py-2 rounded-full shadow',
    info: 'flex items-center bg-[#2cc0ff] bg-opacity-20 text-[#43A7DD] px-4 py-2 rounded-full shadow',
    warning:
      'flex items-center bg-[#ffd321] bg-opacity-20 text-[#DA9422] px-4 py-2 rounded-full shadow'
  }

  const ALERT_POSITION: { [key: string]: string } = {
    'top-center':
      'absolute m-auto left-0 right-0 z-10 flex items-start justify-center',
    'bottom-center':
      'absolute m-auto bottom-7 left-0 right-0 z-10 flex items-end justify-center'
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
      className={ALERT_POSITION[position]}
    >
      <div className={ALERT_COLOR[color]}>
        {color === COLOR_TYPES.SUCCESS && (
          <span className='mr-2'>
            <CheckCircle />
          </span>
        )}
        {color === COLOR_TYPES.DANGER && (
          <span className='mr-2'>
            <Cancel />
          </span>
        )}
        {color === COLOR_TYPES.INFO && (
          <span className='mr-2'>
            <Info />
          </span>
        )}
        {color === COLOR_TYPES.WARNING && (
          <span className='mr-2'>
            <Warning />
          </span>
        )}
        {icon && <span className='mr-2'>{icon}</span>}
        <span>{message}</span>
      </div>
    </motion.div>
  )
}

export default Notification
