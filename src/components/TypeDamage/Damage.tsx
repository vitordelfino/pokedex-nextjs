import { VStack, Wrap, WrapItem, Flex, Text } from '@chakra-ui/react';
import { useType } from '../../hooks/useTypes';
import { Doubledamagefrom } from '../../utils/types';
import TagType from '../TagType';

type DamageProps = {
  type: string;
};

const Damage = ({ type }: DamageProps): JSX.Element => {
  const { data } = useType(type);
  return (
    <VStack>
      <TagType text={type} size="lg" />
      {data &&
        Object.keys(data.damage_relations)
          .filter((k) => (data.damage_relations as any)[k].length > 0)
          .map((k) => (
            <Flex direction="column" justify="center" align="center">
              <Text fontWeight="medium" fontSize="lg">
                {k.replace(/_/g, ' ')}
              </Text>
              <Wrap justify="center" align="center" spacing="2">
                {(data.damage_relations as any)[k]
                  .sort(
                    (a: Doubledamagefrom, b: Doubledamagefrom) =>
                      a.name.length - b.name.length
                  )
                  .map((ddf: Doubledamagefrom) => (
                    <WrapItem>
                      <TagType text={ddf.name} size="sm" />
                    </WrapItem>
                  ))}
              </Wrap>
            </Flex>
          ))}
    </VStack>
  );
};

export default Damage;
