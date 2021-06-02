import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';
import { HStack } from '@chakra-ui/react';
import { Pokemon } from '../../utils/types';
import Damage from './Damage';

const TypeDamage = (): JSX.Element => {
  const router = useRouter();
  const { pokemon } = router.query;
  const queryclient = useQueryClient();

  const cache = queryclient.getQueryCache().find<Pokemon>(['pokemon', pokemon]);
  const types = cache?.state.data?.types;
  return (
    <HStack alignItems="flex-start" justifyContent="center" spacing="10">
      {
        types &&
          // <Wrap justify="center" align="start" w="100%">
          types.map((t) => (
            // <WrapItem>
            <Damage type={t.type.name} />
            // </WrapItem>
          ))
        // </Wrap>
      }
    </HStack>
  );
};

export default TypeDamage;
