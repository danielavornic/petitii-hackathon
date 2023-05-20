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
import { useQuery } from "@tanstack/react-query";
import { petitions } from "api";
import { Pagination } from "components/Pagination";
import { PetitionsList } from "components/PetitionsList";
import { PopularPetitionsList } from "components/PopularPetitionsList";
import { useSearchParams } from "react-router-dom";
import { Petition } from "types";

import { petitions as popularPetitionsData } from "data/petitions.json";

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
  const search = searchParams.get("search") || "";

  const pages = 10;

  const { data: categories, isSuccess: isCategoriesSuccess } = useQuery({
    queryKey: ["categories"],
    queryFn: petitions.getCategories,
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [
      "petitions",
      {
        category,
        sortBy,
        page,
        search,
      },
    ],
    queryFn: () => petitions.getList({ category, sortBy, page, search }),
    select: (data) => {
      return search
        ? data?.filter((petition: Petition) =>
            petition.name.toLowerCase().includes(search.toLowerCase()),
          )
        : data;
    },
  });

  const updateSearchParams = (key: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value.toString());
    setSearchParams(params.toString());
  };

  const setPage = (page: number) => {
    updateSearchParams("page", page);
  };

  const setCategory = (category: string) => {
    updateSearchParams("category", category);
  };

  const setSortBy = (sortBy: string) => {
    updateSearchParams("sortBy", sortBy);
  };

  const setStatus = (status: string) => {
    updateSearchParams("status", status);
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
          {search ? `Rezultatele căutării pentru "${search}"` : "Petiții"}
        </Heading>

        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Select
            w="xs"
            rounded="full"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {isCategoriesSuccess &&
              categories?.length &&
              categories.map((category: any) => (
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

        {/* {arePetitionsLoading && <Loader />} */}

        {isSuccess && data?.length && <PetitionsList petitions={data as unknown as Petition[]} />}

        <Pagination page={parseInt(page)} setPage={setPage} totalPages={pages} />
      </VStack>

      <VStack spacing={6} flex="1" pl={7}>
        <Heading size="xl" mb={7}>
          Trending
        </Heading>
        <PopularPetitionsList
          petitions={popularPetitionsData.slice(0, 5) as unknown as Petition[]}
        />
      </VStack>
    </HStack>
  );
};
