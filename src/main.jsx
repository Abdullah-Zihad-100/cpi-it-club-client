import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { Router } from "./Provider/Router";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={Router}>
          <MainLayout />
          <Toaster />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
