/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import api from "../../api_route.js";
import logo from "logo.png";
import auth from "components/auth/auth.js";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo">
          <a
            href="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a
            href="/"
            className="simple-text logo-normal"
          >
            {api.subdomain}
          </a>
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          <Nav>
            {
              auth.getPlan() === "Premium" ? (
                this.props.routes.map((r, key) => {
                  return (
                    <li
                      className={
                        this.activeRoute(r.path) +
                        (r.pro ? " active-pro" : "")
                      }
                      key={key}
                    >
                      <NavLink
                        to={r.layout + r.path}
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className={r.icon} />
                        <p>{r.name}</p>
                      </NavLink>
                    </li>
                  );
                })
              ) :
                auth.getPlan() === "Basico" ? (
                  this.props.routes.map((r, key) => {
                    return (
                      r.plan === "Basico" ? (
                        <li
                          className={
                            this.activeRoute(r.path) +
                            (r.pro ? " active-pro" : "")
                          }
                          key={key}
                        >
                          <NavLink
                            to={r.layout + r.path}
                            className="nav-link"
                            activeClassName="active"
                          >
                            <i className={r.icon} />
                            <p>{r.name}</p>
                          </NavLink>
                        </li>
                      ) : true
                    )
                  })
                ) :
                  auth.getPlan() === "Normal" ? (
                    this.props.routes.map((r, key) => {
                      return (
                        r.plan === "Basico" || r.plan === "Normal" ? (
                          <li
                            className={
                              this.activeRoute(r.path) +
                              (r.pro ? " active-pro" : "")
                            }
                            key={key}
                          >
                            <NavLink
                              to={r.layout + r.path}
                              className="nav-link"
                              activeClassName="active"
                            >
                              <i className={r.icon} />
                              <p>{r.name}</p>
                            </NavLink>
                          </li>
                        ) : true
                      )
                    })
                  ) : true
            }

          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
