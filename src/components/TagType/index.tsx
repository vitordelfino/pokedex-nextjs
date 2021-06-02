import { Tag, Text, TagProps } from '@chakra-ui/react';
import { pokemonTypeColor } from '../../utils/colors';
import { firstLetterUpper } from '../../utils/strings';

interface TagTypeProps extends TagProps {
  text: string;
}

const TagType = ({ text, size = 'sm' }: TagTypeProps): JSX.Element => {
  const [gradient, color] = pokemonTypeColor(text);
  return (
    <Tag size={size} verticalAlign="middle" bgGradient={gradient} color={color}>
      {/* {firstLetterUpper(t.type.name)} */}
      <Text color={color} isTruncated>
        {firstLetterUpper(text)}
      </Text>
    </Tag>
  );
};

export default TagType;
