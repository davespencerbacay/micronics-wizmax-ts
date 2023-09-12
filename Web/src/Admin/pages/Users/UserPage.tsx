import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import React, { useState } from "react";
import UserTable from "../Dashboard/components/UserTable/UserTable";
import { BiPlus } from "react-icons/bi";
import Spinner from "library/Spinner/Spinner";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CreateUser from "./components/CreateUser";
import "./UserPage.scss";

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
          <CreateUser />
        </List>
      </Box>
    );
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner variant="fixed" />
      ) : (
        <AdminWrapper>
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
            <UserTable />
          </div>
        </AdminWrapper>
      )}
    </React.Fragment>
  );
};

export default Users;
