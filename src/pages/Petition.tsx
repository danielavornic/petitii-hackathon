import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  VStack,
  Text,
  Tag,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { petitions } from "api";
import { Layout, Loader, PetitionProgressCard } from "components";
import { FaFacebook, FaTwitter, FaEnvelope, FaLink } from "react-icons/fa";
import { useParams } from "react-router-dom";

export const Petition = () => {
  const params = useParams();
  const id = params.petitionId;

  const {
    data: petitie,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["petition", id],
    queryFn: () => petitions.getById(id as string),
  });

  return (
    <Layout>
      {isLoading ? (
        <Flex w={"full"} h="100vh" justifyContent="center" mt={20} color="white">
          <Loader />
        </Flex>
      ) : isSuccess ? (
        <>
          <Flex w={"full"} h="200px" bg="primary.600" color="white">
            <VStack w={"full"} justify={"center"} px={8}>
              <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
                <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={import.meta.env.BASE_URL}>Acasa</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Petiția #{id}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
                <Heading as="h1" size="2xl" my={4}>
                  Petiția #{id}
                </Heading>
              </Stack>
            </VStack>
          </Flex>
          <Container maxW="8xl" px={0} pb="100px">
            <HStack spacing={12} my={8} alignItems="start" position="relative">
              <VStack w="full" align={"flex-start"} justifyContent="start">
                <Heading as="h2" size="2xl" my={4}>
                  {petitie.name}
                </Heading>

                <Heading as="h3" size="sm" pt={4} pb={2} fontFamily="serif" fontWeight={400}>
                  Initiator: {petitie.initiator}
                </Heading>

                <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                  Data depunerii: {petitie.date.split("T")[0]}
                </Heading>

                <Text fontSize="lg" pt={8} pb={2} whiteSpace="pre-line">
                  {petitie.content}
                </Text>

                <HStack pt={4} pb={2}>
                  <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                    Categorie:{" "}
                  </Heading>
                  <Tag>{petitie.category}</Tag>
                </HStack>
              </VStack>
              <Box w="280px" position="sticky" top={4}>
                <PetitionProgressCard petition={petitie} />
                <VStack w="full" align={"flex-start"} justifyContent="start" spacing={4} pt={12}>
                  <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                    Distribuie petiția
                  </Heading>
                  <HStack spacing={4}>
                    <IconButton
                      aria-label="Share on Facebook"
                      icon={<FaFacebook />}
                      rounded="full"
                    />
                    <IconButton aria-label="Share on Twitter" icon={<FaTwitter />} rounded="full" />
                    <IconButton aria-label="Share on Email" icon={<FaEnvelope />} rounded="full" />
                    <IconButton aria-label="Copy link" icon={<FaLink />} rounded="full" />
                  </HStack>
                </VStack>
              </Box>
            </HStack>
          </Container>
        </>
      ) : (
        <Text>Something went wrong</Text>
      )}
    </Layout>
  );
};
