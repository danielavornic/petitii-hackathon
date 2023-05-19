import { Container } from "@chakra-ui/react";
import { HomeHero, PetitionsSection } from "components";

export const App = () => {
  return (
    <Container maxW="8xl">
      <HomeHero />
      <PetitionsSection />
    </Container>
  );
};
