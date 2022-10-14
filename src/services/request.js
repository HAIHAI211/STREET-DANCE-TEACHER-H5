import axios from "axios";
import { Toast } from "antd-mobile";
import navigatorInfo from "@/utils/navigator-info";
import { stringify } from "./config";

const _navigatorInfo = navigatorInfo();
const methodType = {
  FORMDATA: (opts) => {
    let newOptions = { ...opts };
    newOptions.headers = {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      ...newOptions.headers,
    };
    newOptions.method = "POST";
    newOptions.body = stringify(newOptions.body);
    return newOptions;
  },
  POST: (opts) => {
    let newOptions = { ...opts };
    newOptions.headers = {
      "Content-Type": "application/json;charset=UTF-8",
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
    return newOptions;
  },
  GET: (opts) => opts,
  DELETE: (opts) => opts,
};
export default function request(
  url,
  option,
  otherOpt = { notThrowWhenError: false }
) {
  const defaultHeaders = {
    client_id: "mobile",
    client_secret: "mobile",
    AppNice: "erp-api",
    AppPassWd: "erp-api",
    product: "street-dance-parents-h5",
    version: "v1.0.0",
    browser: _navigatorInfo?.browser,
    os: _navigatorInfo?.os,
    engine: _navigatorInfo?.engine,
  };
  const newOptions = { ...option, url, ...otherOpt };
  try {
    defaultHeaders["AppToken"] = window.localStorage.getItem("AppToken");
    defaultHeaders["Authorization"] =
      "bearer f3df2ae6-499d-4e51-996a-2b301c02ad2c";
  } catch (e) {}
  newOptions.headers = defaultHeaders;
  const _newOptions = methodType[newOptions?.method?.toUpperCase()](newOptions);
  return axios(_newOptions)
    .then((response) => {
      const data = response.data;
      return Promise.resolve(data.datas || data);
    })
    .catch((error) => {
      const { response } = error;
      //http Status Code 不为200
      if (response.status < 200 || response.status >= 300) {
        Toast.show({
          icon: "fail",
          content: response.status + " " + response?.statusText,
        });
        return;
      }
      let msg;
      let statusCode;
      if (!response) return;
      if (response && response instanceof Object) {
        const { data } = response;
        statusCode = Number(data?.resp_code || data.code);
        // 401token无效
        if (statusCode === 401 || data?.error === "invalid_token") {
          Toast.show({
            icon: "fail",
            content: data?.rsp_msg || "用户已过期，请重新登录",
          });
          return;
        }
        msg =
          data.error ||
          data.resp_msg ||
          data.rsp_msg ||
          "服务器异常，稍后重试！";
        if (newOptions.notThrowWhenError) {
          return Promise.resolve(data);
        }
      }
      return Promise.reject({
        success: false,
        statusCode,
        message: msg || "服务器异常，稍后重试",
      });
    });
}
