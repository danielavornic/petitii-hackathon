import { Box, Flex, VStack } from "@chakra-ui/react";

import { Petition } from "types";
import { PetitionCard } from "./PetitionCard";
import { Loader } from "./Loader";
import { Pagination } from "./Pagination";

interface PetitionsListProps {
  petitions: Petition[];
  isLoading?: boolean;
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const PetitionsList = ({
  petitions,
  isLoading,
  page,
  totalPages,
  setPage,
}: PetitionsListProps) => {
  console.log(petitions);
  return (
    <VStack spacing={4} alignItems="stretch" w="full">
      {isLoading ? (
        <Flex w="full" justifyContent="center" pt={4}>
          <Loader />
        </Flex>
      ) : petitions && petitions.length > 0 ? (
        <>
          {petitions.map((petition) => (
            <PetitionCard petition={petition} key={petition.id} />
          ))}
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      ) : (
        <Box w="full" textAlign="center" color="gray.500" fontSize="lg" py={8}>
          Nu există petiții
        </Box>
      )}
    </VStack>
  );
};
