import { all } from "redux-saga/effects";

import auth from "./auth";
import deal from "./deal";
import profile from "./profile";
import post from "./post";
import support from "./support";
import admin from "./admin";


export default function* rootSaga() {
  yield all([auth(), deal(), profile(), post(), support(), admin()]);
}
