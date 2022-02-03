import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {ToastContainer, toast} from 'react-toastify'

import configureStore from './configureStore'
import AppNavigator from '../Navigation'

const {store, persistor, history} = configureStore()

function App(){
    return (
        <Provider store={store}>
            <ToastContainer hideProgressBar={true}/>
            <ConnectedRouter history={history}>
                <div>
                    <AppNavigator/>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}

export default App