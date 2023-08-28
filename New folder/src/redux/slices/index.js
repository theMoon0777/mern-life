import { combineReducers } from "redux";
import { reducer as auth } from "./auth";
import { reducer as profile } from "./profile";
import { reducer as post} from "./post";
import { reducer as support} from "./support";
import { reducer as admin} from "./admin";

const rootReducer = combineReducers({ auth, profile, post, support, admin });

export default rootReducer;
