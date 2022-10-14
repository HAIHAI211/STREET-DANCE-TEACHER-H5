import { request, apiUrlfun, stringify } from "../config";

//获取校区及教室
export async function getSchoolRoom(params) {
  return request(
    `${apiUrlfun("basicdata-center")}/departs/listSchoolRoom?${stringify(
      params
    )}`,
    {
      method: "get",
    }
  );
}

// 获取组织架构
export async function getUserDeparts(params) {
  return request(
    `${apiUrlfun("basicdata-center")}/userdeparts/getUserDeparts?${stringify(
      params
    )}`,
    {
      method: "get",
    }
  );
}
// 根据code获取相应的枚举数据
export async function getDictionaryByCode(params) {
  return request(
    `${apiUrlfun(
      "basicdata-center"
    )}/dictionaryconfigrecords/listCodeAll?${stringify(params)}`,
    {
      method: "get",
    }
  );
}
