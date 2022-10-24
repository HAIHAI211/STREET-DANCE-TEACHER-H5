import React, { FC } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage: FC<any> = (props) => {
  const error: any = useRouteError();
  console.log(error)
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
