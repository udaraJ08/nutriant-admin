import* as actionTypes from './actionTypes'
import {call, put, takeLatest} from "redux-saga/effects";
import axios from "../../axios/axios";
import {Auth} from "aws-amplify";
import {fireAlert} from "../../utils/utils";
import {handleLoginLoader} from "./actions";

const loginAsync = async (username, password, navigate) => {
    return await Auth.signIn(username, password).then(() => {
        window.localStorage.setItem("user", "logged")
        navigate('/dashboard')
    }).catch((err) => {
        fireAlert("hmmm...", err.message, "error")
        return false
    })
}

const logoutUserAsync = async (navigate) => {

    return await Auth.signOut().then(() => {
        window.localStorage.removeItem("user")
        navigate("/")
    }).catch(err => {
        console.error(err.message)
    })
}

////////////////
//ASYNC finished
////////////////

export function* loginSagasCB(action) {

    const {payload, navigate} = action

    try {
        yield put(handleLoginLoader(true))
        yield call(loginAsync, payload.userName, payload.password, navigate)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleLoginLoader(false))
    }
}

export function* logoutCB(action) {

    const {navigate} = action

    try {
        yield call(logoutUserAsync, navigate)
    } catch (err) {
        console.error(err.message)
    }
}

function* watchLoginSagas() {
    yield takeLatest(actionTypes.LOGIN_LISTEN, loginSagasCB)
    yield takeLatest(actionTypes.LOGOUT_LISTEN, logoutCB)
}

const loginSagas = [watchLoginSagas]

export default loginSagas
