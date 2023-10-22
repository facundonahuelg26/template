'use client'
import Notification from '@/components/ui/notification'
import { Button } from '@nextui-org/button'
import { useState } from 'react'

const Test = () => {
  const [active, setActive] = useState(false)
  return (
    <>
      {active && (
        <Notification
          color='success'
          position='top-center'
          //icon={<Cancel />}
          message='Exito al realizar la acción'
        />
      )}
      <div className='w-full flex items-center justify-end'>
        <h1>Test</h1>
        <Button
          color='secondary'
          variant='bordered'
          onClick={() => setActive(!active)}
        >
          Toggle
        </Button>
      </div>
    </>
  )
}

export default Test
