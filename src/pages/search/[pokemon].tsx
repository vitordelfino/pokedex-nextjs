import { memo } from 'react';
import { Center, VStack, Stack, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import PokemonCard from '../../components/PokemonCard';
import { useSearchPokemon } from '../../hooks/useSearchPokemon';
import EvolutionChain from '../../components/EvolutionChain';
import TypeDamage from '../../components/TypeDamage';

const Search = (): JSX.Element => {
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
          <Stack
            direction="row"
            w="100%"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <PokemonCard name={pokemon as string} cursor="auto" hoverless />
            {/* <Center bg="gray.800" borderRadius="md" mt={5} w="3xl"> */}
            <TypeDamage />

            {/* <Stack bg="gray.800" borderRadius="md" w="3xl" p="2">
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
            </Stack> */}
            {/* </Center> */}
          </Stack>
        )}
        <EvolutionChain />
      </VStack>
    </MotionCenter>
  );
};

export default memo(Search);
