import { Stack, Flex, Text, VStack, useBreakpointValue, Heading } from "@chakra-ui/react";

export const HomeHero = () => {
  return (
    <Flex w={"full"} h="300px" bg="primary.600">
      <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })}>
        <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
          <Text color={"white"} fontSize="xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          </Text>
          <Heading color={"white"} fontSize="6xl">
            Lorem ipsum dolor sit amet <br />{" "}
            <span className="font-serif" style={{ fontWeight: 400 }}>
              adipiscing elit
            </span>
          </Heading>
        </Stack>
      </VStack>
    </Flex>
  );
};
