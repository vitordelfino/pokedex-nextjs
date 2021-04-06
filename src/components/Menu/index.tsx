import { useBreakpointValue, Box } from "@chakra-ui/react";
import { useState } from "react";

import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
export const Menu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const mobileVariant = { navigation: 'drawer', navigationButton: true };
  const desktopVariant = { navigation: 'sidebar', navigationButton: false };

  const variants = useBreakpointValue({ base: mobileVariant, lg: desktopVariant });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
    <Sidebar variant={variants?.navigation} isOpen={isSidebarOpen}
      onClose={toggleSidebar}/>
    <Box>
      <Header
        showSidebarButton={variants?.navigationButton}
        onShowSidebar={toggleSidebar}
      />
    </Box>
    </>
  )
}