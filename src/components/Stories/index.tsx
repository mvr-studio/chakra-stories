import * as React from 'react'
import { ReactNode, useEffect, useState } from 'react'
import { Box, Flex, HStack, FlexProps } from '@chakra-ui/react'
import { install } from '@github/hotkey'
import { motion, useAnimation } from 'framer-motion'

const MotionBox = motion(Box)

type IndicatorProps = {
  activeColor?: string
  inactiveColor?: string
}

export type ComponentCallbackArgs = {
  currentStory: number
  storiesCount: number
}

type ComponentsProps = {
  renderTopBar?: (args: ComponentCallbackArgs) => JSX.Element
  renderBottomBar?: (args: ComponentCallbackArgs) => JSX.Element
}

export interface StoriesProps extends FlexProps {
  children: ReactNode[]
  storyDuration?: number
  onStoriesCompleted?: () => void
  indicator?: IndicatorProps
  components?: ComponentsProps
  isDragging?: boolean
  onStoryChange?: (storyId: number) => void
}

const Stories = ({
  children,
  storyDuration,
  onStoriesCompleted,
  indicator,
  components,
  isDragging,
  onStoryChange,
  ...rest
}: StoriesProps) => {
  const [currentStoryId, setCurrentStoryId] = useState(0)
  const isStoryActive = (storyId: number) => storyId === currentStoryId
  const wasStoryShown = (storyId: number) => storyId < currentStoryId
  const hasPreviousStory = currentStoryId > 0
  const hasNextStory = currentStoryId < children.length - 1
  const isLastStory = currentStoryId === children.length - 1

  const TopBar = components?.renderTopBar
  const BottomBar = components?.renderBottomBar

  const indicatorAnimation = useAnimation()

  const runIndicatorAnimation = async () => {
    indicatorAnimation.set({
      width: '1%'
    })
    await indicatorAnimation.start({
      width: '100%',
      transition: {
        duration: storyDuration,
        ease: 'linear'
      }
    })
  }

  const changeStory = (storyId: number) => {
    indicatorAnimation.stop()
    indicatorAnimation.set({
      width: '100%'
    })
    setCurrentStoryId(storyId)
  }

  const goBack = () => {
    if (!hasPreviousStory) return
    changeStory(currentStoryId - 1)
  }
  const goNext = () => {
    if (!hasNextStory) return
    changeStory(currentStoryId + 1)
  }

  useEffect(() => {
    for (const el of document.querySelectorAll('[data-hotkey]')) {
      install(el as any)
    }
  }, [])

  useEffect(() => {
    onStoryChange && onStoryChange(currentStoryId)
    if (!storyDuration) return
    const run = async () => {
      await runIndicatorAnimation()
      if (isLastStory) {
        onStoriesCompleted && onStoriesCompleted()
      }
      goNext()
    }
    run()
    return () => indicatorAnimation.stop()
  }, [currentStoryId])

  return (
    <Flex direction="column" backgroundColor="white" borderRadius="1rem" position="relative" {...rest}>
      <HStack width="100%" padding="0.5rem 0.75rem">
        {children.map((_, storyId) => {
          const activeOrShown = isStoryActive(storyId) || wasStoryShown(storyId)
          const indicatorColor = activeOrShown
            ? indicator?.activeColor || 'teal.400'
            : indicator?.inactiveColor || 'gray.200'
          return (
            <Box key={storyId} flex={1} padding="0.5rem 0.125rem" cursor="pointer" onClick={() => changeStory(storyId)}>
              <Box
                height="0.25rem"
                backgroundColor={indicator?.inactiveColor || 'gray.200'}
                borderRadius="0.25rem"
                position="relative"
              >
                <MotionBox
                  height="0.25rem"
                  backgroundColor={indicatorColor}
                  borderRadius="0.25rem"
                  position="absolute"
                  top={0}
                  left={0}
                  width={wasStoryShown(storyId) || !storyDuration ? '100%' : '1%'}
                  animate={isStoryActive(storyId) ? indicatorAnimation : null}
                />
              </Box>
            </Box>
          )
        })}
      </HStack>
      <Flex direction="column" flex={1} position="relative" width="100%" padding="0 1rem">
        {TopBar && <TopBar currentStory={currentStoryId + 1} storiesCount={children.length} />}
        <Box flex={1} position="relative">
          {children[currentStoryId]}
          <Box
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right="50%"
            cursor="pointer"
            onClick={!isDragging ? goBack : undefined}
            data-hotkey="ArrowLeft"
          />
          <Box
            position="absolute"
            top={0}
            left="50%"
            bottom={0}
            right={0}
            cursor="pointer"
            data-hotkey="ArrowRight"
            onClick={!isDragging ? goNext : undefined}
          />
        </Box>
        {BottomBar && <BottomBar currentStory={currentStoryId + 1} storiesCount={children.length} />}
      </Flex>
    </Flex>
  )
}

export default Stories
