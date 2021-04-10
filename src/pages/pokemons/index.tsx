import { Center, Spinner, Text, Wrap, WrapItem, VStack, Button } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import { useListPokemon } from '../../hooks/useListPokemons';

const Pokemons = () => {
  const [offset, setOffset] = useState(20);
  const { isLoading, isError, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useListPokemon()
  // const loadMoreButtonRef = useRef()
  // useIntersectionObserver({
  //   target: loadMoreButtonRef,
  //   onIntersect: fetchNextPage,
  //   enabled: hasNextPage,
  // })
  return (
    <Center>
      <VStack
        marginLeft={["0", "0", "0", "300"]}
      >      
        <Text fontSize="2xl">POKEMONS</Text>
        { isLoading && (
          <Spinner />
        )}
        {
          isError && (
            <Text>Error</Text>
          )
        }
        <Wrap
          justifyContent="center"
          spacing={["1.5", "5", "10"]}
          justify="center"
        >
          {data && (
            data.pages.map((p: any) => (
              p.results.map((pokemon: any, j: number) => (
                <WrapItem>
                  <PokemonCard name={pokemon.name} url={pokemon.url} key={`${pokemon.name}_${j}`}/>
                </WrapItem>
              ))
            ))
          )}
        </Wrap>
        <Button 
          // ref={loadMoreButtonRef}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          MAIS
        </Button>
      </VStack>
    </Center>
  )
}

export default Pokemons;