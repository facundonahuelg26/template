import Google from '@/components/icons/google'
import { iconClasses } from '@/components/icons/style'
import { Button } from '@nextui-org/button'
import { signIn } from 'next-auth/react'

const GoogleButton = () => {
  return (
    <Button
      radius='full'
      color='default'
      variant='bordered'
      className='w-full'
      startContent={<Google className={iconClasses} />}
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
    >
      Google
    </Button>
  )
}

export default GoogleButton
