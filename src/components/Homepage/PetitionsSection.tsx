import {
  HStack,
  VStack,
  Heading,
  Select,
  Button,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
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

const statuses = [
  {
    label: "În colectare",
    value: "in_signing",
    color: "blue",
  },
  {
    label: "În considerare",
    value: "in_approval",
    color: "yellow.400",
  },
  {
    label: "În implementare",
    value: "in_implementation",
    color: "yellow",
  },
  {
    label: "Finalizate",
    value: "finished",
    color: "green",
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

  const setStatus = (status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", status);
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
          Petiții
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
              variant={sortBy === "popular" ? "outline" : "ghost"}
              colorScheme="blue"
              onClick={() => setSortBy("popular")}
              rounded="full"
            >
              Cele mai populare
            </Button>
            <Divider orientation="vertical" />
            <Button
              variant={sortBy === "newest" ? "outline" : "ghost"}
              colorScheme="blue"
              onClick={() => setSortBy("newest")}
              rounded="full"
            >
              Cele mai noi
            </Button>
          </HStack>
        </HStack>

        <Tabs w="full">
          <TabList>
            {statuses.map((status) => (
              <Tab key={status.value} onClick={() => setStatus(status.value)}>
                {status.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>

        <PetitionsList petitions={petitions as unknown as Petition[]} />

        <Pagination page={parseInt(page)} setPage={setPage} totalPages={pages} />
      </VStack>

      <VStack spacing={6} flex="1" pl={7}>
        <Heading size="xl" mb={7}>
          Populare
        </Heading>
        <PopularPetitionsList petitions={petitions as unknown as Petition[]} />
      </VStack>
    </HStack>
  );
};
