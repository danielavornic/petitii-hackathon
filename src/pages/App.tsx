import { Petition } from "types";

import { Box, Container, Divider, HStack, Heading, VStack } from "@chakra-ui/react";
import { HomeHero, PetitionCard, PetitionsList, PopularPetitionsList } from "components";

import { petitions } from "./petitions.json";

export const App = () => {
  return (
    <Container maxW="8xl">
      <HomeHero />
      {/* <PetitionCard petition={petition} /> */}

      <HStack w="full" h="max-content" justify="between" alignItems="stretch">
        <VStack spacing={6} flex="2" borderRight="1px" borderColor="gray.200" pr={10}>
          <Heading size="xl" fontFamily="serif" mb={8}>
            Petitii recente
          </Heading>
          <PetitionsList petitions={petitions as unknown as Petition[]} />
        </VStack>
        <VStack spacing={6} flex="1" pl={10}>
          <Heading size="xl" fontFamily="serif" mb={7}>
            Petitii populare
          </Heading>
          <PopularPetitionsList petitions={petitions as unknown as Petition[]} />
        </VStack>
      </HStack>
    </Container>
  );
};
