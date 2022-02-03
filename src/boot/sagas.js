import { call, all } from 'redux-saga/effects'
import { dashboardActionWatcher } from "../containers/DashboardContainer/saga";

function* rootSaga() {
    yield all([
        call(dashboardActionWatcher),

    ])
}

export default rootSaga