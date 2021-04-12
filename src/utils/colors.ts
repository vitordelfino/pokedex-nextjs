export const pokemonTypeColor = (type: string): [string, string] => {
  const map = new Map<string, [string, string]>();
  map.set('normal', ['linear(to-t, gray.100, gray.100)', 'gray.800'])
  map.set('fighting', ['linear(to-t, orange.600, orange.600)', 'gray.800'])
  map.set('flying', ['linear(to-t, gray.100, blue.500)', 'gray.800'])
  map.set('poison', ['linear(to-t, purple.400, purple.400)', 'gray.800'])
  map.set('ground', ['linear(to-t, yellow.300, yellow.900)', 'gray.800'])
  map.set('rock', ['linear(to-t, yellow.800, yellow.800)', 'gray.800'])
  map.set('bug', ['linear(to-t, green.600, green.600)', 'gray.800'])
  map.set('ghost', ['linear(to-t, purple.700, purple.700)', 'gray.200'])
  map.set('steel', ['linear(to-t, gray.400, gray.400)', 'gray.800'])
  map.set('fire', ['linear(to-t, orange.400, orange.400)', 'gray.800'])
  map.set('water', ['linear(to-t, blue.400, blue.400)', 'gray.800'])
  map.set('grass', ['linear(to-t, green.300, green.300)', 'gray.800'])
  map.set('electric', ['linear(to-t, yellow.300, yellow.300)', 'gray.800'])
  map.set('psychic', ['linear(to-t, pink.500, pink.500)', 'gray.800'])
  map.set('ice', ['linear(to-t, blue.200, blue.200)', 'gray.800'])
  map.set('dragon', ['linear(to-t, orange.400, blue.400)', 'gray.800'])
  map.set('dark', ['linear(to-t, gray.600, gray.700)', 'gray.200'])
  map.set('fairy', ['linear(to-t, pink.200, pink.200)', 'gray.800'])
  map.set('unknown', ['gray', 'gray.800'])
  map.set('shadow', ['gray', 'gray.800'])
  return map.get(type) ?? ['linear(to-t, gray.100, gray.100)', 'gray.800'];
}