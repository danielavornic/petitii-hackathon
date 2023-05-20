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
  Tag,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { Footer, Header, Layout, PetitionProgressCard } from "components";
import { FaFacebook, FaTwitter, FaEnvelope, FaLink } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Petition as PetitionType } from "types";

const petitie: PetitionType = {
  id: 1,
  initiator: "Ion Popescu",
  name: "Numele petiției",
  date: "Data",
  nrSign: 5600,
  nrsignneeded: 10000,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum gravida rutrum. Nulla facilisi. Donec in ipsum tristique, iaculis libero vel, dapibus mi. Aliquam facilisis fringilla metus in luctus. Fusce sit amet mi id neque convallis tincidunt. Vestibulum rutrum consequat augue non tempus. \n\n Suspendisse ultrices nulla a sollicitudin gravida. Etiam feugiat augue eget justo dignissim, id feugiat nisl iaculis. Integer eleifend felis eu pulvinar fermentum. Suspendisse finibus ex id pharetra convallis. Vivamus a dui elementum, ultricies diam nec, volutpat tellus. Nam tincidunt pulvinar dolor ut vulputate. Duis tristique purus ut elit dignissim, eu consectetur erat efficitur. Donec hendrerit justo ut fringilla fringilla. Donec pharetra iaculis mauris, ac placerat urna placerat et. Nullam ultricies eleifend metus, id cursus elit consectetur a. Nulla facilisi. \n\n  Nunc tincidunt euismod gravida. Sed in lectus neque. Nullam ut ipsum a diam vehicula fringilla eu sit amet nisi. Suspendisse potenti. Proin sagittis tristique ligula. Etiam finibus lacinia dui eu lobortis. Sed eleifend tristique mauris, ut consequat leo dictum ut. Curabitur varius neque at mi porttitor vestibulum.  Sed pulvinar velit purus, in ullamcorper sem rutrum in. Proin eu elit vitae tellus commodo rutrum. Nullam blandit viverra volutpat. Aliquam sed tellus cursus, gravida turpis nec, ullamcorper sapien. Integer non nunc ac metus finibus suscipit a nec eros. Sed dictum enim id ipsum vehicula, a semper ante convallis. Aliquam euismod rutrum rutrum. Integer quis vulputate metus, sed pellentesque nulla. Nullam auctor nunc ac fermentum tempor. \n\n Proin sollicitudin, enim eu semper interdum, dui nisi gravida purus, vel elementum enim metus in risus. Nam at consectetur ante. Vestibulum dapibus, nunc a placerat ultricies, neque velit fermentum neque, eu convallis neque quam sit amet enim. Aenean eget posuere diam, nec sagittis velit. In a mi sit amet ante laoreet tristique. Suspendisse sed tortor quam. Proin volutpat ultricies massa, non maximus lacus pharetra ut. Mauris ut ex ac elit aliquet posuere. Quisque ultrices gravida ante, nec fringilla nulla. Nullam suscipit mi in felis aliquam, eu accumsan turpis convallis. Nam eu dapibus metus, id ultricies ligula. Sed tincidunt interdum eros id aliquet. Sed eget massa tincidunt, lobortis nisi id, aliquam orci. Suspendisse eleifend, libero ac pellentesque efficitur, metus nisi hendrerit sem, id aliquet justo erat ut nunc. Fusce tristique mauris vel odio gravida, vitae fermentum enim dictum. Integer et metus hendrerit, pellentesque risus sed, euismod orci. Phasellus tincidunt, dolor at varius ultrices, felis neque lacinia arcu, et viverra lacus mi ac enim. Sed in varius sapien, id auctor felis. Aliquam in ex magna. Donec egestas diam vel tortor dictum hendrerit. Proin eleifend felis a purus consequat, vitae efficitur nisi vestibulum. Maecenas tincidunt, odio a rhoncus dictum, ligula est interdum turpis, id tempor",
  toWho: "Destinatar",
  statut: "În procesare",
  semnat: undefined,
  feedback: "Feedback",
  deadLine: "2023-12-07",
  category: "Categorie",
};

export const Petition = () => {
  const params = useParams();

  const id = params.petitionId;

  return (
    <Layout>
      <Flex w={"full"} h="200px" bg="primary.600" color="white">
        <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
              <BreadcrumbItem>
                <BreadcrumbLink href={import.meta.env.BASE_URL}>Acasa</BreadcrumbLink>
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
        <HStack spacing={12} my={8} alignItems="start" position="relative">
          <VStack w="full" align={"flex-start"} justifyContent="start">
            <Heading as="h2" size="2xl" my={4}>
              {petitie.name}
            </Heading>

            <Heading as="h3" size="sm" pt={4} pb={2} fontFamily="serif" fontWeight={400}>
              Initiator: {petitie.initiator}
            </Heading>

            <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
              Data depunerii: {petitie.date}
            </Heading>

            <Text fontSize="lg" pt={8} pb={2} whiteSpace="pre-line">
              {petitie.content}
            </Text>

            <HStack pt={4} pb={2}>
              <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                Categorie:{" "}
              </Heading>
              <Tag>{petitie.category}</Tag>
            </HStack>
          </VStack>
          <Box w="280px" position="sticky" top={4}>
            <PetitionProgressCard petition={petitie} />
            <VStack w="full" align={"flex-start"} justifyContent="start" spacing={4} pt={12}>
              <Heading as="h3" size="sm" fontFamily="serif" fontWeight={400}>
                Distribuie petiția
              </Heading>
              <HStack spacing={4}>
                <IconButton aria-label="Share on Facebook" icon={<FaFacebook />} rounded="full" />
                <IconButton aria-label="Share on Twitter" icon={<FaTwitter />} rounded="full" />
                <IconButton aria-label="Share on Email" icon={<FaEnvelope />} rounded="full" />
                <IconButton aria-label="Copy link" icon={<FaLink />} rounded="full" />
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Container>
    </Layout>
  );
};
