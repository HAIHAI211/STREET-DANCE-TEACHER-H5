import React from "react";
import './App.less'
import largeImg from './assets/imgs/10001-nights.png'
import smallImg from './assets/imgs/wechat.png'

export default function App() {
  return (
    <div>
      <h1>STREET DANCE TEACHER H5</h1>
      <img src={largeImg} alt="大于10kb的图片"/>
      <img src={smallImg} alt="小于10kb的图片"/>
    </div>
  )
}
