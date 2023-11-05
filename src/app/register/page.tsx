'use client'
import { GoogleButton } from '@/components/login'
import { BasicFormField, PasswordField } from '@/components/ui'
import { useLogin } from '@/features/auth/login/use-login'
import { ROUTES } from '@/features/navigation/navigation-routes'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { Card, CardBody } from '@nextui-org/card'
import { useTheme } from 'next-themes'
const Register = () => {
  const { onSubmit, handleSubmit, control, isValid } = useLogin()
  const { theme } = useTheme()
  const fontWeight = theme === 'light' ? 'font-light' : 'font-thin'
  return (
    <div className='pt-20 flex justify-center items-center'>
      <Card
        className='bg-[transparent] border-0 sm:border-2 sm:border-gray-600'
        shadow='sm'
      >
        <CardBody className='flex flex-col justify-center items-center  py-8 px-8'>
          <h1 className='py-2 text-4xl font-bold'>Crear cuenta</h1>
          <p className={`py-2 ${fontWeight}`}>Ingresa los siguientes datos</p>
          <form
            className='w-[320px] sm:w-[340px]'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='h-[86px] pt-4'>
              <BasicFormField name='email' control={control} />
            </div>
            <div className='py-4'>
              <PasswordField name='password' control={control} />
            </div>
            <div className='py-4'>
              <PasswordField name='confirmPassword' control={control} />
            </div>
            <Link
              href={ROUTES.forgotPassword.path}
              className={`text-sm ${fontWeight}`}
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <div className='py-4'>
              <Button radius='full' color='secondary' className='w-full'>
                Registrarme
              </Button>
            </div>
            <Link href={ROUTES.login.path} className={`text-sm ${fontWeight}`}>
              ¡Ya tengo una cuenta!
            </Link>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Register
