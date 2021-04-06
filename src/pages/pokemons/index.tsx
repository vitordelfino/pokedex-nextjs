import { Center } from '@chakra-ui/react'
import {motion} from 'framer-motion';
const Pokemons = () => {
  const MotionCenter = motion(Center);
  return (
    <MotionCenter initial="hidden" animate="visible"
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    }}>
      Pokemons
    </MotionCenter>
  )
}

export default Pokemons;