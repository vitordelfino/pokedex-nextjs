import { Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useSearchPokemon } from '../../hooks/useSearchPokemon';

const Evolutions = (): JSX.Element => {
  const MotionCenter = motion(Center);
  const { data } = useSearchPokemon('bulbasaur');
  return (
    <MotionCenter
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {data && <span>{data.name}</span>}
    </MotionCenter>
  );
};

export default Evolutions;
