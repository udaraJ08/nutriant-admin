import {all, fork} from "redux-saga/effects"
import fruitSagas from "../views/Dashboard/saga";
import loginSagas from "../views/Login/saga";

export default function* rootSaga() {
    yield all(fruitSagas.map(s => fork(s)))
    yield all(loginSagas.map(s => fork(s)))
}
