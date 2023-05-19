import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Stack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Header } from "components";

export const CreatePetition = () => {
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
      <Container maxW="8xl"></Container>
    </>
  );
};
