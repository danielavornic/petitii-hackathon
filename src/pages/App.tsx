import { Container } from "@chakra-ui/react";
import { HomeHero, PetitionsSection } from "components";
import Footer from "components/Footer";

export const App = () => {
  return (
    <>
      <HomeHero />
      <Container maxW="8xl">
        <PetitionsSection />
      </Container>
      <Footer/>
    </>
  );
};
