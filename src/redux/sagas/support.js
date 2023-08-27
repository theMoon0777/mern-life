import { api } from "../utils";
import { put, takeLatest } from "redux-saga/effects";
import { actions } from "../slices/support";


// Sign in with own email and password saga
function* postSupportStart({ payload }) {
  try {
    const res = yield api.post("/support", { payload });
  } catch (err) {
  }
}


function* getSupports() {
    try {
      const res = yield api.get("/support");
      yield put(actions.getSupportSuccess(res.data));
    } catch (err) {
        if(err)
            yield put(actions.getSupportFail(err.response.data));
    }
  }

export default function* authSagas() {
  yield takeLatest("support/postSupportStart", postSupportStart);
  yield takeLatest("support/getSupport", getSupports);
}
