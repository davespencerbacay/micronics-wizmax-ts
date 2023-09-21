import React from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { Grid } from "@mui/material";
import "./Dashboard.scss";
import DashBoardUser from "./components/UserTable/DashBoardUser";
import { CrumbTypes } from "./components/types";
import { ROUTE_PATH } from "constants/routes";

const Dashboard: React.FC = () => {
  const crumbs: CrumbTypes[] = [
    {
      title: "Wizmax Global",
      url: ROUTE_PATH.DASHBOARD,
      isActive: false,
    },
    {
      title: "Dashboard",
      url: ROUTE_PATH.DASHBOARD,
      isActive: true,
    },
  ];
  return (
    <div>
      <AdminWrapper breadcrumb={crumbs}>
        <Grid container spacing={2} className="dashboard-container">
          <Grid item md={7}>
            <div className="user-table-container">
              <DashBoardUser />
            </div>
          </Grid>
        </Grid>
      </AdminWrapper>
    </div>
  );
};

export default Dashboard;
