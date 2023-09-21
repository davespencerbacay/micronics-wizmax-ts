import React from "react";
import TopNavBar from "./components/TopNavBar";
import Sidebar from "Admin/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import "./AdminWrapper.scss";
import Breadcrumb from "Admin/components/Breadcrumb/Breadcrumb";

interface AdminWrapperProps {
  children: React.ReactNode;
  breadcrumb: {
    title: string;
    link?: string;
  }[];
  className?: string;
  loading?: boolean;
  error?: boolean;
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
        <Grid item md={10} className="right-col-content-wrapper">
          <div className="right-col-content-container">
            <nav className="top-nav">
              <Breadcrumb crumbs={props.breadcrumb} />
              <TopNavBar />
            </nav>
            <main className="adminWrapper-content">{props.children}</main>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminWrapper;
