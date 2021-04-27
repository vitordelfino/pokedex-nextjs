import {
  Center,
  VStack,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Text,
  HStack,
  Wrap,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PokemonCard from "../../components/PokemonCard";
import { useRouter } from "next/router";
import { useSearchPokemon } from "../../hooks/useSearchPokemon";

const Search = () => {
  const MotionCenter = motion(Center);
  const router = useRouter();
  const { pokemon } = router.query;
  const { isLoading, data } = useSearchPokemon(pokemon as string);
  return (
    <MotionCenter
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <VStack spacing={10} w="100%">
        {isLoading && <Spinner />}
        {data && (
          <Stack direction="row" w="100%" justifyContent="center">
            <PokemonCard
              name={pokemon as string}
              url=""
              cursor="auto"
              hoverless
            />
            <Box p={8} bg="gray.800" borderRadius="md" mt={5} w="md">
              <Stack spacing={8}>
                <HStack>
                  <FormControl>
                    <FormLabel fontSize="xl">Height</FormLabel>
                    <Text>{data.height}</Text>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="xl">Weight</FormLabel>
                    <Text>{data.weight}</Text>
                  </FormControl>
                </HStack>
                <HStack>
                  <Wrap>
                    {data.stats.map((s: any) => (
                      <WrapItem>
                        <FormControl>
                          <FormLabel fontSize="md">{s.stat.name}</FormLabel>
                          <Text>{s.base_stat}</Text>
                        </FormControl>
                      </WrapItem>
                    ))}
                  </Wrap>
                </HStack>
              </Stack>
            </Box>
          </Stack>
        )}
      </VStack>
    </MotionCenter>
  );
};

export default Search;
