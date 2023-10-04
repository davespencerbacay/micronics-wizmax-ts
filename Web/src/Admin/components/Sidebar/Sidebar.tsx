import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import "./Sidebar.scss";
import SidebarLinks from "./SidebarLinks";
import { ROUTE_PATH } from "constants/routes";

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <ProSidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={() => setToggled(true)}
      breakPoint="sm"
    >
      {/* Header */}
      <SidebarHeader>
        <Menu iconShape="circle">
          {collapsed ? (
            <MenuItem
              icon={<FaAngleDoubleRight />}
              onClick={() => setCollapsed((prevState) => !prevState)}
            ></MenuItem>
          ) : (
            <MenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={() => setCollapsed((prevState) => !prevState)}
            >
              <div
                style={{
                  padding: "9px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 15,
                  letterSpacing: "1px",
                }}
              >
                Wizmax
              </div>
            </MenuItem>
          )}
        </Menu>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <Menu iconShape="circle">
          {SidebarLinks.map((item, index) => {
            return (
              <React.Fragment>
                <MenuItem icon={item.icon} key={index}>
                  {item.name}
                  <NavLink to={item.linkTo} />
                </MenuItem>
              </React.Fragment>
            );
          })}
          {/* <MenuItem icon={<RxDashboard />}>
						Dashboard
						<NavLink to={ADMIN_ROUTES.DASHBOARD} />
					</MenuItem>
					<MenuItem icon={<FaUsers />}>
						Users
						<NavLink to={ADMIN_ROUTES.USERS} />
					</MenuItem>
					{/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
          {/* <MenuItem icon={<FaClipboardList />}>
						Products <Link to={ADMIN_ROUTES.PRODUCTS} />
					</MenuItem>
					<MenuItem icon={<FaQuestion />}>
						FAQs <Link to={ADMIN_ROUTES.FAQs} />
					</MenuItem> */}
          {/* <SubMenu title={"With Suffix"} icon={<FaRegLaughWink />}>
						<MenuItem>Submenu 1</MenuItem>
						<MenuItem>Submenu 2</MenuItem>
						<MenuItem>Submenu 3</MenuItem>
					</SubMenu>
					<SubMenu title={"With Prefix"} icon={<FaHeart />}>
						<MenuItem>Submenu 1</MenuItem>
						<MenuItem>Submenu 2</MenuItem>
						<MenuItem>Submenu 3</MenuItem>
					</SubMenu>
					<SubMenu title={"Multi Level"} icon={<FaList />}>
						<MenuItem>Submenu 1 </MenuItem>
						<MenuItem>Submenu 2 </MenuItem>
						<SubMenu title={"Submenu 3"}>
							<MenuItem>Submenu 3.1 </MenuItem>
							<MenuItem>Submenu 3.2 </MenuItem>
						</SubMenu>
					</SubMenu> */}
          {/* Commented for future use, please discard for now. */}
        </Menu>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "16px" }}>
          <Link
            className="sidebar-btn"
            style={{ cursor: "pointer", color: "#fff" }}
            to={ROUTE_PATH.INDEX}
          >
            <BsGlobe />
            <span
              style={{
                color: "#cfc1db",
                marginLeft: "1rem",
                fontWeight: "300",
              }}
            >
              Wizmax Global Website
            </span>
          </Link>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
