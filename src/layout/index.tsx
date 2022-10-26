import React, { FC } from "react";
import { Outlet } from "react-router-dom";

export const BaseLayout: FC<any> = (props) => {
  return (
    <div className="base-layout">
      <Outlet />
    </div>
  );
};
