import { ChakraProvider } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion';
import theme from '../theme'
import { AppProps } from 'next/app'
import { Menu } from '../components/Menu'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <AnimateSharedLayout >
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen />
          <Menu />     
          <Component {...pageProps} />
        </QueryClientProvider>

      </ChakraProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
