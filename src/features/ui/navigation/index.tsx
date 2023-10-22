import Acme from '@/components/icons/acme'
import Home from '@/components/icons/home'
import { ROUTES } from '@/features/ui/navigation/navigation-routes'
import { ReactNode } from 'react'
import { iconClasses } from '@/components/icons/style'
import Timeline from '@/components/icons/timeline'
import AdminPanel from '@/components/icons/admin-panel'
import UserGroup from '@/components/icons/user-group'
import Contacts from '@/components/icons/contacts'

export interface NavigationTypes {
  key: string
  label: string
  href: string
  icon: ReactNode
}

export const PROPS_NAVIGATION: NavigationTypes[] = [
  {
    key: ROUTES.main.name,
    label: ROUTES.main.name,
    href: ROUTES.main.path,
    icon: <Home className={iconClasses} />
  },
  {
    key: ROUTES.activity.name,
    label: ROUTES.activity.name,
    href: ROUTES.activity.path,
    icon: <Timeline className={iconClasses} />
  },
  {
    key: ROUTES.clients.name,
    label: ROUTES.clients.name,
    href: ROUTES.clients.path,
    icon: <Contacts className={iconClasses} />
  },
  {
    key: ROUTES.professionals.name,
    label: ROUTES.professionals.name,
    href: ROUTES.professionals.path,
    icon: <UserGroup className={iconClasses} />
  },
  {
    key: ROUTES.administration.name,
    label: ROUTES.administration.name,
    href: ROUTES.administration.path,
    icon: <AdminPanel className={iconClasses} />
  }
]
