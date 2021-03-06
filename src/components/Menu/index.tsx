import { useBreakpointValue, Box } from '@chakra-ui/react';
import { useState, memo } from 'react';

import { Sidebar } from '../Sidebar';
import Header from '../Header';

const Menu = (): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const mobileVariant = { navigation: 'drawer', navigationButton: true };
  const desktopVariant = { navigation: 'sidebar', navigationButton: false };
  const variants = useBreakpointValue({
    base: mobileVariant,
    lg: desktopVariant,
  });
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Sidebar
        variant={variants?.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>
    </>
  );
};
export default memo(Menu);
