import { Container } from "@chakra-ui/react";
import { Header, HomeHero, PetitionsSection, Footer } from "components";

export const App = () => {
  return (
    <>
      <Header />
      <HomeHero />
      <Container maxW="8xl">
        <PetitionsSection />
      </Container>
      <Footer />
    </>
  );
};
