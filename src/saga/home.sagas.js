import { call, put } from "redux-saga/effects";
import { getUserInfo } from "@/services";

function* fetchUser(action) {
  try {
    const user = yield call(getUserInfo, action.payload.userId);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
export default fetchUser;
