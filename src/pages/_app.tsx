import { ChakraProvider } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion';
import theme from '../theme'
import { AppProps } from 'next/app'
import { Menu } from '../components/Menu'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from 'react-query/hydration';
import { useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>()
   if (!queryClientRef.current) {
     queryClientRef.current = new QueryClient()
   }
  return (
    <AnimateSharedLayout >
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
          <Hydrate state={pageProps.dehydratedState}>
            <Menu />     
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>

      </ChakraProvider>
    </AnimateSharedLayout>
  )
}

export default MyApp
