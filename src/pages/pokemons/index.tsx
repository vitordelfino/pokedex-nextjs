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
  );
};

export default Pokemons;
