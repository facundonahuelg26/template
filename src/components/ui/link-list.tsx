import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { Link } from '@nextui-org/link'
import NextLink from 'next/link'
import { FC } from 'react'
import { NavigationTypes } from '@/features/navigation'

interface Props {
  propsNavigation: NavigationTypes[]
}

const LinkList: FC<Props> = ({ propsNavigation = [] }) => {
  return (
    <Listbox
      variant='faded'
      aria-label='Listbox menu with icons'
      className='w-60 px-5'
    >
      {propsNavigation.map(({ key, href, label, icon }) => (
        <ListboxItem
          key={key}
          className='flex items-center p-0'
          variant='solid'
          textValue='main'
        >
          <Link
            href={href}
            color='foreground'
            className='w-full p-1 flex-row-reverse justify-end items-end font-light'
            as={NextLink}
            showAnchorIcon
            anchorIcon={icon}
          >
            <span className='pl-4'>{label}</span>
          </Link>
        </ListboxItem>
      ))}
    </Listbox>
  )
}

export default LinkList
