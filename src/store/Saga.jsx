import * as Admin from "../api/Admin";
// import * as Services from "../api/Services"
import { takeLatest, takeEvery, all } from "redux-saga/effects";
function* adminActionWatcher() {
  yield takeLatest("LOGIN", Admin.getAdmin);
  yield takeLatest("FORGET_PASS", Admin.forgetpassword);
  yield takeLatest("Get_USERS", Admin.getALlUsers);
  yield takeLatest("GET_USER", Admin.getUser);
  yield takeLatest("GET_TRANSACTION", Admin.gettransactionUsers);

  yield takeLatest("RESET_PASSWORD", Admin.resetPassword);
}

export default function* rootSaga() {
  yield all([adminActionWatcher()]);
}
