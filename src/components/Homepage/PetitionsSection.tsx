import { HStack, VStack, Heading, Select, Button, Divider } from "@chakra-ui/react";
import { Pagination } from "components/Pagination";
import { PetitionsList } from "components/PetitionsList";
import { PopularPetitionsList } from "components/PopularPetitionsList";
import { useSearchParams } from "react-router-dom";
import { Petition } from "types";

import { petitions } from "data/petitions.json";

const categories = [
  {
    value: "all",
    label: "Toate categoriile",
  },
  {
    value: "educatie",
    label: "Educatie",
  },
  {
    value: "mediu",
    label: "Mediu",
  },
  {
    value: "infrastructura",
    label: "Infrastructura",
  },
  {
    value: "dezvoltare",
    label: "Dezvoltare regionala",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "energie",
    label: "Energie",
  },
  {
    value: "turism",
    label: "Turism",
  },
  {
    value: "drepturile_animalelor",
    label: "Drepturile animalelor",
  },
  {
    value: "tehnologie",
    label: "Tehnologie",
  },
  {
    value: "agricultura",
    label: "Agricultura",
  },
];

export const PetitionsSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sortBy = searchParams.get("sortBy") || "popular";
  const page = searchParams.get("page") || "1";

  const pages = 50;

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    setSearchParams(params.toString());
  };

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    setSearchParams(params.toString());
  };

  const setSortBy = (sortBy: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", sortBy);
    setSearchParams(params.toString());
  };

  return (
    <HStack
      as="section"
      w="full"
      h="max-content"
      justifyContent="space-between"
      alignItems="stretch"
      py={20}
    >
      <VStack spacing={6} flex="2" borderRight="1px" borderColor="gray.200" pr={10}>
        <Heading size="xl" mb={8}>
          Petitii in decurs de semnare
        </Heading>

        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Select
            w="xs"
            rounded="full"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option value={category.value} key={category.value}>
                {category.label}
              </option>
            ))}
          </Select>

          <HStack h="40px" spacing={4}>
            <Button
              variant={sortBy === "popular" ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => setSortBy("popular")}
              rounded="full"
            >
              Cele mai populare
            </Button>
            <Divider orientation="vertical" />
            <Button
              variant={sortBy === "newest" ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => setSortBy("newest")}
              rounded="full"
            >
              Cele mai noi
            </Button>
          </HStack>
        </HStack>

        <Pagination page={parseInt(page)} setPage={setPage} totalPages={pages} />

        <PetitionsList petitions={petitions as unknown as Petition[]} />

        <Pagination page={parseInt(page)} setPage={setPage} totalPages={pages} />
      </VStack>

      <VStack spacing={6} flex="1" pl={7}>
        <Heading size="xl" mb={7}>
          Petitii populare
        </Heading>
        <PopularPetitionsList petitions={petitions as unknown as Petition[]} />
      </VStack>
    </HStack>
  );
};
