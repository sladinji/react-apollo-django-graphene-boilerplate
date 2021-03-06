import React from "react";
import { ListGroup, ListGroupItem, Fa } from "mdbreact";
import { NavLink } from "react-router-dom";
import { DASHBOARD, PROFILE, TASKS, PROJECTS } from "../../constants/routes";

import i18n from "../../i18n";
import logo from "../../assets/logo.svg";

const Sidebar = () => (
  <div className="sidebar-fixed position-fixed">
    <a href={DASHBOARD} className="logo-wrapper waves-effect">
      <img alt="MDB React Logo" className="img-fluid" src={logo} />
    </a>
    <ListGroup className="list-group-flush">
      <NavLink exact={true} to={DASHBOARD} activeClassName="activeClass">
        <ListGroupItem>
          <Fa icon="pie-chart" className="mr-3" />
          {i18n.t("Dashboard")}
        </ListGroupItem>
      </NavLink>
      <NavLink to={PROFILE} activeClassName="activeClass">
        <ListGroupItem>
          <Fa icon="user" className="mr-3" />
          {i18n.t("Profile")}
        </ListGroupItem>
      </NavLink>
      <NavLink to={TASKS} activeClassName="activeClass">
        <ListGroupItem>
          <Fa icon="table" className="mr-3" />
          {i18n.t("Tasks")}
        </ListGroupItem>
      </NavLink>
      <NavLink to={PROJECTS} activeClassName="activeClass">
        <ListGroupItem>
          <Fa icon="table" className="mr-3" />
          {i18n.t("Projects")}
        </ListGroupItem>
      </NavLink>
    </ListGroup>
  </div>
);

export default Sidebar;
