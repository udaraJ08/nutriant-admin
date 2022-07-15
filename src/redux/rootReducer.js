import {combineReducers} from "redux"
import fruitReducer from "../views/Dashboard/reducer";
import loginReducer from "../views/Login/reducer";

const rootReducer = combineReducers({
    loginReducer,
    fruitReducer,
})

export default rootReducer
