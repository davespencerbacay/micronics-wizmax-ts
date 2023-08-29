import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Grid container spacing={1}>
        <Grid item md={2}>
          <div className="dashboard-sidebar">
            <Sidebar />
          </div>
        </Grid>
        <Grid item md={10}>
          <div className="dashboard-main-container">main</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
