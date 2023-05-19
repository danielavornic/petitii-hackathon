import { VStack } from "@chakra-ui/react";

import { Petition } from "types";
import { PetitionCard } from "./PetitionCard";

interface PetitionsListProps {
  petitions: Petition[];
}

export const PetitionsList = ({ petitions }: PetitionsListProps) => {
  return (
    <VStack spacing={4} alignItems="stretch" w="full">
      {petitions.map((petition) => (
        <PetitionCard petition={petition} key={petition.id} />
      ))}
    </VStack>
  );
};
