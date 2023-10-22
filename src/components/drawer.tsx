'use client'
import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { Button } from '@nextui-org/button'

import { useToggle } from '@/features/ui/toggle'
import LinkList from '@/components/ui/link-list'
import { PROPS_NAVIGATION } from '@/features/ui/navigation'
import { iconClasses, mainIcon } from '@/components/icons/style'
import HappyFace from '@/components/icons/happy-face'
import Event from '@/components/icons/event'
export default function Drawer() {
  const { toggle, handleToggle } = useToggle()
  const { onOpenChange } = useDisclosure()

  return (
    <>
      <div className='hidden xl:block fixed'>
        <LinkList propsNavigation={PROPS_NAVIGATION} />
      </div>
      <Modal
        backdrop='blur'
        size='full'
        className='w-60 start-0 fixed'
        isOpen={toggle.menuBtn}
        onOpenChange={onOpenChange}
        onClose={() => handleToggle('menuBtn')}
        hideCloseButton={true}
        classNames={{
          base: 'shadow-lg shadow-violet-800/50'
        }}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut'
              }
            },
            exit: {
              x: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn'
              }
            }
          }
        }}
      >
        <ModalContent>
          <ModalHeader className='flex items-end'>
            <HappyFace className={iconClasses} />

            <div className='pl-2 flex items-end'>
              <Event className={mainIcon} />
              <span className='font-bold text-inherit text-xl'>Tu cita</span>
            </div>
          </ModalHeader>
          <ModalBody className='px-0'>
            <LinkList propsNavigation={PROPS_NAVIGATION} />
          </ModalBody>
          <ModalFooter className='flex justify-start'>
            <Button
              color='danger'
              variant='bordered'
              onPress={() => handleToggle('menuBtn')}
              radius='full'
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
