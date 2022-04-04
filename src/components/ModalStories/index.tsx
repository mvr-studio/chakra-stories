import * as React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { IconButton, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import Stories, { StoriesProps } from '../Stories/index'
import { motion, PanInfo } from 'framer-motion'

const CLOSE_DRAG_THRESHOLD = 120
const DRAG_END_PROPAGATION_TIMEOUT = 100

const MotionModalContent = motion(ModalContent)

interface ModalStoriesProps extends StoriesProps {
  isOpen: boolean
  onClose: () => void
}

const ModalStories = ({ isOpen, onClose, ...rest }: ModalStoriesProps) => {
  const [isDragging, setIsDragging] = React.useState(false)

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setTimeout(() => {
      setIsDragging(false)
    }, DRAG_END_PROPAGATION_TIMEOUT)
    if (info.offset.y > CLOSE_DRAG_THRESHOLD) onClose()
  }

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
      <MotionModalContent
        drag="y"
        dragPropagation
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={onDragEnd}
        backgroundColor="transparent"
        boxShadow="none"
      >
        <Stories {...rest} isDragging={isDragging} />
      </MotionModalContent>
    </Modal>
  )
}

export default ModalStories
