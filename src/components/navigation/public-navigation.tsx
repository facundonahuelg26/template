'use client'
import { Navbar, NavbarContent } from '@nextui-org/navbar'
import { ROUTES } from '@/features/navigation/navigation-routes'
import { Button } from '@nextui-org/button'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
const PublicNavigation = () => {
  const pathname = usePathname()

  return (
    <Navbar
      // className={session ? 'hidden' : 'block'}
      className='[&>*:nth-child(1)]:max-w-[100%]'
    >
      <NavbarContent as='div' justify='end' className='w-full'>
        {pathname === ROUTES.main.path ? (
          <div className='flex items-center'>
            <div className='px-2'>
              <Button
                radius='full'
                color='default'
                variant='bordered'
                as={NextLink}
                href={ROUTES.login.path}
              >
                Iniciar sesión
              </Button>
            </div>
            <div className='px-2'>
              <Button
                radius='full'
                color='default'
                variant='bordered'
                as={NextLink}
                href={ROUTES.register.path}
              >
                Crear cuenta
              </Button>
            </div>
          </div>
        ) : (
          <Button
            radius='full'
            color='default'
            variant='bordered'
            as={NextLink}
            href={ROUTES.main.path}
          >
            Inicio
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  )
}

export default PublicNavigation
