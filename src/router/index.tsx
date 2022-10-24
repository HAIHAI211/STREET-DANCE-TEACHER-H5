import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { BaseLayout } from "@/layout";
import { HomePage } from "@/pages/Home";
import { ErrorPage } from "@/pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
  },
]);
