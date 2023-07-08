import { extendTheme, type ThemeConfig, } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const components = { 
  Heading: {
    variants: {
      'h3': {
        textDecoration: "underline",
        fontSize: 20
      }
    }
  }
}

const theme = extendTheme({ 
  config,
  components,
})

export default theme