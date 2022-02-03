import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./DashCard.css";

class Index extends Component {
  render() {
    const { pathName ,tabKey} = this.props;

    return (
      <div>
        <div
          className="c-dashboardInfo"
          onClick={() => this.props.history.push(`/${pathName}`,{tab:tabKey})}
        >
          <div className="wrap">
            {/* <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
              Total Agencies{this.props.cardTitle}
            </h4> */}
            <Row>
              <Col lg={8} md={8} sm={8} xs={8}>
                <h4 className="hind-font caption-12 c-dashboardInfo__count ">
                  {" "}
                  {this.props.count}
                </h4>
                <h4 className="heading heading5 hind-font medium-font-weight c-dashboardInfo__title dash-head-ovr">
                  {this.props.cardTitle}
                </h4>

                <h4 className="   countText2">{this.props.countText}</h4>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} className="pl-0">
                <div className="dashboradicon hind-font caption-12 c-dashboardInfo__count">
                  <div className=" dashboradroundcolor">
                    <i className={this.props.logo}></i>
                  </div>
                </div>
              </Col>
            </Row>

            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
