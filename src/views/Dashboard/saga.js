import axios from "../../axios/axios";
import * as actionTypes from './actionTypes'
import {put, call, takeLatest} from "redux-saga/effects"
import {handleFruitCreateLoader} from "./actions";
import {jsonToFormData} from "../../utility/utils";

const createFruitAsync = (payload) => {

    const formData = jsonToFormData(payload)

    return axios.post('/fruits', formData, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
    }).then(res => alert('done')).catch(err => {
        console.error(err.message)
    })
}

/////////////////
//ASYNC finished
////////////////

export function* createFruitCB(action) {

    const {payload} = action

    try {
        yield put(handleFruitCreateLoader(true))
        yield call(createFruitAsync, payload)
    } catch (err) {
        console.error(err.message)
    } finally {
        yield put(handleFruitCreateLoader(false))
    }
}

function* watchFruitSagas() {
    yield takeLatest(actionTypes.CREATE_FRUIT_LISTEN, createFruitCB)
}

const fruitSagas = [watchFruitSagas]

export default fruitSagas
