import { useSearchPokemon } from "../../hooks/useSearchPokemon";
import { Box, Image, Center, Spinner, BoxProps } from "@chakra-ui/react";
import { motion } from 'framer-motion';
type PokemonCardProps = {
  url: string;
  name: string;
};

const PokemonCard = ({ name }: PokemonCardProps) => {
  const { isLoading, data } = useSearchPokemon(name);
  const MotionBox = motion<BoxProps>(Box);
  return (
    <Box
      maxW={["100", "130", "150", "200", "220", "250"]} border="1px"
      // cursor="pointer"
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {data && (
        <Image
          
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        ></Image>
      )}
    </Box>
  );
};

export default PokemonCard;
