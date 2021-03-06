import { ChakraProvider, theme } from '@chakra-ui/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => {
    return (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    )
  }
]
