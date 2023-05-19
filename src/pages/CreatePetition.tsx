import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

import { Header, PetitionForm } from "components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PetitionFormData } from "types";

const initalState: PetitionFormData = {
  title: "",
  content: "",
  Category: [],
  toWho: "",
  region: "",
  checkedData: false,
  consentedData: false,
};

const CreatePetitionForm = ({
  setIsSubmitted,
}: {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState(initalState);
  const [errors, setErrors] = useState(initalState);

  return (
    <>
      <Header />
      <Flex w={"full"} h="200px" bg="primary.600" color="white">
        <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Creați o petiție</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading as="h1" size="2xl" my={4}>
              Creați o petiție
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW="8xl">
        <PetitionForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          setIsSubmitted={setIsSubmitted}
        />
      </Container>
    </>
  );
};

const CreatePetitionSubmitted = () => {
  const navigate = useNavigate();

  const handleSignClick = () => {
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
        onClick={handleSignClick}
        mt={20}
      >
        Semnează petiția
      </Button>
    </Container>
  );
};

export const CreatePetition = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isSubmitted) {
    return <CreatePetitionForm setIsSubmitted={setIsSubmitted} />;
  }

  return <CreatePetitionSubmitted />;
};
