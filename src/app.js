import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import RouterConfig from "./router/index.js";
import { getAppToken } from "./services";
import { dataflowProvider } from "./hooks/use-model/runtime";
// import store from "./store";
import "./styles/index.less";

const getAppTokenFn = () => {
  getAppToken().then((data) => {
    if (data) {
      const { AppToken, ExpireTime } = data;
      window.localStorage.setItem("AppToken", AppToken);
      window.localStorage.setItem(
        "AppTokenExpireTime",
        new Date().getTime() + ExpireTime * 1000 + ""
      );
    }
  });
};
const AppToken = window.localStorage.getItem("AppToken");
const expireDate = window.localStorage.getItem("AppTokenExpireTime");
if (!AppToken) {
  getAppTokenFn();
} else {
  if (
    !expireDate ||
    isNaN(parseInt(expireDate)) ||
    parseInt(expireDate) < new Date().getTime() - 86400000
  ) {
    getAppTokenFn();
  }
}
// store.dispatch({ type: "GET_APP_GLOBAL" });
ReactDOM.render(
  // <Provider store={store}>
  //   <RouterConfig />
  // </Provider>,
  dataflowProvider(<RouterConfig />),
  document.getElementById("root")
);
