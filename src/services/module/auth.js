import { request, apiUrlfun, stringify } from "../config";
// 获取appToken
export async function getAppToken(params) {
  return request(
    `${apiUrlfun()}/getAppToken`,
    {
      method: "get",
      body: params,
    },
    { Authorization: false }
  );
}
//用户登陆
export async function login(params) {
  return request(
    `${apiUrlfun("api-auth")}/oauth/user/token`,
    {
      method: "formData",
      body: params,
    },
    { Authorization: false }
  );
}

export async function logout(params) {
  return request(
    `${apiUrlfun("api-auth")}/oauth/remove/token${!params ? "" : `/${params}`}`,
    {
      method: "DELETE",
    }
  );
}

export async function getUserInfo(params) {
  return request(`${apiUrlfun("api-auth")}/oauth/userinfo`, {
    method: "GET",
    body: params,
  });
}
// 二维码支付
export async function qrcodePay(params) {
  return request(`https://inner.ailecheng.com/pay-center/pay/prepay`, {
    method: "post",
    body: params,
  });
}
// 获取微信签证
export async function getSignature(params) {
  return request(
    `https://inner.ailecheng.com/pay-center/pay/wechat/signature`,
    {
      method: "get",
    }
  );
}
