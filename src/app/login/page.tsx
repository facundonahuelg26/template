'use client'
import { GoogleButton } from '@/components/login'
import { BasicToast, PasswordField } from '@/components/ui'
import { useLogin } from '@/features/auth/login/use-login'
import { ROUTES } from '@/features/navigation/navigation-routes'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import Link from 'next/link'
import { Card, CardBody } from '@nextui-org/card'
import BasicFormField from '@/components/ui/basic-form-field'
import { ALERTS_COLOR } from '@/components/ui/alerts-color'

const Login = () => {
  const { onSubmit, handleSubmit, control } = useLogin()

  return (
    <div className='pt-20 flex justify-center items-center'>
      <BasicToast
        bgColor={ALERTS_COLOR.BG_ERROR}
        color={ALERTS_COLOR.COLOR_ERROR}
      />
      <Card
        className='bg-[transparent] border-0 sm:border-2 sm:border-gray-600'
        shadow='sm'
      >
        <CardBody className='flex flex-col justify-center items-center  py-8 px-8'>
          <h1 className='py-2 text-4xl font-bold'>Hola, bienvenido</h1>
          <p className='py-2 font-normal dark:font-thin'>
            Ingresa los siguientes datos
          </p>
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
            <Link
              href={ROUTES.forgotPassword.path}
              className='text-sm font-normal dark:font-thin'
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <div className='py-4'>
              <Button
                radius='full'
                color='secondary'
                className='w-full'
                type='submit'
              >
                Iniciar sesión
              </Button>
            </div>
            <div className='w-full flex justify-center items-center'>
              <Divider className='flex-1' />
              <p className='mx-2 text-sm font-normal dark:font-thin'>
                O continuar con
              </p>
              <Divider className='flex-1' />
            </div>
            <div className='py-4'>
              <GoogleButton />
            </div>
            <Link
              href={ROUTES.register.path}
              // className={`text-sm ${fontWeight}`}
              className='text-sm font-normal dark:font-thin'
            >
              ¿No estás registrado?
            </Link>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default Login
