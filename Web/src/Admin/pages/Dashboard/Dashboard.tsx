import React from "react";
import { Container, Grid } from "@mui/material";
import "./Dashboard.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Grid container spacing={2}>
        <Grid item md={3}>
          <div className="dashboard-sidebar">
            <aside>
              <Sidebar />
            </aside>
          </div>
        </Grid>
        <Grid item md={9}>
          <Container>
            <div className="dashboard-main-container">main</div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
