import { api } from "../utils";
import { put, takeLatest } from "redux-saga/effects";

import { actions } from "../slices/post";

// Sign in with own email and password saga
function* createPostStart({ payload }) {
  try {
    const res = yield api.post("/post", { payload });
    yield put(actions.createPostSuccess(res));
  } catch (err) {
    yield put(actions.createPostFailure(err.response.data));
  }
}

function* getPosts() {
    try {
        const res = yield api.get("/post");
        yield put(actions.getPostsSuccess(res.data));
    }
    catch(err) {
        yield put(actions.getPostsFailure(err.response.data));
    }
}

function* getPost(payload) {
    try {
        const res = yield api.get("/post/"+ payload.payload);
        yield put(actions.getPostSuccess(res.data));
    }
    catch(err) {
        yield put(actions.getPostFailure(err.response.data));
    }
}

function* getAllPosts() {
    try {
        const res = yield api.get("/posts");
        yield put(actions.getAllPostsSuccess(res.data));
    }
    catch(err) {
        yield put(actions.getAllPostsFailure(err.response.data));
    }
}

function* setTaking({payload}) {
    try {
        const res = yield api.post("/posts/settaking", {payload});
        yield put(actions.setTakingSuccess(res.data));
    }
    catch(err) {
        yield put(actions.setTakingsFailure(err.response.data));
    }
}

// send Msg Part
function* sendMsg({payload}) {
    try {
        const res = yield api.post("/msg", {payload});
        // yield put(actions.setTakingSuccess(res.data));
    }
    catch(err) {
        // yield put(actions.setTakingsFailure(err.response.data));
    }
}

// get msg
function* getMsg({payload}) {
    try {
        const res = yield api.get("/msg/:" + payload);
        yield put(actions.getMsgSuccess(res.data));
    }
    catch(err) {
        yield put(actions.getMsgFailure(err.response.data));
    }
}

function* unsetTaking({payload}) {
    try {
        const res = yield api.post("/posts/unsettaking", {payload});
        yield put(actions.unsetTakingSuccess(res.data));
    }
    catch(err) {
        yield put(actions.unsetTakingsFailure(err.response.data));
    }
}

export default function* authSagas() {
  yield takeLatest("post/createPostStart", createPostStart);
  yield takeLatest("post/getPostsStart", getPosts);
  yield takeLatest("post/getAllPostsStart", getAllPosts);
  yield takeLatest("post/setTakingStart", setTaking);
  yield takeLatest("post/unsetTakingStart", unsetTaking);
  
  yield takeLatest("post/postMsgStart", sendMsg);
  yield takeLatest("post/getMsgStart", getMsg);

  yield takeLatest("post/getPostStart", getPost);

}
