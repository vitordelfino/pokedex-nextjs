import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { AutoComplete } from "../../components/AutoComplete";
type PokemonsProps = {
  pokemons: Array<{ label: string; value: string }>;
};

const Pokemons = ({ pokemons }: PokemonsProps) => {
  const MotionCenter = motion(Center);

  return (
    <MotionCenter
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <AutoComplete items={pokemons} />
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
