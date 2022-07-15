import * as actionTypes from './actionTypes'

const init = {
    createFruitLoader: false
}

const fruitReducer = (state=init, action) => {

    switch (action.type) {
        case actionTypes.HANDLE_CREATE_FRUIT_LOADER:
            return {
                ...state,
                createFruitLoader: action.payload
            }
        default:
            return state
    }
}

export default fruitReducer
