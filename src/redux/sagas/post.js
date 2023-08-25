import { api } from "../utils";
import { put, takeLatest } from "redux-saga/effects";

import { actions } from "../slices/post";

// Sign in with own email and password saga
function* createPostStart({ payload }) {
  console.log("post saga ___" + payload);
  try {
    const res = yield api.post("/post", { payload });
    yield put(actions.createPostSuccess(res));
  } catch (err) {
    yield put(actions.createPostFailure(err.response.data));
  }
}


export default function* authSagas() {
  yield takeLatest("post/createPostStart", createPostStart);
}
