import {
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
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaPlus } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "hooks";

export const Header = () => {
  const { user, setUser } = useUser();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");

  const handleSubmit = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", term);
    setSearchParams(params.toString());
  };

  useEffect(() => {
    setSearchTerm(searchParams.get("search") || "");
  }, [searchParams]);

  return (
    <Box w="full" borderBottomWidth="1px">
      <Container maxW={{ sm: "6xl", "2xl": "8xl" }} px={0}>
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
            <ChakraLink
              href="https://presedinte.md/"
              fontSize="sm"
              display="flex"
              alignItems="center"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Emblema_Guvernului_Republicii_Moldova.png"
                boxSize="20px"
                mr="0.5rem"
              />
              Site-ul oficial al Preşedinţiei RM
            </ChakraLink>
            <Flex marginLeft="auto" alignItems="center" paddingRight="1rem">
              <Button
                size="sm"
                as="a"
                href="#"
                variant="link"
                color="black"
                fontSize="sm"
                fontWeight="light"
              >
                EN
              </Button>
              <Box width="1px" height="20px" backgroundColor="gray.200" marginX="0.5rem" />
              <Button
                size="sm"
                as="a"
                href="#"
                variant="link"
                color="black"
                fontSize="sm"
                fontWeight="light"
              >
                Ajutor
              </Button>
              <Box width="1px" height="20px" backgroundColor="gray.200" marginX="0.5rem" />
              {user ? (
                <HStack spacing={2}>
                  <Link to="/profile">
                    <Text fontSize="sm" fontWeight="light" _hover={{ textDecoration: "underline" }}>
                      {user.name} {user.surname}
                    </Text>
                  </Link>
                  <Box width="1px" height="20px" backgroundColor="gray.200" marginX="0.5rem" />
                  <Button
                    size="sm"
                    variant="link"
                    color="black"
                    fontSize="sm"
                    fontWeight="light"
                    onClick={() => setUser(null)}
                  >
                    Ieșire
                  </Button>
                </HStack>
              ) : (
                <Link to="/mpass">
                  <Text fontSize="sm" fontWeight="light">
                    Autentificare
                  </Text>
                </Link>
              )}
            </Flex>
          </Box>
        </Grid>

        <Flex
          alignItems="center"
          w="full"
          paddingTop="0.5rem"
          justifyContent="space-between"
          paddingBottom="0.5rem"
          px={0}
        >
          <Link to="/">
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

          <Flex alignItems="center" paddingRight="0rem">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(searchTerm);
              }}
            >
              <InputGroup size="lg" w="550px">
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
          <Link to={user ? "/petitions/create" : "/mpass?createPetition"}>
            <Button
              width="auto"
              gap={4}
              marginX="auto"
              rounded="full"
              fontWeight="bold"
              colorScheme="blue"
              size="lg"
            >
              Creaţi o petiţie
              <FaPlus />
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
