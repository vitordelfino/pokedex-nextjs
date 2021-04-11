import {
  Center,
  Spinner,
  Text,
  Wrap,
  WrapItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

import PokemonCard from "../../components/PokemonCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useListPokemon } from "../../hooks/useListPokemons";
import Head from 'next/head';
const Pokemons = () => {
  const {
    isLoading,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useListPokemon();
  const loadMoreButtonRef = useRef(null);
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  } as any);
  return (
   <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="vitordelfino" key="twhandle" />
        <meta name="twitter:image" content="https://i.imgur.com/md0T87F.png" key="twimage" />

        <meta property="og:url" content="www.pokedex.dev/pokemons" key="ogurl" />
        <meta property="og:image" content="https://i.imgur.com/md0T87F.png" key="ogimage" />
        <meta property="og:site_name" content="Pokedex App" key="ogsitename" />
        <meta property="og:title" content="Pokemons" key="ogtitle" />
        <meta property="og:description" content="Pokedex app developer with Next.js" key="ogdesc" />
        <title>Pokemons</title>
      </Head>
    <Center>
      <VStack marginLeft={["0", "0", "0", "300"]}>
        <Text fontSize="2xl">POKEMONS</Text>
        {isLoading && <Spinner />}
        {isError && <Text>Error</Text>}
        <Wrap
          justifyContent="center"
          spacing={["1.5", "5", "10"]}
          justify="center"
        >
          {data &&
            data.pages.map((p: any) =>
              p.results.map((pokemon: any, j: number) => (
                <WrapItem>
                  <PokemonCard
                    name={pokemon.name}
                    url={pokemon.url}
                    key={`${pokemon.name}_${j}`}
                  />
                </WrapItem>
              ))
            )}
        </Wrap>
        <Button
          ref={loadMoreButtonRef as any}
          bg="gray.800"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          <Text>
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load more"
              : "Nothing to load"}
          </Text>
        </Button>
      </VStack>
    </Center>
   </>
  );
};

export default Pokemons;
