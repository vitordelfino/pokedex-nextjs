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
  CenterProps
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { QueryClient } from "react-query";
import { getCountPokemons, useGetCountPokemons } from "../hooks/useAllPokemons";
import { dehydrate } from "react-query/hydration";

const MotionCenter = motion<CenterProps>(Center);

const Index = () => {
  const { data } = useGetCountPokemons();
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
      transition={{ duration: "0.5" }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="vitordelfino" key="twhandle" />
        <meta
          name="twitter:image"
          content="https://i.imgur.com/md0T87F.png"
          key="twimage"
        />

        <meta
          property="og:url"
          content="www.pokedex.dev/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/md0T87F.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="Pokedex App" key="ogsitename" />
        <meta property="og:title" content="Pokemons" key="ogtitle" />
        <meta
          property="og:description"
          content="Pokedex app developer with Next.js"
          key="ogdesc"
        />
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
              {data.count}
            </Text>{" "}
            different pokemons
          </Text>
        </VStack>
      </Stack>
    </MotionCenter>
  );
};

export async function getStaticProps() {
  
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('pokemons', getCountPokemons);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Index;
