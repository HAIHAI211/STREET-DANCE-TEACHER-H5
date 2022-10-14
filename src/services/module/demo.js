import { stringify, request, apiUrlfun } from "../config";

const demoHost = "https://hmj.jahwaec.com/api";

// 获取一级类目
export async function rtsGetCategorysList(params) {
  return request(
    `${apiUrlfun("mall", demoHost)}/v1/categories?${stringify(params)}`,
    {
      method: "GET",
    }
  );
}

// 获取二级类目
export async function rtsGetSubcategories(params) {
  return request(`${apiUrlfun("", demoHost)}/web/plant/list-for-invite`, {
    method: "FORMDATA",
    body: params,
  });
}
