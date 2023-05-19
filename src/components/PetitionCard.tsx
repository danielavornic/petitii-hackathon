import { CardBody, Heading, Card, Text, VStack, Progress, HStack } from "@chakra-ui/react";
import { Petition } from "types";
import { Link } from "react-router-dom";

import { FaCalendar, FaUser } from "react-icons/fa";

interface PetitionCardProps {
  petition: Petition;
}

export const PetitionCard = ({ petition }: PetitionCardProps) => {
  const { id, initiator, name, date, nrSign, nrSignNeeded, deadLine, Category } = petition;

  const deadlineTime = new Date(deadLine);

  const daysLeft = Math.floor((deadlineTime.getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  const progress = Math.floor((nrSign / nrSignNeeded) * 100);

  const dateSplit = date.split("T")[0];

  return (
    <Link to={`/petition/${id}`}>
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
        w="full"
      >
        <CardBody flexDir="row" display="flex" alignItems="center">
          <VStack spacing={6} alignItems="start" flex="2" mr={12}>
            <HStack alignItems="baseline" fontFamily="serif">
              {/* <FaCalendar color="#0BC5EA" /> */}
              <Text fontSize="lg">
                {dateSplit} | #{Category[0]}
              </Text>
            </HStack>
            <Heading size="md" transition="all 0.2s" _groupHover={{ color: "primary.500" }}>
              {name}
            </Heading>
            <HStack alignItems="baseline">
              {/* <FaUser color="#0BC5EA" /> */}
              <Text fontFamily="serif" size="lg">
                Initiat de {initiator.name} {initiator.surname}
              </Text>
            </HStack>
          </VStack>

          <VStack w="full" flex="0.6" alignItems="start" spacing={6}>
            <VStack w="full" alignItems="start">
              <HStack alignItems="baseline" justify="start" spacing={2}>
                <Heading size="lg">{nrSign}</Heading>
                <Text fontSize="md" fontFamily="serif">
                  semnaturi
                </Text>
              </HStack>
              <Progress value={progress} colorScheme="primary" rounded="md" w="full" h={2} />
            </VStack>
            <HStack alignItems="baseline" fontFamily="serif">
              {/* <FaCalendar color="#0BC5EA" /> */}
              <Text>{daysLeft} zile ramase</Text>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </Link>
  );
};
