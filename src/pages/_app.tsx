import { ChakraProvider } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion';
import theme from '../theme'
import { AppProps } from 'next/app'
import { Menu } from '../components/Menu'
function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <AnimateSharedLayout >
      <ChakraProvider resetCSS theme={theme}>
        <Menu />     
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
