import Badge from "library/Badge/Badge";
import React from "react";
import { Link } from "react-router-dom";
import { NavProps } from "reactstrap";
import { Nav, NavItem } from "reactstrap";
import "./Sidebar.scss";

interface ISidebar extends NavProps {
  title: string;
  isVisible?: boolean;
  navItems: {
    link: string;
    text: string;
    count: number;
  }[];
}
const Sidebar: React.FC<ISidebar> = (props) => {
  return (
    <div className="sidebar-container">
      <h5>{props.title}</h5>
      <Nav vertical={props.vertical} className="sidebar-categories">
        {props.navItems.map((item) => (
          <NavItem key={item.text}>
            <Link to={item.link}>{item.text}</Link>
            <Badge value={item.count} />
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

Sidebar.defaultProps = {
  isVisible: true,
  vertical: true,
};

export default Sidebar;
