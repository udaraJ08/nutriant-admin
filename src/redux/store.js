import createSagaMiddleware from "redux-saga"
import {compose, createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const composeEnhancer = compose

const configureStore = () => {
    const sagaMiddleWare = createSagaMiddleware()
    const middlewares = [sagaMiddleWare]
    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middlewares))
    )
    sagaMiddleWare.run(rootSaga)
    return store
}

export default configureStore
