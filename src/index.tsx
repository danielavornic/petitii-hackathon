import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { UserProvider } from "context";

import "antd/dist/reset.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
