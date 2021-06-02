import { useRouter } from 'next/router';
import { VStack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { useEvolutionChain } from '../../hooks/useEvolutionChain';
import { parseEvolution } from '../../utils/parse-evolution';
import PokemonCard from '../PokemonCard';

const EvolutionChain = (): JSX.Element => {
  const router = useRouter();
  const { pokemon } = router.query;

  const { data: evolution } = useEvolutionChain(pokemon as string);
  return (
    <>
      {evolution && parseEvolution(evolution.chain).length > 1 && (
        <VStack w="80%">
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
    </>
  );
};

export default EvolutionChain;
