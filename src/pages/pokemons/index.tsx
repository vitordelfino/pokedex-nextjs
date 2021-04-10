import { Center, Text, Box, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AutoComplete } from "../../components/AutoComplete";
import { usePokemon } from "../../hooks/usePokemon";
type PokemonsProps = {
  pokemons: Array<{ label: string; value: string }>;
};

const Pokemons = ({ pokemons }: PokemonsProps) => {
  const MotionCenter = motion(Center);
  const [pokeToSearch, setPokeToSearch] = useState('');
  const { isLoading, data, isError } = usePokemon(pokeToSearch);
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
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();
  const allPokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${data.count || 1118}`
  );
  const allPokemons = await allPokemonsResponse.json();
  return {
    props: {
      pokemons: allPokemons.results.map((p: any) => ({
        label: p.name,
        value: p.name,
      })),
    },
  };
}

export default Pokemons;
