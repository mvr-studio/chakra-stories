# Chakra UI Stories

Programmatic Stories component for Chakra UI.

## Installation

```sh
$ yarn add @mvr-studio/chakra-stories
```

## Components

### Stories

`Stories` is the bare bone component of this library which renders indicators, content and additional data.

#### Usage

```tsx
import { Box } from '@chakra-ui/react'
import { Stories } from '@mvr-studio/chakra-stories'

const View = () => {
  return (
    <Stories>
      <Box>First</Box>
      <Box>Second</Box>
      <Box>Third</Box>
    </Stories>
  )
}
```

#### API

- children: `ReactNode[]`
- storyDuration?: `number` - Duration of each story in seconds.
- onStoriesCompleted?: `() => void` - Callback to fire when the last story finishes.
- aspectRatio?: `number` - Custom aspect ratio of stories container.
- indicator?:
  - activeColor?: `string` - Animated indicator active color.
  - inactiveColor?: `string` - Inactive indicator color.
- components?:
  - renderTopBar?: `({ currentStory, storiesCount }) => JSX.Element` - Function to render Top Bar with additional data.
  - renderBottomBar?: `({ currentStory, storiesCount }) => JSX.Element` - Function to render Bottom Bar with additional data.

### ModalStories

`ModalStories` is an extended version of `Stories`, which wraps `Stories` component into a Modal. It extends props of `Stories`, so you can use all the properties of `Stories` plus some more.

#### Usage

```tsx
import { useDisclosure, Box, Button } from '@chakra-ui/react'
import { ModalStories } from '@mvr-studio/chakra-stories'

const View = () => {
  const { isOpen, onOpen, onClose } = useDislcosure()

  return (
    <Box>
      <Button onClick={onOpen}>Open Stories</Button>
      <ModalStories isOpen={isOpen} onClose={onClose}>
        <Box>First</Box>
        <Box>Second</Box>
        <Box>Third</Box>
      </ModalStories>
    </Box>
  )
}
```

#### API

- All the properties of `Stories`
- isOpen: `boolean`
- onClose: `() => void`

## External links

[Storybook](https://chakra-stories.netlify.app/)

[MVR Studio](https://mvr.studio/)
