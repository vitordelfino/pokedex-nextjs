import { ChakraProvider } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import { useRef } from 'react';
import Menu from '../components/Menu';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <AnimateSharedLayout>
      <ChakraProvider resetCSS theme={theme}>
        <QueryClientProvider client={queryClientRef.current}>
          <ReactQueryDevtools
            initialIsOpen={process.env.NODE_ENV === 'development'}
          />
          <Hydrate state={pageProps.dehydratedState}>
            <Menu />
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
