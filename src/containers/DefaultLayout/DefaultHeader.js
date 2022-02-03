import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from "reactstrap";
import PropTypes from "prop-types";
import "./DefaultLayout.css";
import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import { appConfig } from "../../config";
import { connect } from "react-redux";
import { Image } from "react-bootstrap";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  componentDidMount() {
  }


  render() {
    

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
      
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">

            {/* <NavLink to="/dashboard" className="nav-link" style={{"color":"white"}} >Dashboard</NavLink> */}
          </NavItem>
          <NavItem className="px-3">

          </NavItem>
          <NavItem className="px-3">

          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">

          </NavItem>
          <NavItem className="d-md-down-none">

          </NavItem>
          <NavItem className="d-md-down-none">

          </NavItem>


          
         


          <UncontrolledDropdown nav direction="down">

           

            <DropdownMenu right>

             
              <Link to="/resetpassword" className="myprofilebtn">
                <DropdownItem>Reset Password</DropdownItem>
              </Link>

              <DropdownItem onClick={(e) => this.props.onLogout(e)}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}


DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;