import { Button, Container, Image } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useUser } from "hooks";

const user = {
  name: "Ion",
  surname: "Creanga",
  id: "123456789",
  location: "Chisinau",
  isResident: true,
  birthDate: new Date("1950-01-01"),
};

export const Mpass = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const petitionId = params.get("petitionId");

  const handleClick = () => {
    setUser(user);
    if (petitionId !== null) {
      navigate(`/petitions/${petitionId}`);
    } else {
      navigate("/");
    }
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
      <Image src="https://mpass.gov.md/images/logos/mpass-logo.png" w="50%" marginX="auto" />
      <Button
        size="lg"
        colorScheme="teal"
        marginX="auto"
        display="block"
        onClick={handleClick}
        mt={20}
      >
        Autentificare
      </Button>
    </Container>
  );
};
