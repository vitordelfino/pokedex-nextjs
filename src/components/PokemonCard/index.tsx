import { Box, Image, VStack, Text, HStack, Tag } from '@chakra-ui/react';
import { useSearchPokemon } from '../../hooks/useSearchPokemon';
import { fillPokemonNumber, firstLetterUpper } from '../../utils/strings';
import { pokemonTypeColor } from '../../utils/colors';

type PokemonCardProps = {
  name: string;
  cursor?: 'pointer' | 'auto';
  hoverless?: boolean;
};

const PokemonCard = ({
  name,
  cursor = 'pointer',
  hoverless,
}: PokemonCardProps): JSX.Element => {
  const { data } = useSearchPokemon(name);

  return (
    <VStack
      _hover={{
        transform: !hoverless ? 'scale(1.1)' : '',
      }}
      transition="transform 0.2s"
      maxW={['100', '150', '170', '140', '170', '250', '270']}
      marginY="1.5"
    >
      {data && (
        <>
          <Box
            border="1px"
            borderRadius="md"
            borderColor="gray.800"
            bg="gray.800"
            cursor={cursor}
            overflow="hidden"
          >
            <Image
              src={data.sprites.other['official-artwork'].front_default}
              alt={data.name}
              fallbackSrc={`https://via.placeholder.com/150?text=${name}`}
              _hover={{
                filter:
                  'drop-shadow(0.2rem 0.2rem 0.5rem rgba(180, 160, 255, 1))',
              }}
            />
          </Box>
          <Box justifyContent="flex-start" w="100%" px={4} cursor={cursor}>
            <Text
              fontSize={['xs', 'sm']}
              textColor="gray.500"
              fontWeight="medium"
            >
              {fillPokemonNumber(data.id)}
            </Text>
            <Text
              fontSize={['md', 'xl']}
              textColor="gray.200"
              fontWeight="medium"
              isTruncated
            >
              {firstLetterUpper(data.name)}
            </Text>
            <HStack>
              {data.types.map((t) => {
                const [gradient, color] = pokemonTypeColor(t.type.name);
                return (
                  <Tag
                    size="sm"
                    verticalAlign="middle"
                    bgGradient={gradient}
                    color={color}
                  >
                    {/* {firstLetterUpper(t.type.name)} */}
                    <Text color={color} isTruncated>
                      {firstLetterUpper(t.type.name)}
                    </Text>
                  </Tag>
                );
              })}
            </HStack>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default PokemonCard;
