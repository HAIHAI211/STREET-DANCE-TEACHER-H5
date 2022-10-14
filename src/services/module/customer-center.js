import { request, apiUrlfun, stringify } from "../config";

//获取预付订单详细信息
export async function getPrestoreOrderDetail(params) {
  return request(
    `${apiUrlfun("marketing-synthesis-service")}/pay/prestoreOrder/${
      params?.id
    }`,
    {
      method: "get",
    }
  );
}
//获取商品订单表详细信息
export async function getOrderDetail(params) {
  return request(
    `${apiUrlfun("marketing-synthesis-service")}/pay/order/${params?.id}/${
      params?.type
    }`,
    {
      method: "get",
    }
  );
}
//获取商品订单支付状态
export async function getPayStatusService(params) {
  return request(`${apiUrlfun("marketing-synthesis-service")}/pay/payState`, {
    method: "post",
    body: params,
    expirys: false,
  });
}

//发起支付接口，换为当前接口，不再调用之前的inner接口
export async function getpayH5(params) {
  return request(`${apiUrlfun("marketing-synthesis-service")}/pay/payH5`, {
    method: "post",
    body: params,
  });
}

//发起支付接口，审核专用接口
export async function getpayH5Fix(params) {
  return request(`${apiUrlfun("marketing-synthesis-service")}/pay/payFixedH5`, {
    method: "post",
    body: params,
  });
}

//获取审核的订单id和价格
export async function getAccreditDetail(params) {
  return request(`${apiUrlfun("marketing-synthesis-service")}/pay/tempId`, {
    method: "post",
    body: params,
  });
}
