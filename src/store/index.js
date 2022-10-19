import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import mySaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const index = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default index;
