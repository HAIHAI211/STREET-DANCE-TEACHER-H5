import { takeLatest, fork, put, call, take } from "redux-saga/effects";
import { getUserInfo } from "@/services";

function* runGlobal() {
  yield fork(getUserInfoFn);
}

function* getUserInfoFn() {
  while (true) {
    const { payload } = yield take("global/GET_USER_INFO");
    try {
      const r = yield call(getUserInfo);
      if (r?.resp_code === "200") {
        yield put({
          type: "global/UPDATE_STATE",
          payload: { userInfo: r?.user },
        });
        if (payload?.callback) {
          payload.callback(r?.user);
        }
      } else {
        yield put({
          type: "global/UPDATE_STATE",
          payload: { userInfo: {} },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default function* () {
  yield takeLatest("GET_APP_GLOBAL", runGlobal);
}
