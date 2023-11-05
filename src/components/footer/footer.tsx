import { Link } from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Github from '@/components/icons/github'
import { iconClasses } from '@/components/icons/style'
import Mail from '@/components/icons/mail'
import Linkedin from '@/components/icons/linkedin'

const Footer = () => {
  return (
    <div className='w-full h-[68px] flex flex-col justify-center items-center'>
      <div className='flex'>
        <div className='px-2'>
          <Button
            href='https://www.linkedin.com/in/facundo-gutierrez-b5969b240'
            target='_blank'
            as={Link}
            color='default'
            variant='solid'
            radius='full'
            isIconOnly
            size='sm'
          >
            <Linkedin className={iconClasses} />
          </Button>
        </div>
        <div className='px-2'>
          <Button
            href='https://github.com/facundonahuelg26?tab=repositories'
            target='_blank'
            as={Link}
            color='default'
            variant='solid'
            radius='full'
            isIconOnly
            size='sm'
          >
            <Github className={iconClasses} />
          </Button>
        </div>
        <div className='px-2'>
          <Button
            href='mailto:facundonahuelg26@gmail.com?subject=Quiero contactarte'
            target='_blank'
            as={Link}
            color='default'
            variant='solid'
            radius='full'
            isIconOnly
            size='sm'
          >
            <Mail className={iconClasses} />
          </Button>
        </div>
      </div>
      <div className='text-sm py-1 font-normal dark:font-thin'>
        Desarrollado por FG Solutions
      </div>
    </div>
  )
}

export default Footer
