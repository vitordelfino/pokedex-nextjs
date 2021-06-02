import { memo } from 'react';
import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSearchPokemon } from '../../hooks/useSearchPokemon';
import { fillPokemonNumber, firstLetterUpper } from '../../utils/strings';

import TagType from '../TagType';

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
  const variant = useBreakpointValue({
    base: '150',
    xs: '100',
    sm: '140',
    md: '150',
    lg: '170',
    xl: '250',
  });
  return (
    <VStack
      _hover={{
        transform: !hoverless ? 'scale(1.1)' : '',
      }}
      transition="transform 0.2s"
      // maxW={['100', '150', '170', '140', '170', '250', '270']}
      maxW={variant || '170'}
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
              fallbackSrc={`https://via.placeholder.com/${
                variant || 170
              }?text=${name}`}
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
              {data.types.map((t) => (
                <TagType text={t.type.name} />
              ))}
            </HStack>
          </Box>
        </>
      )}
    </VStack>
  );
};

export default memo(PokemonCard);
