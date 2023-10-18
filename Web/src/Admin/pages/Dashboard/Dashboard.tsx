import React from "react";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { Grid } from "@mui/material";
import "./Dashboard.scss";
import DashBoardUser from "../Users/components/UserTable/DashBoardUser";
import { CrumbTypes } from "./components/types";
import { ROUTE_PATH } from "constants/routes";
import DashboardProduct from "../Products/components/DashboardProduct";
import { useNavigate } from "react-router-dom";
import ADMIN_ROUTES from "constants/adminRoutes";

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

	const navigate = useNavigate();
	return (
		<div>
			<AdminWrapper breadcrumb={crumbs}>
				<Grid container spacing={2} className="dashboard-container">
					<Grid item md={6}>
						<div className="dashboard-table-container">
							<h3 onClick={() => navigate(ADMIN_ROUTES.USERS)}>Users</h3>
							<DashBoardUser />
						</div>
					</Grid>
					<Grid item md={6}>
						<div className="dashboard-table-container">
							<h3 onClick={() => navigate(ADMIN_ROUTES.PRODUCTS)}>Products</h3>
							<DashboardProduct />
						</div>
					</Grid>
				</Grid>
			</AdminWrapper>
		</div>
	);
};

export default Dashboard;
