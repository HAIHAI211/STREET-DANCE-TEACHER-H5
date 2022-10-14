import { stringify } from "qs";
import request from "./request";

// 自定义前缀，对应后端微服务
const apiUrlfun = (val, host) => {
  const hostPrefix = host ? host : "/api";
  if (val) {
    return `${hostPrefix}/${val}`;
  }
  return `${hostPrefix}`;
};
export { stringify, apiUrlfun, request };
