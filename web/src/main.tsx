import React from "react";
import ReactDOM from "react-dom/client";
import { AxiosError } from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllRoutes from "./routes";
import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/source-serif-pro";
import "@fontsource/source-serif-pro/700.css";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AllRoutes />
    </QueryClientProvider>
  </React.StrictMode>
);
