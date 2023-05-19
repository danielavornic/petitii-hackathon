import {
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  VStack,
  Text,
  HStack,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { UserContext } from "context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Petition } from "types";

interface PetitionProgressCardProps {
  petition: Petition;
}

export const PetitionProgressCard = ({ petition }: PetitionProgressCardProps) => {
  const { user } = useContext(UserContext);
  const { statut, nrSign, nrSignNeeded, deadLine } = petition;

  let cardColor;
  switch (statut) {
    case "Approved":
      cardColor = "green.400";
      break;
    case "Disapproved":
      cardColor = "red.400";
      break;
    case "InProgress":
      cardColor = "blue.400";
      break;
    case "Pending":
      cardColor = "grey.400";
      break;
    default:
      cardColor = "blue.400";
      break;
  }

  const percentage = (nrSign * 100) / nrSignNeeded;
  const deadlineTime = new Date(deadLine);
  const daysLeft = Math.floor((deadlineTime.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  let signButton;
  if (user === null) {
    signButton = (
      <Button
        width="200px"
        marginLeft="auto"
        marginRight="auto"
        rounded="full"
        colorScheme="red"
        variant="link"
        fontWeight={500}
      >
        <Link to="/mpass">
          Autorizați-vă pentru <br /> a semna petiția
        </Link>
      </Button>
    );
  } else {
    signButton = (
      <Button width="200px" marginLeft="auto" marginRight="auto" rounded="full" colorScheme="blue">
        <Link to="/msign">Semnați petiţia</Link>
      </Button>
    );
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      justify="start"
      overflow="hidden"
      variant="outline"
      p={4}
      transition="all 0.2s"
      role="group"
      _hover={{ boxShadow: "sm" }}
      w="280px"
    >
      <CardBody flexDir="column" display="flex" alignItems="center">
        <VStack spacing="5">
          <Heading size="md">Semnături</Heading>
          <CircularProgress value={percentage} size="200px" color={cardColor} thickness="5px">
            <CircularProgressLabel>
              <VStack>
                <Heading size="lg">{petition.nrSign}</Heading>
                <Text fontSize="sm" fontFamily="serif">
                  din {petition.nrSignNeeded}
                  <br />
                  necesare
                </Text>
              </VStack>
            </CircularProgressLabel>
          </CircularProgress>
          <VStack>
            <Text fontSize="md" fontFamily="serif">
              {petition.statut}
            </Text>
            <Text fontSize="sm" fontFamily="serif" mt={2}>
              {daysLeft} zile ramase
            </Text>
          </VStack>
          {signButton}
        </VStack>
      </CardBody>
    </Card>
  );
};
