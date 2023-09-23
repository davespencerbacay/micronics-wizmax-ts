import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import React, { useState } from "react";
import UserTable from "../Dashboard/components/UserTable/UserTable";
import { BiPlus } from "react-icons/bi";
import Spinner from "library/Spinner/Spinner";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import "./UserPage.scss";
import { FaUsers } from "react-icons/fa";
import { ROUTE_PATH } from "constants/routes";
import { CrumbTypes } from "../Dashboard/components/types";
import Form from "./components/Form";

type Anchor = "right";

const Users: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => {
    return (
      <Box sx={{ width: 400 }} role="presentation">
        <List>
          {/* <CreateUser /> */}
          <Form isEditMode={false} header="Add User" />
        </List>
      </Box>
    );
  };

  const crumbs: CrumbTypes[] = [
    {
      title: "Wizmax Global",
      url: ROUTE_PATH.DASHBOARD,
      isActive: false,
    },
    {
      title: "Users",
      url: ROUTE_PATH.USERS,
      isActive: true,
    },
  ];

  return (
    <React.Fragment>
      {loading ? (
        <Spinner variant="fixed" />
      ) : (
        <AdminWrapper breadcrumb={crumbs}>
          <div className="user-page-container">
            <div className="add-user-btn">
              <button onClick={toggleDrawer("right", true)}>
                {" "}
                <BiPlus /> Add an User
              </button>
              <div className="drawer-container">
                <Drawer
                  anchor="right"
                  open={state["right"]}
                  onClose={toggleDrawer("right", false)}
                >
                  {list("right")}
                </Drawer>
              </div>
            </div>
            <div className="user-table">
              <h3 className="content-label">
                {" "}
                <FaUsers /> Users
              </h3>
              <UserTable />
            </div>
          </div>
        </AdminWrapper>
      )}
    </React.Fragment>
  );
};

export default Users;
