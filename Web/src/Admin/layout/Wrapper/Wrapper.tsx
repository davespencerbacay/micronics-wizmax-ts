import React from "react";
import TopNavBar from "./components/TopNavBar";
import Sidebar from "Admin/components/Sidebar/Sidebar";
import { Grid } from "@mui/material";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <div className="wrapper-container">
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
      <main className="wrapper-content">{props.children}</main>
    </div>
  );
};

export default Wrapper;
