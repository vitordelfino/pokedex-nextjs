/* eslint-disable no-restricted-syntax */
import { Center, Text, Wrap, WrapItem, VStack, Button } from '@chakra-ui/react';
import { useRef, memo, useEffect } from 'react';

import Head from 'next/head';
import Aos from 'aos';
import { dehydrate, DehydratedState } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { QueryClient } from 'react-query';
import PokemonCard from '../../components/PokemonCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { fetchPokemons, useListPokemon } from '../../hooks/useListPokemons';
import 'aos/dist/aos.css';
import {
  getAllPokemonNames,
  useAllPokemonNames,
} from '../../hooks/useAllPokemons';
import AutoComplete from '../../components/AutoComplete';
import { fetchPokemonByName } from '../../hooks/useSearchPokemon';

const Pokemons = () => {
  const {
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useListPokemon();
  const { data: pokemons } = useAllPokemonNames();
  const router = useRouter();

  const loadMoreButtonRef = useRef(null);
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  } as any);
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="vitordelfino" key="twhandle" />
        <meta
          name="twitter:image"
          content="https://i.imgur.com/md0T87F.png"
          key="twimage"
        />

        <meta
          property="og:url"
          content="www.pokedex.dev/pokemons"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/md0T87F.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Pokedex App" key="ogsitename" />
        <meta property="og:title" content="Pokemons" key="ogtitle" />
        <meta
          property="og:description"
          content="Pokedex app developer with Next.js"
          key="ogdesc"
        />
        <title>Pokemons</title>
      </Head>
      <Center
        mw="1100px"
        paddingX={['0', '0', '0', '120', '150', '150', '200']}
        marginLeft={['0', '0', '0', '200', '220', '220', '220']}
      >
        <VStack spacing={8}>
          <AutoComplete
            items={pokemons ?? []}
            onSelect={(pkName) => router.push(`/search/${pkName}`)}
          />
          {isError && <Text>Error</Text>}
          {data &&
            data.pages.map((p) => (
              <Wrap
                justifyContent="center"
                spacing={['1.5', '5', '10']}
                justify="center"
                key={p.next}
                data-aos="fade"
              >
                {p.results.map((pokemon) => (
                  <WrapItem
                    key={pokemon.name}
                    data-aos="slide-right"
                    data-aos-offset="10"
                    onClick={() => router.push(`/search/${pokemon.name}`)}
                  >
                    <PokemonCard name={pokemon.name} />
                  </WrapItem>
                ))}
              </Wrap>
            ))}
          <Button
            ref={loadMoreButtonRef as any}
            bg="gray.800"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            <Text>
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load more'
                : 'Nothing to load'}
            </Text>
          </Button>
        </VStack>
      </Center>
    </>
  );
};

export async function getStaticProps(): Promise<{
  props: { dehydratedState: DehydratedState };
}> {
  const queryClient = new QueryClient();
  const fetchList = () =>
    fetchPokemons({
      pageParam: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=12',
    });
  const pokemons = await fetchList();
  for await (const [, item] of pokemons.results.entries()) {
    if (item.name) {
      const fetch = () => fetchPokemonByName(item.name);
      await queryClient.prefetchQuery(['pokemon', item.name], fetch);
    }
  }
  await queryClient.prefetchQuery('all-pokemon-names', getAllPokemonNames);

  await queryClient.prefetchInfiniteQuery(['list-pokemons'], useListPokemon);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default memo(Pokemons);
