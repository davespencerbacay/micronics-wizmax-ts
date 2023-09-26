import React, { useState } from "react";
import AvatarSetter from "Admin/helpers/AvatarSetter";
import { Menu, MenuItem } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import ADMIN_ROUTES from "constants/adminRoutes";
import { useNavigate } from "react-router-dom";
import "./TopNavBar.scss";

const TopNavBar: React.FC = () => {
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
  const userName = response.name.toUpperCase();
  return (
    <div className="top-navbar-container">
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
  );
};

export default TopNavBar;
