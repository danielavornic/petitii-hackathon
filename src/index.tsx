import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, baseTheme, extendTheme } from "@chakra-ui/react";

import { UserProvider } from "context";
import "./styles/index.css";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    serif: `'Libre Baskerville', serif`,
  },
  colors: {
    primary: baseTheme.colors.blue,
  },
  withDefaultColorScheme: {
    colorScheme: "primary",
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
