import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  VStack,
  useBreakpointValue,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import { Layout } from "components";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const Developers = () => {
  return (
    <Layout withoutFooter>
      <Flex w={"full"} h="200px" bg="primary.600" color="white">
        <VStack w={"full"} justify={"center"} px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Breadcrumb spacing="8px" separator={<ChevronRightIcon />}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Developers</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading as="h1" size="2xl" my={4}>
              Developers
            </Heading>
          </Stack>
        </VStack>
      </Flex>

      <div className="App">
        <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
      </div>
    </Layout>
  );
};
