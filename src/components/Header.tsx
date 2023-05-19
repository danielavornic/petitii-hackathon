import {
  Link,
  Text,
  Button,
  Container,
  Box,
  Flex,
  Grid,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  Image,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaPlus } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useUser } from "hooks";

export const Header = () => {
  const { user } = useUser();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  const handleSubmit = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", term);
    setSearchParams(params.toString());
  };

  return (
    <Box w="full" borderBottomWidth="1px">
      <Container maxW="8xl" px={0}>
        <Grid templateColumns="repeat(16, 1fr)" gap={4} w="full">
          <Box
            gridColumn="span 16"
            sx={{ display: "center" }}
            justifyContent="center"
            borderBottomWidth="1px"
            borderBottomLeftRadius="lg"
            borderRightWidth="1px"
            borderBottomRightRadius="lg"
            borderLeftWidth="1px"
            width="auto"
            padding="1.5"
          >
            <Text fontSize="sm">
              <Link href="https://presedinte.md/">
                <Stack direction="row">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Emblema_Guvernului_Republicii_Moldova.png"
                    boxSize="20px"
                  />
                  <Text fontSize="sm">Site-ul oficial al Preşedinţiei RM</Text>
                </Stack>
              </Link>
            </Text>
            <Flex marginLeft="auto" alignItems="center" paddingRight="1rem">
              <Button
                size="sm"
                as="a"
                href="#"
                marginRight="0.5rem"
                variant="link"
                color="black"
                fontSize="sm"
                fontWeight="light"
              >
                Ajutor
              </Button>
              <Box width="1px" height="20px" backgroundColor="gray.200" marginRight="0.5rem" />
              <Button
                size="sm"
                as="a"
                href="#"
                variant="link"
                color="black"
                fontSize="sm"
                fontWeight="light"
              >
                {user ? (
                  <Link href="/profile">
                    <Text fontSize="sm" fontWeight="light">
                      {user.name} {user.surname}
                    </Text>
                  </Link>
                ) : (
                  <Link href="https://mpass.gov.md/login/saml/">
                    <Text fontSize="sm" fontWeight="light">
                      Autentificare
                    </Text>
                  </Link>
                )}
              </Button>
            </Flex>
          </Box>
        </Grid>

        <Flex alignItems="center" w="full" paddingTop="0.5rem" paddingBottom="0.5rem" px={0}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <HStack role="group" spacing={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Coat_of_arms_of_Moldova.svg/640px-Coat_of_arms_of_Moldova.svg.png"
                alt="Site Logo"
                width="70px"
                height="70px"
              />
              <Box marginLeft="1rem" fontFamily="inherit" fontSize="18px" paddingTop="1rem">
                <Text fontSize="2xl" as="b">
                  PETIŢII ELECTRONICE
                </Text>
                <Text fontSize="smaller">Reprezentanţa oficială online a Preşedenţiei RM</Text>
                <br />
              </Box>
            </HStack>
          </Link>
          <Button
            width="auto"
            gap={4}
            marginX="auto"
            rounded="full"
            fontWeight="bold"
            colorScheme="blue"
            size="lg"
            as="a"
            // href={user ? "/petitions/create" : "https://mpass.gov.md/login/saml/"}
            href="petitions/create"
          >
            Creaţi o petiţie
            <FaPlus />
          </Button>
          <Flex alignItems="center" paddingRight="0rem">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(searchTerm);
              }}
            >
              <InputGroup size="lg">
                <Input
                  placeholder="Căutaţi petiţia"
                  rounded="full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputRightElement>
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    rounded="full"
                    icon={<SearchIcon />}
                  />
                </InputRightElement>
              </InputGroup>
            </form>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
