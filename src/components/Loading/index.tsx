import React, { FC } from "react";
import style from "./index.less";

export const Loading: FC<any> = (props) => {
  const { spin } = props;
  return (
    <>
      {spin ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 999,
            background: "#f5f5f9",
            position: "fixed",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`${style["status-icon"]} ${style["icon-paying"]}`}
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
