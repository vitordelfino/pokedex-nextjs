import { Text, Input, Box, List, ListItem } from '@chakra-ui/react';
import { ChangeEvent, useCallback, useEffect, useState, memo } from 'react';

type AutoCompleteProps = {
  items: Array<{
    label: string;
    value: string;
  }>;

  onSelect: (pokemonName: string) => void;
};
const AutoComplete = ({ items, onSelect }: AutoCompleteProps): JSX.Element => {
  const [typed, setTyped] = useState('');
  const [displayOptions, setDisplayOptions] = useState<
    Array<{ label: string; value: string }>
  >();
  useEffect(() => {
    if (typed) setDisplayOptions(items.filter((i) => i.value.includes(typed)));
    else setDisplayOptions([]);
  }, [typed, items]);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTyped(e.target.value);
  }, []);

  const onSelectItem = useCallback((pokemonName: string) => {
    setTyped('');
    onSelect(pokemonName);
  }, []);
  return (
    <Box
      w={['', 'sm', 'md', 'lg']}
      position="fixed"
      // style={{
      //   backdropFilter: 'blur(8px)',
      // }}
      top="0"
      // w="98%"
      zIndex="2"
      // background="rgba(23, 25, 35, 0.9)"
      p={5}
      marginLeft={['7', '', '', '']}
    >
      <Input
        placeholder="Type an pokemon name"
        onChange={onChange}
        bg="whiteAlpha.800"
        _hover={{
          borderColor: 'gray.700',
        }}
        value={typed}
        color="blackAlpha.800"
        fontSize="lg"
        fontWeight="medium"
      />
      {displayOptions && displayOptions.length > 0 && (
        <List
          mt="1.5"
          borderRadius="md"
          p="1.5"
          bg="gray.50"
          overflowY="auto"
          height="xs"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '24px',
            },
          }}
        >
          {displayOptions.map((o, i) => (
            <ListItem
              p="1"
              _hover={{ cursor: 'pointer', background: 'gray.200' }}
              borderRadius="sm"
              onClick={() => onSelectItem(o.value)}
              key={`${o.value}-${i}`}
            >
              <Text
                ml="1"
                fontSize="lg"
                fontWeight="medium"
                textColor="gray.900"
              >
                {o.label}
              </Text>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default memo(AutoComplete);
