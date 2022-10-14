import { all } from "redux-saga/effects";
import global from "./global";

export default function* () {
  yield all([global()]);
}
