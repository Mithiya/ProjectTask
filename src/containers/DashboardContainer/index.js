import React from "react";
import { connect } from "react-redux";
import Actions from "./action";
import Dashboard from "../../screens/Dashboard";

const DashboardContainer = (props) => {
  return (
    <Dashboard

    dashboardDtlsList={props.dashboardDtlsList}
    fetchDashboardData={props.fetchDashboardData}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    ...state.dashboardReducer,
  };
};

export default connect(mapStateToProps, { ...Actions })(DashboardContainer);
