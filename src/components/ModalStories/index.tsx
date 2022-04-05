import * as React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Modal,
  ModalContent,
  ModalContentProps,
  ModalOverlay,
  AspectRatio,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react'
import Stories, { StoriesProps, ComponentCallbackArgs } from '../Stories/index'
import { motion, PanInfo } from 'framer-motion'

const CLOSE_DRAG_THRESHOLD = 120
const DRAG_END_PROPAGATION_TIMEOUT = 100
const DEFAULT_ASPECT_RATIO = 0.5625

const MotionModalContent = motion(ModalContent)

interface ModalStoriesProps extends StoriesProps {
  isOpen: boolean
  onClose: () => void
  modalContentProps?: ModalContentProps
  onDragUp?: (args: ComponentCallbackArgs) => void
  aspectRatio?: number
}

const ModalStories = ({
  isOpen,
  onClose,
  modalContentProps,
  onDragUp,
  children,
  aspectRatio = DEFAULT_ASPECT_RATIO,
  ...rest
}: ModalStoriesProps) => {
  const [isDragging, setIsDragging] = React.useState(false)
  const [currentStoryId, setCurrentStoryId] = React.useState(0)

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setTimeout(() => {
      setIsDragging(false)
    }, DRAG_END_PROPAGATION_TIMEOUT)
    if (info.offset.y > CLOSE_DRAG_THRESHOLD) onClose()
    if (info.offset.y < -CLOSE_DRAG_THRESHOLD)
      onDragUp &&
        onDragUp({
          currentStory: currentStoryId + 1,
          storiesCount: children.length
        })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="xl" scrollBehavior="inside">
      <ModalOverlay />
      <IconButton
        display={['none', 'block', 'block']}
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
        margin={[0, '3.75rem auto', '3.75rem auto']}
        borderRadius={[0, '1rem', '1rem']}
        {...modalContentProps}
      >
        <ModalBody
          display="flex"
          padding={0}
          borderRadius={[0, '1rem', '1rem']}
          minHeight={['100vh', '32rem', '32rem']}
        >
          <Stories {...rest} flex={1} isDragging={isDragging} onStoryChange={setCurrentStoryId} padding="0 1rem">
            {children}
          </Stories>
        </ModalBody>
      </MotionModalContent>
    </Modal>
  )
}

export default ModalStories
