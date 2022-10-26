import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { BaseLayout } from "@/layout";
// import { HomePage } from "@/pages/Home";
import { ErrorPage } from "@/pages/Error";
import { WorkBenchPage } from "@/pages/WorkBench";
import { BeginningPeriodPage } from "@/pages/BeginningPeriod";

{
  /* <Switch>
<Route path={`/`} exact render={() => <Redirect to={`/workbench`} />} />
<Route path={`/workbench`} component={workbench} />
<Route path={`/beginning-period`} component={BeginningPeriod} />
</Switch> */
}

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <BaseLayout />,
  //   errorElement: <ErrorPage />,

  // },
  {
    path: "/",
    element: <WorkBenchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "beginning-period",
    element: <BeginningPeriodPage />,
    errorElement: <ErrorPage />,
  },
]);
