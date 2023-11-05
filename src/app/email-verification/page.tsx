import { ROUTES } from '@/features/navigation/navigation-routes'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { Card, CardBody } from '@nextui-org/card'
import Verified from '@/components/icons/verified'
import { verifiedIcon } from '@/components/icons/style'
const EmailVerification = () => {
  return (
    <div className='pt-20 flex justify-center items-center'>
      <Card
        className='bg-[transparent] border-0 sm:border-2 sm:border-gray-600'
        shadow='sm'
      >
        <CardBody className='flex flex-col justify-center items-center  py-8 px-8'>
          <h1 className='py-2 text-3xl text-center sm:text-4xl font-bold'>
            Te registraste con exito
          </h1>
          <p className='py-2'>¡Nos alegra que confies en nosotros!</p>
          <div className='w-[320px] sm:w-[340px]'>
            <div className='py-4 flex justify-center'>
              <Verified className={verifiedIcon} width='70' height='70' />
            </div>
            <div className='py-4'>
              <Button
                radius='full'
                color='secondary'
                className='w-full'
                as={Link}
                href={ROUTES.login.path}
              >
                Iniciar sesión
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default EmailVerification
