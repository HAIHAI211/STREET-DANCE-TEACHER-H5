import React, { useState } from "react";
import "@/App.less"
import largeImg from "@/assets/imgs/10001-nights.png";
import smallImg from "@/assets/imgs/wechat.png";

export default function App() {
  const [count, setCounts] = useState("");
  return (
    <div>
      <h1>STREET DANCE TEACHER H5</h1>
      <img src={largeImg} alt="大于10kb的图片" />
      <img src={smallImg} alt="小于10kb的图片" />
      <div className={'bg'}></div>
      <h2>webpack5+react+ts</h2>
      <p>1. 受控组件</p>
      <input
        type="text"
        value={count}
        onChange={(e) => setCounts(e.target.value)}
      />
      <br />
      <p>2. 非受控组件</p>
      <input type="text" />
    </div>
  );
}
