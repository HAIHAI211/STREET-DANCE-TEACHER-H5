import React from "react";
import style from "./index.less";

const BottomNavigation = (props) => {
  const { selected = 1 } = props;
  return (
    <div className={style["footer"]}>
      <div className={style["card"]}>
        <p
          className={
            style["ico"] +
            " " +
            (selected === 1
              ? style["ico-selected-workbench"]
              : style["ico-unchecked-workbench"])
          }
        ></p>
        <p
          className={
            style["nav-title"] +
            " " +
            (selected === 1
              ? style["title-selected-workbench"]
              : style["title-unchecked-workbench"])
          }
        >
          工作台
        </p>
      </div>
      <div className={style["card"]}>
        <p
          className={
            style["ico"] +
            " " +
            (selected === 2
              ? style["ico-selected-data"]
              : style["ico-unchecked-data"])
          }
        ></p>
        <p
          className={
            style["nav-title"] +
            " " +
            (selected === 2
              ? style["title-selected-data"]
              : style["title-unchecked-data"])
          }
        >
          数据
        </p>
      </div>
    </div>
  );
};
export default BottomNavigation;
