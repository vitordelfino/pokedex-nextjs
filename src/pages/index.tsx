import React from "react";
import Head from "next/head";
import {
  Heading,
  Text,
  VStack,
  Link,
  Center,
  Stack,
  Img,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

type IndexProps = {
  count: number;
};

const MotionCenter = motion(Center);

const Index = ({ count }: IndexProps) => {
  return (
    <MotionCenter
      h="100vh"
      pb="60"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Stack
        direction={["column", "column", "column", "row"]}
        alignItems="center"
      >
        <Img
          src="/pokedex.svg"
          alt="pokedex"
          boxSize={["125", "150", "200", "250", "300"]}
        />
        <VStack justifyContent="center" textAlign="center">
          <Heading size="2xl">Pokedex</Heading>
          <Text
            fontSize={["md", "md", "lg", "lg", "xl"]}
            pt="0"
            pb="0"
            pl={["2", "2", "0", "0"]}
            pr={["2", "2", "0", "0"]}
          >
            An Pokedex app developed by{" "}
            <Link
              href="https://vitordelfino.dev"
              fontWeight="500"
              color="red.400"
              isExternal
            >
              Vitor Delfino
            </Link>
            , using{" "}
            <Tag verticalAlign="middle">
              <Link href="https://nextjs.org/docs">Next.JS</Link>
            </Tag>{" "}
            +{" "}
            <Tag verticalAlign="middle">
              <Link href="https://chakra-ui.com">Chakra UI</Link>
            </Tag>
          </Text>
          <Text fontSize={["sm", "sm", "md", "md", "lg"]}>
            You can search for{" "}
            <Text as="span" decoration="underline" fontWeight="medium">
              {count}
            </Text>{" "}
            different pokemons
          </Text>
        </VStack>
      </Stack>
    </MotionCenter>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await res.json();

  return {
    props: {
      count: data.count || 0,
    },
  };
}

export default Index;
