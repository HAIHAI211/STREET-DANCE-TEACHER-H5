import React from "react";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";
import "@/App.less";

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
