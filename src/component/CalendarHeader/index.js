import React, { useEffect, useState, useRef } from "react";
import {
  getHeaderContent,
  getFirstDayOfNextMonth,
  getFirstDayOfPrevMonth,
  dateFormat,
  getFirstDayOfMonth,
} from "@/utils/calendar";
import touchUtils from "@/utils/touchUtils";
import style from "./index.less";

export default (props) => {
  const { notify, calendarBodyDom } = props;
  // 页面绑定数据
  const [headerContent, setHeaderContent] = useState("");
  const [open, setOpen] = useState(false);
  let leftArrow = "<";
  let rightArrow = ">";
  const firstDayOfMonthRef = useRef(null);
  const openRef = useRef(null);
  useEffect(() => {
    setHeaderContent(getHeaderContent(new Date()));
    firstDayOfMonthRef.current = getFirstDayOfMonth(new Date());
  }, []);
  useEffect(() => {
    if (calendarBodyDom) {
      touchUtils(calendarBodyDom.current, leftRightSlideCallback);
    }
  }, [calendarBodyDom]);
  useEffect(() => {
    openRef.current = open;
    observerNotify();
  }, [open]);
  //左右滑动切换日历回调
  const leftRightSlideCallback = (directionLeftRight) => {
    if (directionLeftRight === 1) {
      goPrev();
    }
    if (directionLeftRight === 0) {
      goNext();
    }
  };
  /**
   * 主题发布信息，通知观察者
   */
  const observerNotify = () => {
    setHeaderContent(getHeaderContent(firstDayOfMonthRef.current));
    notify(firstDayOfMonthRef.current, openRef.current);
  };

  /**
   * 页面操作
   */
  const goPrev = () => {
    firstDayOfMonthRef.current = getFirstDayOfPrevMonth(
      firstDayOfMonthRef.current
    );
    observerNotify();
  };

  const goNext = () => {
    firstDayOfMonthRef.current = getFirstDayOfNextMonth(
      firstDayOfMonthRef.current
    );
    observerNotify();
  };

  return (
    <div className={style["calendar-header"]}>
      <div className={style["header-center"]}>
        <span className={style["prev-month"]} onClick={goPrev}>
          {leftArrow}
        </span>
        <span className={style["title"]}>{headerContent}</span>
        <span className={style["next-month"]} onClick={goNext}>
          {rightArrow}
        </span>
      </div>
      {open ? (
        <div
          className={style["unfold-fewer"]}
          onClick={() => {
            setOpen(!open);
            openRef.current = !open;
          }}
        >
          <p className={style["unfold-fewer-txt"]}>收起</p>
          <p className={style["fewer-ico"]}></p>
        </div>
      ) : (
        <div
          className={style["unfold-fewer"]}
          onClick={() => {
            setOpen(!open);
            openRef.current = !open;
          }}
        >
          <p className={style["unfold-fewer-txt"]}>展开</p>
          <p className={style["unfold-ico"]}></p>
        </div>
      )}
    </div>
  );
};
