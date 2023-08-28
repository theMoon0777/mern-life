import { api } from "../utils";
import { put, takeLatest } from "redux-saga/effects";
import { actions } from "../slices/admin";


// Sign in with own email and password saga
function* postSupportStart({ payload }) {
  try {
    const res = yield api.post("/support", { payload });
  } catch (err) {
  }
}


function* getUsers() {
    try {
        const res = yield api.get("/admin/users");
        yield put(actions.getUsersSuccess(res.data));
    } catch (err) {
        if(err)
            yield put(actions.getUsersFail(err.response.data));
    }
}

function* getPosts() {
try {
    const res = yield api.get("/admin/posts");
    yield put(actions.getPostsSuccess(res.data));
} catch (err) {
    if(err)
        yield put(actions.getPostsFail(err.response.data));
}
}

export default function* authSagas() {
  yield takeLatest("admin/getUsers", getUsers);
  yield takeLatest("admin/getPosts", getPosts);
}
