import {all, fork} from "redux-saga/effects"
import fruitSagas from "../views/Dashboard/saga";

export default function* rootSaga() {
    yield all(fruitSagas.map(s => fork(s)))
}
