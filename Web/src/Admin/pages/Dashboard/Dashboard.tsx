import React from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { Grid } from "@mui/material";
import UserTable from "./components/UserTable/UserTable";
import "./Dashboard.scss";
import DashBoardUser from "./components/UserTable/DashBoardUser";

const Dashboard: React.FC = () => {
	return (
		<div>
			<AdminWrapper>
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
