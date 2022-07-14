import * as actionTypes from './actionTypes'

//Use this to create the fruit
export const createFruitListen = payload => {

    return {
        type: actionTypes.CREATE_FRUIT_LISTEN,
        payload
    }
}

export const createFruitSuccess = () => {

    return {
        type: actionTypes.CREATE_FRUIT_SUCCESS
    }
}

//Use this to handle the fruit create loader
export const handleFruitCreateLoader = (payload) => {
    return {
        type: actionTypes.HANDLE_CREATE_FRUIT_LOADER,
        payload
    }
}
