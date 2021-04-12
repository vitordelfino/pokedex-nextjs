import { Center, Text, Box, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { AutoComplete } from "../../components/AutoComplete";
import { getAllPokemonNames, useAllPokemonNames } from "../../hooks/useAllPokemons";
import { useSearchPokemon } from "../../hooks/useSearchPokemon";

const Search = () => {
  const MotionCenter = motion(Center);
  const [pokeToSearch, setPokeToSearch] = useState('');
  const { data: pokemons } = useAllPokemonNames();
  const { isLoading, data, isError } = useSearchPokemon(pokeToSearch);
  return (
    <MotionCenter
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <VStack>      
        <AutoComplete items={pokemons} onSelect={(pokemon) => setPokeToSearch(pokemon)}/>
        { isLoading && <Text>loading</Text> }
        { isError && <Text>loading</Text> }
        { data && (
          <Box boxSize="sm">
            <Image src={data.sprites.front_default} alt={data.name} />
          </Box>
        ) }
      </VStack>
    </MotionCenter>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('all-pokemon-names', getAllPokemonNames);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Search;
