
import * as actionTypes from "./constants";

const fetchDashboardData = (params) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_DASHBOARD_INIT_ACTION,
      params: params,
    });
  };
};




export default {
    fetchDashboardData
};
