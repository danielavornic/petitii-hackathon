import { Link } from "react-router-dom";
import { CircularProgress, CircularProgressLabel, HStack, Heading, Text } from "@chakra-ui/react";

import { Petition } from "types";

interface PopularPetitionItemProps {
  petition: Petition;
}

export const PopularPetitionItem = ({ petition }: PopularPetitionItemProps) => {
  const { id, name, nrSign, nrSignNeeded } = petition;

  const progress = Math.floor((nrSign / nrSignNeeded) * 100);

  return (
    <Link to={`/petition/${id}`}>
      <HStack spacing={4} role="group" w="full" justifyContent="space-between">
        <Heading size="sm" transition="all 0.2s" _groupHover={{ color: "primary.500" }}>
          {name}
        </Heading>
        <CircularProgress value={progress} color="blue.500">
          <CircularProgressLabel>{progress}%</CircularProgressLabel>
        </CircularProgress>
      </HStack>
    </Link>
  );
};