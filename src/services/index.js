import {
  login,
  logout,
  getUserInfo,
  qrcodePay,
  getSignature,
  getAppToken,
} from "./module/auth";
import { rtsGetSubcategories, rtsGetCategorysList } from "./module/demo";
import {
  getPrestoreOrderDetail,
  getOrderDetail,
  getPayStatusService,
  getpayH5,
  getpayH5Fix,
  getAccreditDetail,
} from "./module/customer-center";

export {
  login,
  logout,
  getUserInfo,
  rtsGetSubcategories,
  rtsGetCategorysList,
  qrcodePay,
  getPrestoreOrderDetail,
  getOrderDetail,
  getSignature,
  getAppToken,
  getPayStatusService,
  getpayH5,
  getpayH5Fix,
  getAccreditDetail,
};
