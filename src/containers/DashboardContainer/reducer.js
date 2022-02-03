import { FETCH_DASHBOARD_SUCCESS_ACTION } from "./constants";

const initialState = {
  processing: false,
  error: false
};

export default function DashboardReducer(state: any = initialState, action: Function) {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS_ACTION:
        console.log(action.payload,"testttttttttttttt")

      return {
        ...state,
        dashboardDtlsList: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
