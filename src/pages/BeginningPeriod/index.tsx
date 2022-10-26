import React, { useEffect, useState, FC } from "react";
import { useMount } from "ahooks";
import style from "./index.less";

const list = [{ id: 1 }, { id: 2 }, { id: 3 }];
const studentList = [1, 2, 3, 4];

export const BeginningPeriodPage: FC<any> = (props) => {
  const [open, setOpen] = useState({ visible: false, id: -1 });

  useMount(() => {
    document.title = "期初目标规划";
  });

  return (
    <div className={style["beginning-period"]}>
      <div className={style["header"]}>
        <div className={style["date"]}>
          <p className={style["date-txt"]}>2022年11月</p>
          <p className={style["select-ico"]}></p>
        </div>
        <div className={style["quarter"]}>
          <p className={style["quarter-txt"]}>秋季</p>
          <p className={style["select-ico"]}></p>
        </div>
        <div className={style["class-grade"]}>
          <p className={style["class-grade-txt"]}>请选择班级</p>
          <p className={style["select-ico"]}></p>
        </div>
      </div>
      <div className={style["content"]}>
        {list?.map((item, index) => (
          <div key={index} className={style["content-list"]}>
            <div className={style["list-header"]}>
              <div className={style["content-warp"]}>
                <p className={style["class-name"]}>
                  2022秋-L1CD李庆亚综合周二1二18二18二18二18
                </p>
                <div className={style["unfold"]}>
                  <div
                    className={style["unfold-warp"]}
                    onClick={() =>
                      setOpen({ visible: !open?.visible, id: item?.id })
                    }
                  >
                    {item?.id === open?.id && open?.visible ? (
                      <>
                        <p className={style["unfold-txt"]}>收起</p>
                        <p
                          className={
                            style["unfold-ico"] +
                            " " +
                            style["unfold-ico-close"]
                          }
                        ></p>
                      </>
                    ) : (
                      <>
                        <p className={style["unfold-txt"]}>展开</p>
                        <p
                          className={
                            style["unfold-ico"] + " " + style["unfold-ico-open"]
                          }
                        ></p>
                      </>
                    )}
                  </div>
                </div>
                <div className={style["campus"]}>
                  <div className={style["campus-txt"]}>成都清水河校区区区…</div>
                  <div className={style["long-string"]}></div>
                  <div className={style["campus-name"]}>程浩然</div>
                  <div className={style["long-string"]}></div>
                  <div className={style["percentage"]}>55.6%</div>
                </div>
              </div>
            </div>
            <div
              className={
                style["student-list"] +
                " " +
                (item?.id === open?.id && open?.visible
                  ? style["open"]
                  : style["close"])
              }
              key={index}
            >
              <div className={style["student-list-header"]}>
                <div className={style["name"]}>学员姓名</div>
                <div className={style["status"]}>完成状态</div>
                <div className={style["plan"]}>学期规划内容</div>
              </div>
              {studentList.map((item, index) => (
                <div
                  className={style["list"]}
                  style={{
                    borderBottom:
                      index === studentList.length - 1
                        ? "none"
                        : "1px solid rgba(153, 153, 153, .19)",
                  }}
                  key={index}
                >
                  <div className={style["list-name"]}>寿园锦锦</div>
                  <div className={style["list-status"]}>
                    <p className={style["list-status-ico"]}></p>
                  </div>
                  <div className={style["list-plan"]}>增加节奏感和力量…</div>
                </div>
              ))}
              <div className={style["list-bottom"]}>
                <div className={style["list-bottom-warp"]}>
                  <p className={style["list-bottom-item"]}>
                    在班人数：<span className={style["num"]}>23</span>
                  </p>
                  <p className={style["dot"]}>•</p>
                  <p className={style["list-bottom-item"]}>
                    完成沟通：<span className={style["num"]}>12</span>
                  </p>
                  <p className={style["dot"]}>•</p>
                  <p className={style["list-bottom-item"]}>
                    完成率：<span className={style["num"]}>68.2%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
