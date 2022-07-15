import * as actionTypes from './actionTypes'

const init = {
    loginLoader: false
}

const loginReducer = (state=init, action) => {

    switch (action.type) {
        case actionTypes.HANDLE_LOGIN_LOADER:
            return {
                ...state,
                loginLoader: action.payload
            }
        default:
            return state
    }
}

export default loginReducer
