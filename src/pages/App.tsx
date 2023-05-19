import { Petition } from "types";

import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";

const petition: Petition = {
  id: 1,
  initiator: {
    name: "John",
    surname: "Doe",
    id: "123456789",
    location: "New York",
    isResident: true,
    birthDate: new Date("1990-01-01"),
  },
  name: "Awarding the title of Hero of Ukraine (posthumously) to Mazurok soldier Vitaly Serhiyovych.",
  date: new Date(),
  nrSign: 1000,
  content: "We urge the government to invest in renewable energy sources.",
  toWho: "Government officials",
  statut: "Open",
  semnat: [
    {
      name: "Alice",
      surname: "Smith",
      id: "987654321",
      location: "California",
      isResident: true,
      birthDate: new Date("1985-05-10"),
    },
    {
      name: "Bob",
      surname: "Johnson",
      id: "654321987",
      location: "Texas",
      isResident: true,
      birthDate: new Date("1992-09-20"),
    },
  ],
  feedback: "Thank you for your support!",
  deadLine: new Date("2023-06-30"),
  Category: ["Environment", "Energy"],
};

export const App = () => {
  return (
    <div className="App">
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Meeting scheduling{" "}
            <Text as={"span"} color={"primary.400"}>
              made easy
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Never miss a meeting. Never be late for one too. Keep track of your meetings and receive
            smart reminders in appropriate times. Read your smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"primary"}
              bg={"primary.400"}
              _hover={{ bg: "primary.500" }}
            >
              Get started
            </Button>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
      );
    </div>
  );
};
