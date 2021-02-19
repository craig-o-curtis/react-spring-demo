import React from "react";
import { NavLink } from "react-router-dom";
import { Classes, Icon } from "@blueprintjs/core";

const CustomNavLink = ({
  exact = false,
  to = "/",
  icon = "home",
  text = "Home",
}) => {
  return (
    <NavLink
      exact={exact}
      to={to}
      className={`${Classes.BUTTON} ${Classes.MINIMAL}`}
      activeClassName={`${Classes.ACTIVE}`}
    >
      <Icon icon={icon} />
      <span>{text}</span>
    </NavLink>
  );
};

export default CustomNavLink;
