import { Button, Container, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useUser } from "hooks";

const user = {
  name: "Ion",
  surname: "Creanga",
  id: "123456789",
  location: "Chisinau",
  isResident: true,
  birthDate: new Date("1950-01-01"),
};

export const Msign = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // post petition
    navigate("/petitions/1");
  };

  return (
    <Container
      maxW="8xl"
      py={20}
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Image src="https://msign.gov.md/images/msign-logo.png" w="50%" marginX="auto" />
      <Button
        size="lg"
        colorScheme="purple"
        marginX="auto"
        display="block"
        onClick={handleClick}
        mt={20}
      >
        Semnează petiția
      </Button>
    </Container>
  );
};
