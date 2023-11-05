import { Spinner } from '@nextui-org/spinner'
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal'
const Loading = () => {
  return (
    <>
      <Modal
        backdrop='blur'
        size='full'
        isOpen={true}
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20'
        }}
      >
        <ModalContent>
          <ModalBody className='flex items-center justify-center'>
            <div>
              <Spinner label='Cargando' size='lg' color='secondary' />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Loading
