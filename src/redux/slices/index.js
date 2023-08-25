import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as deal } from "./deal";
import { reducer as profile } from "./profile";
import { reducer as post} from "./post";

const rootReducer = combineReducers({ auth, deal, profile, post });

export default rootReducer;
