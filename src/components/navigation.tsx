'use client'
import NextLink from 'next/link'
import { Link } from '@nextui-org/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle
} from '@nextui-org/navbar'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown'
import { Avatar } from '@nextui-org/avatar'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { useToggle } from '@/features/ui/toggle'
import Event from '@/components/icons/event'
import HappyFace from '@/components/icons/happy-face'
import { iconClasses, mainIcon } from '@/components/icons/style'
const Navigation = () => {
  const { toggle, handleToggle } = useToggle()

  return (
    <Navbar
      isMenuOpen={toggle.menuBtn}
      onMenuOpenChange={() => handleToggle('menuBtn')}
      className='[&>*:nth-child(1)]:max-w-[100%]'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={toggle.menuBtn ? 'Close menu' : 'Open menu'}
          className='xl:hidden'
        />
        <NavbarBrand className='flex items-end'>
          <div className='hidden xl:block'>
            <HappyFace className={iconClasses} />
          </div>
          <div className='pl-2 flex items-end'>
            <Event className={mainIcon} />

            <span className='font-bold text-inherit text-xl'>Tu cita</span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as='div' justify='end'>
        <ThemeSwitcher />
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='secondary'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem key='profile' className='h-14 gap-2'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key='settings'>
              <Link
                href='/profile'
                color='foreground'
                className='w-full p-2 flex-row-reverse justify-end'
                as={NextLink}
              >
                <span>Perfil</span>
              </Link>
            </DropdownItem>
            <DropdownItem key='team_settings'>Team Settings</DropdownItem>
            <DropdownItem key='analytics'>Analytics</DropdownItem>
            <DropdownItem key='logout' color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
