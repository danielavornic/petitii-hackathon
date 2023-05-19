import { Petition } from "types";
import { Header } from "components";
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
      <Header></Header>
    </div>
  );
};
