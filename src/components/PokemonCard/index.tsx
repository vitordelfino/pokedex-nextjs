import { useSearchPokemon } from "../../hooks/useSearchPokemon";
import { Box, Image, Center, Spinner } from "@chakra-ui/react";
type PokemonCardProps = {
  url: string;
  name: string;
};

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { isLoading, data } = useSearchPokemon(name);

  return (
    <Box maxW={["100", "130", "150", "200", "220", "250"]} border="1px">
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {data && (
        <Image
          
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
          fallbackSrc={`https://via.placeholder.com/150?text=${name}`} 
        ></Image>
      )}
    </Box>
  );
};

export default PokemonCard;
