import { Text, Input, Box, List, ListItem } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

type AutoCompleteProps = {
  items: Array<{
    label: string;
    value: string;
  }>;

  onSelect: (pokemonName: string) => void;
};
export const AutoComplete = ({ items, onSelect }: AutoCompleteProps) => {
  const [typed, setTyped] = useState("");
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
  }, [])
  return (
    <Box w={["xs", "sm", "md", "lg"]}>
      <Input
        placeholder="Type an pokemon name"
        onChange={onChange}
        bg="whiteAlpha.100"
        _hover={{
          borderColor: "gray.500",
        }}
        value={typed}
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
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          {displayOptions.map((o, i) => (
            <ListItem
              p="1"
              _hover={{ cursor: "pointer", background: "gray.200" }}
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
