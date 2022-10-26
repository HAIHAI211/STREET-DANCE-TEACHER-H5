import React, {
  useEffect,
  useState,
  useRef,
  useImperativeHandle,
  FC,
} from "react";
import {
  getFirstDayOfMonth,
  dateFormat,
  getFirstDayOfCalendar,
  formatDayWithTwoWords,
  isCurrentMonth,
  isCurrentDay,
  getWeekLabelList,
} from "@/utils/calendar";
import style from "./index.less";

export const CalendarBody: FC<any> = (props) => {
  const { weekLabelIndex = 1, open = false, getSelectDate } = props;
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date()); //当前天和月
  const [weekList, setWeekList] = useState([]);
  const [weekLabelArray, setWeekLabelArray] = useState<string[]>([]);
  const selectDateRef = useRef<any>(new Date());
  const calendarBodyRef = useRef<any>(null);
  useImperativeHandle(props.onRef, () => ({
    update,
    calendarBodyDom: calendarBodyRef,
  }));
  useEffect(() => {
    // 设置当前月的第一天，用来数据初始话以及进行日期是否为当前月判断
    setFirstDayOfMonth(getFirstDayOfMonth(new Date()));

    // 设置每周label标识数据
    setWeekLabelArray(getWeekLabelList(weekLabelIndex));

    // 初始设置当前月日历数据
    setWeekListValue(getFirstDayOfMonth(new Date()));
  }, []);

  /**
   * 日历方法
   */
  // 点击日历
  const onClickDay = (dayItem: any) => {
    selectDateRef.current = dayItem?.date;
    if (getSelectDate) {
      getSelectDate(dayItem?.date);
    }
    // setWeekListValue(firstDayOfMonth, dayItem.date);
    setWeekListValue(firstDayOfMonth);
  };

  // 设置weekList值
  const setWeekListValue = (firstDayOfmonth: any) => {
    let newWeekList = [];
    let dayOfCalendar = getFirstDayOfCalendar(firstDayOfmonth, weekLabelIndex);
    // 遍历层数为6，因为日历显示当前月数据为6行
    for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
      let weekItem = [];
      // 每一周为7天
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        let dayItem = {
          date: new Date(dayOfCalendar.valueOf()),
          dateFormat: dateFormat(dayOfCalendar, "yyyy年MM月dd日"),
          monthDay: formatDayWithTwoWords(dayOfCalendar.getDate()),
          isCurrentMonth: isCurrentMonth(firstDayOfMonth, dayOfCalendar),
          isSelectMonth: isCurrentMonth(firstDayOfmonth, dayOfCalendar), //是否属于当前选择月
          isCurrentDay: isCurrentDay(dayOfCalendar),
          rowNum: weekIndex,
          checked:
            selectDateRef.current.getFullYear() ===
              dayOfCalendar.getFullYear() &&
            selectDateRef.current.getDate() === dayOfCalendar?.getDate() &&
            selectDateRef.current.getMonth() === dayOfCalendar?.getMonth(),
        };
        weekItem.push(dayItem);

        // 当前日期加1，以此类推得到42条记录
        dayOfCalendar.setDate(dayOfCalendar.getDate() + 1);
      }

      newWeekList.push(weekItem);
      setWeekList(newWeekList as any);
    }
  };

  /**
   * 观察者模式相关方法
   */
  // 切换月份更新body数据
  const update = (content: any) => {
    setFirstDayOfMonth(content);
    setWeekListValue(content);
  };
  // 日期className显示
  const dateClassNameShow = (dayItem: any) => {
    const weekCayClass = style["calendar-body-week-day"];
    const currentMonthClass = dayItem.isSelectMonth
      ? style["calendar-body-current-month"]
      : "";
    const selectDayClass = dayItem.isCurrentDay
      ? style["calendar-body-current-day"]
      : dayItem.checked
      ? style["calendar-body-select-day"]
      : "";
    //展开的时候显示全部行日历，收起的时候只显示一行日历
    const foldClass =
      open && dayItem?.rowNum > 0
        ? style["calendar-body-week-expand"]
        : dayItem?.rowNum === 0
        ? style["calendar-body-week-expand"]
        : style["calendar-body-week-collapse"];
    return `${weekCayClass} ${currentMonthClass} ${selectDayClass} ${foldClass}`;
  };
  return (
    <div className={style["calendar-body"]} ref={calendarBodyRef}>
      {/* <!-- 日历周label标识 --> */}
      <div className={style["calendar-body-week-label"]}>
        {weekLabelArray.map((item, index) => (
          <div
            key={item + index}
            className={style[`calendar-body-week-label-day`]}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
      {/* <!-- 日历数据，遍历日历二位数组，得到每一周数据 --> */}
      {weekList.map((weekItem: any, index) => (
        <div className={style["calendar-body-week"]} key={index}>
          {/* <!-- 遍历每一周数据 --> */}
          {weekItem.map((dayItem: any, index: number) => (
            <div
              key={index}
              className={dateClassNameShow(dayItem)}
              onClick={() => onClickDay(dayItem)}
            >
              <span>{dayItem.isCurrentDay ? "今" : dayItem.monthDay}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
