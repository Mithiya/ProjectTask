import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import {connectRouter} from 'connected-react-router'
import storage from 'redux-persist/es/storage'

import DashboardReducer from "../containers/DashboardContainer/reducer";

import store, {history} from '../boot/configureStore'

const createRootReducer = history=>
combineReducers({
    router:connectRouter(history),
    DashboardReducer,

})

export default createRootReducer