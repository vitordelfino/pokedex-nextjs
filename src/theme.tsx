import { extendTheme } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace` }

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// })

const theme = extendTheme({
  /* components: {
    Drawer: {
      baseStyle: {
        backgroundColor: "red",
        color: 'gray.50'
      },
    
  }, */
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "gray.50"
      },
      
    }
  },
  fonts,
  // breakpoints,  
})

export default theme
