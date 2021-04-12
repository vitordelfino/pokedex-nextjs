import { Box, Flex } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
  onShowSidebar: () => void
  showSidebarButton?: boolean
}

export const Header = ({ showSidebarButton = true, onShowSidebar }: Props) => {

  return (
    <Flex p={4} color="white" justifyContent="start"  >
      <Box flex="1" position="fixed" zIndex="1" top="5">
        {showSidebarButton && (
          <HamburgerIcon color="gray.50" w={8} h={8} onClick={onShowSidebar} />
        )}
      </Box>      
    </Flex>
  )
}

