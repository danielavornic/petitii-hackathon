import { Card, CardBody, CircularProgress, CircularProgressLabel, Heading, VStack, Text, HStack, Button} from "@chakra-ui/react";
import { UserContext } from "context";
import { useContext } from "react";
import { Petition } from "types";

interface PetitionProgressCardProps {
  petition: Petition;
}

export const PetitionProgressCard = ({ petition }: PetitionProgressCardProps) => {
  const user = useContext(UserContext)
  const { statut, nrSign, nrSignNeeded, deadLine } = petition;
  
  let cardColor;
  switch (statut) {
    case "Approved": cardColor = "green.400"; break
    case "Disapproved": cardColor = "red.400"; break
    case "InProgress": cardColor = "blue.400"; break
    case "Pending": cardColor = "grey.400"; break
    default: cardColor = "blue.400"; break
  }
  
  const percentage = nrSign * 100 / nrSignNeeded;
  const deadlineTime = new Date(deadLine);
  const daysLeft = Math.floor((deadlineTime.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  
  let signButton;
  if (user.user !== null) {
    signButton = <Button width='200px' marginLeft="auto" marginRight="auto" rounded="full" fontWeight='light' colorScheme='red' variant='link'>Autorizați-vă pentru <br/> a semna petiția</Button>
  } else {
    signButton = <Button width='200px' marginLeft="auto" marginRight="auto" rounded="full" fontWeight='light' colorScheme='blue'>Semnați petiţia</Button>

  }
  return (
    <Card
        direction={{ base: "column", sm: "row" }}
        justify="start"
        overflow="hidden"
        variant="outline"
        p={4}
        transition="all 0.2s"
        cursor="pointer"
        role="group"
        _hover={{ boxShadow: "sm" }}
        w="280px"
      >
        <CardBody flexDir="column" display="flex"  alignItems="center">
          <VStack spacing="5">
            <CircularProgress value={percentage} size="200px" color={cardColor} thickness="5px">
                <CircularProgressLabel>
                  <VStack>
                    <Heading size="lg">
                      {petition.nrSign}
                    </Heading>
                    <Text fontSize="xs">
                      semnături 
                      <br/>
                      din {petition.nrSignNeeded} necesare
                      <br/>
                    </Text>
                  </VStack>
                </CircularProgressLabel>
            </CircularProgress>
            <HStack>
              <Text fontSize="md" fontFamily="serif" fontWeight="bold">Statut:</Text>
              <Text fontSize="md" fontFamily="serif">{petition.statut}</Text>
            </HStack>
            <Text fontSize="sm" fontFamily="serif">{daysLeft} zile ramase</Text>
            {signButton}
          </VStack>
        </CardBody>
      </Card>
  );
};
