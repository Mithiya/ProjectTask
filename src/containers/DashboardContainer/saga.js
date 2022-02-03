import { put, takeEvery } from "redux-saga/effects";
import { appConfig } from "../../config";
import "react-toastify/dist/ReactToastify.css";
import {
  FETCH_DASHBOARD_INIT_ACTION,
  FETCH_DASHBOARD_SUCCESS_ACTION,
  FETCH_DASHBOARD_FAIL_ACTION
} from "./constants";


function* fetchDashboardData() {
  const token = 'bEaSyeDI-NCGbe9sONVunOkfYhq-VVGFEE9oALyU7p0fYEDK-GnHi14l0F6UftwCVTIzfzxCBg0Q2NxSpkg8kA';

  try {
    const res = yield fetch(`https://gorest.co.in/public/v1/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res,"responseee")
    if (!res.ok) {
      let errJSON = {};
      try {
        errJSON = yield res.json();
      } catch {}
      throw Object.assign(res, errJSON);
    } else {
      const resJSON = yield res.json();

    
      yield put({
        type: FETCH_DASHBOARD_SUCCESS_ACTION,
        payload: resJSON
      });
    }
  } catch (err) {
    if (err.ok === false) {
      yield put({ type: FETCH_DASHBOARD_FAIL_ACTION, error: err });
    } else {
    }
  }
}

export function* dashboardActionWatcher() {
  yield takeEvery(FETCH_DASHBOARD_INIT_ACTION, fetchDashboardData);
}
