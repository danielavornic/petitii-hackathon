import { Container } from "@chakra-ui/react";
import { HomeHero, PetitionsSection } from "components";

export const App = () => {
  return (
    <>
      <HomeHero />
      <Container maxW="8xl">
        <PetitionsSection />
      </Container>
    </>
  );
};
