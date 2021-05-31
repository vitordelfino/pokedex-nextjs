import { memo } from 'react';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import PokemonCard from '../../components/PokemonCard';
import { useSearchPokemon } from '../../hooks/useSearchPokemon';
import { useEvolutionChain } from '../../hooks/useEvolutionChain';
import { parseEvolution } from '../../utils/parse-evolution';

const Search = (): JSX.Element => {
  const MotionCenter = motion(Center);
  const router = useRouter();
  const { pokemon } = router.query;
  const { isLoading, data } = useSearchPokemon(pokemon as string);
  const { data: evolution } = useEvolutionChain(pokemon as string);

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
            <PokemonCard name={pokemon as string} cursor="auto" hoverless />
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
                    {data.stats.map((s) => (
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
        {evolution && parseEvolution(evolution.chain).length > 1 && (
          <VStack>
            <Text fontSize="xl" fontWeight="medium">
              Evolution Chain
            </Text>
            <Wrap align="center" justify="center">
              {parseEvolution(evolution.chain).map((p) => (
                <WrapItem onClick={() => router.push(`/search/${p}`)}>
                  <PokemonCard name={p} cursor="pointer" hoverless />
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        )}
      </VStack>
    </MotionCenter>
  );
};

export default memo(Search);
