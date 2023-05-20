import {
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  VStack,
  Text,
  Button,
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
  const { id, statut, nrSign, nrsignneeded, deadLine, initiator, semnat } = petition;

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

  const percentage = (nrSign * 100) / nrsignneeded;
  const deadlineTime = new Date(deadLine);
  const daysLeft = Math.floor((deadlineTime.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  let signButton;

  const commonButtonProps = {
    width: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    rounded: "full",
    colorScheme: "blue",
  };

  if (user === null) {
    signButton = (
      <Button {...commonButtonProps} colorScheme="red" variant="link" fontWeight={500}>
        <Link to={`/mpass?petitionId=${id}`}>
          Autorizați-vă pentru <br /> a semna petiția
        </Link>
      </Button>
    );
  } else if (initiator !== `${user.name} ${user.surname}`) {
    const signedByUser = semnat && semnat.split(",").includes(`${user.name} ${user.surname}`);

    signButton = (
      <Button {...commonButtonProps} isDisabled={!!signedByUser}>
        <Link to={`/msign?petitionId=${id}`}>
          {signedByUser ? "Ați semnat petiția" : "Semnați petiţia"}
        </Link>
      </Button>
    );
  } else {
    signButton = (
      <Button {...commonButtonProps}>
        <Link to={`/manage?petitionId=${id}`}>Administrați petiţia</Link>
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
                  din {petition.nrsignneeded}
                  <br />
                  necesare
                </Text>
              </VStack>
            </CircularProgressLabel>
          </CircularProgress>
          <VStack>
            <Text fontSize="md" fontFamily="serif" fontWeight="bold">
              {petition.statut}
            </Text>
            <Text fontSize="sm" fontFamily="serif" mt={2}>
              60 zile ramase
            </Text>
          </VStack>
          {signButton}
        </VStack>
      </CardBody>
    </Card>
  );
};
