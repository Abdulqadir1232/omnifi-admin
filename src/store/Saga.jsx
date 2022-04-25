import * as Admin from "../api/Admin";
// import * as Services from "../api/Services"
import { takeLatest, takeEvery, all } from "redux-saga/effects";
function* adminActionWatcher() {
  yield takeLatest("LOGIN", Admin.getAdmin);
}

export default function* rootSaga() {
  yield all([adminActionWatcher()]);
}
