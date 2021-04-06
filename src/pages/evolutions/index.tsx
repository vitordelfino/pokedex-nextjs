import { Center } from '@chakra-ui/react'
import {motion} from 'framer-motion';
const Evolutions = () => {
  const MotionCenter = motion(Center);
  return (
    <MotionCenter
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}>
      Evolutions
    </MotionCenter>
  )
}

export default Evolutions;