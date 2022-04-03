import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import Stories, { StoriesProps } from '../Stories'

interface ModalStoriesProps extends StoriesProps {
  isOpen: boolean
  onClose: () => void
}

const ModalStories = ({ isOpen, onClose, ...rest }: ModalStoriesProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <IconButton
        position="absolute"
        top="1rem"
        right="1rem"
        icon={<CloseIcon />}
        aria-label="Close"
        zIndex={1401}
        onClick={onClose}
        borderRadius="50%"
        variant="outline"
        colorScheme="teal"
        color="teal.300"
        size="sm"
      />
      <ModalContent backgroundColor="transparent" boxShadow="none">
        <Stories {...rest} />
      </ModalContent>
    </Modal>
  )
}

export default ModalStories
