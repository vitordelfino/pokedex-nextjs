import {
  Text,
  Link,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  VStack,
  List,
  ListItem
} from "@chakra-ui/react";

import NextLink from "next/link";
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
type SideBarProps = {
  variant?: string;
  isOpen: boolean;
  onClose: () => void;
};

type MenuContentProps = {
  onClick: () => void
}

export const MenuContent = ({ onClick }: MenuContentProps) => {

  const router = useRouter()
  console.log(router.pathname)
  const items = [
    {
      to: "/",
      label: "Home"
    },
    {
      to: "/pokemons",
      label: "Pokemons"
    },
    {
      to: "/evolutions",
      label: "Evolutions"
    }
  ]

  return (
    <List spacing={3}>
      {items.map((item, i) => (
        <ListItem key={i} cursor="pointer" onClick={onClick}>
          <Link as={NextLink} href={item.to}>
            <Text fontSize="2xl" textDecoration={router.pathname === item.to ? "underline" : "unset"}>{item.label}</Text>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export const Sidebar = ({ variant, isOpen, onClose }: SideBarProps) => {
  const MotionBox = motion(Box)
  return variant === "sidebar" ? (
    <MotionBox
      nitial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      position="fixed"
      left={0}
      p={5}
      w={56}
      top={0}
      h="100%"
      bg="gray.800"
      color="gray.50"
      borderRight="0.5px solid #4A5568"
    >
      <VStack spacing={6} alignItems="flex-start">
        <Heading></Heading>

        <MenuContent onClick={() => {}}/>
      </VStack>
    </MotionBox>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
      <DrawerOverlay>
        <DrawerContent bg="gray.800" color="gray.50">
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading></Heading>
          </DrawerHeader>
          <DrawerBody>
            <MenuContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
