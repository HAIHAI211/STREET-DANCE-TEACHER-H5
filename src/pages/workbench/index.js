import React, { useEffect, useState, useRef } from "react";
/*import Calendar from 'react-calendar';*/
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { parse } from "qs";
import { Card, WingBlank, Radio, List, Toast } from "antd-mobile";
import navigatorInfo from "@/utils/navigator-info";
import { CalendarHeader, CalendarBody, BottomNavigation } from "@/component";
import style from "./index.less";
import { dateFormat } from "@/utils/calendar";

const Home = (props) => {
  const { global, actions } = props;
  let calendarBodyRef = React.createRef();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [calendarBodyDom, setCalendarBodyDom] = useState(null);
  let list = [1, 2, 3];
  useEffect(() => {
    actions.getUserInfo();
  }, []);
  useEffect(() => {
    if (calendarBodyRef.current) {
      setCalendarBodyDom(calendarBodyRef.current.calendarBodyDom);
    }
  }, [calendarBodyRef]);
  const notify = (content, openProps) => {
    setOpen(openProps);
    if (calendarBodyRef.current) {
      calendarBodyRef.current.update(content);
    }
  };
  const getSelectDate = (date) => {
    console.log(dateFormat(date, "yyyy年MM月dd日"));
  };
  return (
    <>
      <div className={style["workbench"]}>
        <div className={style["study"]}>
          <div className={style["title"]}>学员学习管理</div>
          <ul className={style["content"]}>
            <li>
              <div className={style["left"]}>
                <p className={style["headline"]}>期初</p>
                <p className={style["sub-title"]}>目标规划</p>
              </div>
              <div
                className={style["right"] + " " + style["right-target"]}
              ></div>
              <p className={style["dot"]}>12</p>
            </li>
            <li>
              <div className={style["left"]}>
                <p className={style["headline"]}>期中</p>
                <p className={style["sub-title"]}>学情反馈</p>
              </div>
              <div
                className={style["right"] + " " + style["right-studying"]}
              ></div>
              <p className={style["dot"]}>0</p>
            </li>
            <li>
              <div className={style["left"]}>
                <p className={style["headline"]}>期末</p>
                <p className={style["sub-title"]}>续报沟通</p>
              </div>
              <div
                className={style["right"] + " " + style["right-continue"]}
              ></div>
              <p className={style["dot"]}>8</p>
            </li>
          </ul>
        </div>
        <div className={style["student"]}>
          <div className={style["title"]}>学员管理</div>
          <ul className={style["student-content"]}>
            <li>
              <div className={style["ico"] + " " + style["ico-student"]}></div>
              <div className={style["title-content"]}>我的学员</div>
            </li>
            <li>
              <div className={style["ico"] + " " + style["ico-leave"]}></div>
              <div className={style["title-content"]}>请假补课学员</div>
            </li>
            <li>
              <div className={style["ico"] + " " + style["ico-suspend"]}></div>
              <div className={style["title-content"]}>停课学员</div>
            </li>
            <li>
              <div className={style["ico"] + " " + style["ico-return"]}></div>
              <div className={style["title-content"]}>退费学员</div>
            </li>
          </ul>
        </div>
        <div className={style["timetable"]}>
          <div className={style["title"] + " " + style["timetable-title"]}>
            我的课表
          </div>
          <div className={style["calendar"]}>
            <CalendarHeader notify={notify} calendarBodyDom={calendarBodyDom} />
            <CalendarBody
              getSelectDate={getSelectDate}
              onRef={calendarBodyRef}
              open={open}
              weekLabelIndex={0}
            />
          </div>
        </div>
        <div className={style["class-content"]}>
          {list?.map((item, index) => (
            <div key={index} className={style["list"]}>
              <div className={style["header"]}>
                <div className={style["time"]}>18:00~19:00</div>
                <div className={style["warp"]}>
                  <div className={style["teacher"]}>老师 · 大大小小</div>
                  <div className={style["class-teacher"]}>班主任 · 罗小</div>
                </div>
              </div>
              <div className={style["content"]}>
                <p className={style["class-name"]}>
                  2022秋-L1CD李庆亚综合周二李庆亚综合周二18
                </p>
                <div className={style["class-room"]}>
                  <p className={style["campus"]}>成都清水河校区区区…</p>
                  <p className={style["room"]}>教室4</p>
                </div>
              </div>
              <div className={style["bottom"]}>
                <div className={style["path"]}></div>
                <ul className={style["describe"]}>
                  <li className={style["checked"]}>
                    <p className={style["ico"]}></p>
                    <p className={style["txt"]}>上课通知</p>
                  </li>
                  <li className={style["checked"]}>
                    <p className={style["ico"]}></p>
                    <p className={style["txt"]}>魔镜点名</p>
                  </li>
                  <li>
                    <p className={style["ico"]}></p>
                    <p className={style["txt"]}>考勤确认</p>
                  </li>
                  <li>
                    <p className={style["ico"]}></p>
                    <p className={style["txt"]}>布置作业</p>
                  </li>
                  <li>
                    <p className={style["ico"]}></p>
                    <p className={style["txt"]}>作业点评</p>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNavigation selected={1} />
    </>
  );
};
const mapStateToProps = ({ global }) => ({ global });

const mapDispatchToProps = (dispatch) => ({
  actions: {
    getUserInfo(payload) {
      dispatch({ type: "global/GET_USER_INFO", payload });
    },
  },
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
