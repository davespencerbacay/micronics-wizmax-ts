import React, { useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import ADMIN_ROUTES from "constants/adminRoutes";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import AvatarSetter from "Admin/helpers/AvatarSetter";
import "./Dashboard.scss";
import UserTable from "./components/UserTable/UserTable";
import Card from "library/BigCard/BigCard";
import { PiUsersThreeFill } from "react-icons/pi";

const Dashboard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate(ADMIN_ROUTES.ADMIN);
  };

  // Local Storage Value Variables
  const localStorageResponse = localStorage.getItem("user");
  const response = JSON.parse(localStorageResponse ?? "");
  const userName = response.name;

  return (
    <div className="dashboard-container">
      <Grid container spacing={1}>
        <Grid item sm={2}>
          <div className="dashboard-sidebar">
            <Sidebar />
          </div>
        </Grid>
        <Grid item sm={10}>
          <div className="dashboard-main-container">
            <div className="header-panel-container">
              <button onClick={handleClick}>
                <AvatarSetter name={userName} />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="profile-menu"
              >
                <h2>{userName}</h2>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <CgProfile /> My account{" "}
                </MenuItem>
                <MenuItem onClick={logoutHandler}>
                  <BiLogOut /> Log Out
                </MenuItem>
              </Menu>
            </div>
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
              <Grid item md={6}>
                <Card
                  title="Most Recent Users"
                  subtitle="This is list of all users."
                >
                  <div className="user-table-container">
                    <UserTable />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
