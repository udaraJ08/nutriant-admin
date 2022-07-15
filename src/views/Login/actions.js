import * as actionTypes from './actionTypes'

//Use this to login
export const loginListen = (payload, navigate) => {

    return {
        type: actionTypes.LOGIN_LISTEN,
        payload,
        navigate
    }
}

export const loginSuccess = () => {

    return {
        type: actionTypes.LOGIN_SUCCESS
    }
}

//Use this to handle the login loader
export const handleLoginLoader = (payload) => {

    return {
        type: actionTypes.HANDLE_LOGIN_LOADER,
        payload
    }
}

//Use this to logout
export const logoutListen = (navigate) => {

    return {
        type: actionTypes.LOGOUT_LISTEN,
        navigate
    }
}

export const logoutSuccess = () => {

    return {
        type: actionTypes.LOGOUT_SUCCESS
    }
}
