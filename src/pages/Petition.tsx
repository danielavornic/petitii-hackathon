import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  VStack,
  useBreakpointValue,
  Text,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";
import { Footer, Header } from "components";
import { useParams } from "react-router-dom";

const petitie = {
  id: 1,
  initiator: {
    name: "Nume",
    surname: "Prenume",
    id: "123456",
    location: "Locație",
    isResident: true,
    birthDate: new Date(),
  },
  name: "Numele petiției",
  date: "Data",
  nrSign: 0,
  nrSignNeeded: 100,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum gravida rutrum. Nulla facilisi. Donec in ipsum tristique, iaculis libero vel, dapibus mi. Aliquam facilisis fringilla metus in luctus. Fusce sit amet mi id neque convallis tincidunt. Vestibulum rutrum consequat augue non tempus. \n\n Suspendisse ultrices nulla a sollicitudin gravida. Etiam feugiat augue eget justo dignissim, id feugiat nisl iaculis. Integer eleifend felis eu pulvinar fermentum. Suspendisse finibus ex id pharetra convallis. Vivamus a dui elementum, ultricies diam nec, volutpat tellus. Nam tincidunt pulvinar dolor ut vulputate. Duis tristique purus ut elit dignissim, eu consectetur erat efficitur. Donec hendrerit justo ut fringilla fringilla. Donec pharetra iaculis mauris, ac placerat urna placerat et. Nullam ultricies eleifend metus, id cursus elit consectetur a. Nulla facilisi. \n\n  Nunc tincidunt euismod gravida. Sed in lectus neque. Nullam ut ipsum a diam vehicula fringilla eu sit amet nisi. Suspendisse potenti. Proin sagittis tristique ligula. Etiam finibus lacinia dui eu lobortis. Sed eleifend tristique mauris, ut consequat leo dictum ut. Curabitur varius neque at mi porttitor vestibulum.  Sed pulvinar velit purus, in ullamcorper sem rutrum in. Proin eu elit vitae tellus commodo rutrum. Nullam blandit viverra volutpat. Aliquam sed tellus cursus, gravida turpis nec, ullamcorper sapien. Integer non nunc ac metus finibus suscipit a nec eros. Sed dictum enim id ipsum vehicula, a semper ante convallis. Aliquam euismod rutrum rutrum. Integer quis vulputate metus, sed pellentesque nulla. Nullam auctor nunc ac fermentum tempor. \n\n Proin sollicitudin, enim eu semper interdum, dui nisi gravida purus, vel elementum enim metus in risus. Nam at consectetur ante. Vestibulum dapibus, nunc a placerat ultricies, neque velit fermentum neque, eu convallis neque quam sit amet enim. Aenean eget posuere diam, nec sagittis velit. In a mi sit amet ante laoreet tristique. Suspendisse sed tortor quam. Proin volutpat ultricies massa, non maximus lacus pharetra ut. Mauris ut ex ac elit aliquet posuere. Quisque ultrices gravida ante, nec fringilla nulla. Nullam suscipit mi in felis aliquam, eu accumsan turpis convallis. Nam eu dapibus metus, id ultricies ligula. Sed tincidunt interdum eros id aliquet. Sed eget massa tincidunt, lobortis nisi id, aliquam orci. Suspendisse eleifend, libero ac pellentesque efficitur, metus nisi hendrerit sem, id aliquet justo erat ut nunc. Fusce tristique mauris vel odio gravida, vitae fermentum enim dictum. Integer et metus hendrerit, pellentesque risus sed, euismod orci. Phasellus tincidunt, dolor at varius ultrices, felis neque lacinia arcu, et viverra lacus mi ac enim. Sed in varius sapien, id auctor felis. Aliquam in ex magna. Donec egestas diam vel tortor dictum hendrerit. Proin eleifend felis a purus consequat, vitae efficitur nisi vestibulum. Maecenas tincidunt, odio a rhoncus dictum, ligula est interdum turpis, id tempor",
  toWho: "Destinatar",
  statut: "Statut",
  semnat: [],
  feedback: "Feedback",
  deadLine: "Termen limită",
  Category: ["Categorie1", "Categorie2"],
};

export const Petition = () => {
  const params = useParams();

  const id = params.petitionId;

  return (
    <>
      <Header />
      <Flex w={"full"} h="200px" bg="primary.600" color="white">
        <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Petiția #{id}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading as="h1" size="2xl" my={4}>
              Petiția #{id}
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Container maxW="8xl" px={0} pb="100px">
        <HStack spacing={8} my={8}>
          <VStack w="full" align={"flex-start"} justifyContent="start">
            <Heading as="h2" size="2xl" my={4}>
              {petitie.name}
            </Heading>

            <Heading as="h3" size="sm" pt={4} pb={2} fontFamily="serif" fontWeight={400}>
              Initiator: {petitie.initiator.name} {petitie.initiator.surname}
            </Heading>

            <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
              Data depunerii: {petitie.date}
            </Heading>

            <Text fontSize="lg" pt={8} pb={2} whiteSpace="pre-line" textAlign="justify">
              {petitie.content}
            </Text>

            <HStack pt={4} pb={2}>
              <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                Categorii:{" "}
              </Heading>
              <Wrap>
                {petitie.Category.map((category) => (
                  <WrapItem key={category}>
                    <Tag>{category}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </HStack>
          </VStack>
        </HStack>
      </Container>
      <Footer />
    </>
  );
};
