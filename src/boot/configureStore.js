import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import {connectRouterm, routerMiddleware} from 'connected-react-router'
import * as History from 'history'

import createRootReducer from '../reducers'
import saga from './sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
export const history = History.createBrowserHistory()

const middleware = [
    thunk,
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware(history)
]

const initialState = {}

export default function configureStore(onCompletion:()=>void):any{
    const enhancer = compose (
        applyMiddleware(...middleware)
    )
    const store =  createStore(createRootReducer(history), initialState, enhancer)
    sagaMiddleware.run(saga)

    const persistor = persistStore(store, onCompletion)
    return {persistor, store, history}
}