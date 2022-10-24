import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { BaseLayout } from "@/layout";
import { HomePage } from "@/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
  },
]);
