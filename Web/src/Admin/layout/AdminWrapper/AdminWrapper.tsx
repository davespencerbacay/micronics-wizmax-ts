import React from "react";
import TopNavBar from "./components/TopNavBar";
import Sidebar from "Admin/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import "./AdminWrapper.scss";

interface AdminWrapperProps {
  children: React.ReactNode;
}

const AdminWrapper: React.FC<AdminWrapperProps> = (props) => {
  return (
    <div className="adminWrapper-container">
      <Grid container spacing={2}>
        <Grid item md={2}>
          <aside className="sidebar-container">
            <Sidebar />
          </aside>
        </Grid>
        <Grid item md={10}>
          <nav className="top-nav">
            <TopNavBar />
          </nav>
        </Grid>
      </Grid>
      <main className="AdminWrapper-content">{props.children}</main>
    </div>
  );
};

export default AdminWrapper;
