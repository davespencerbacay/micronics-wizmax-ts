import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Users } from "Admin/api/agent";
import { UsersData } from "Admin/models/userModel";
import helpers from "helpers/helpers";
import Spinner from "library/Spinner/Spinner";
import React, { useEffect, useState } from "react";

const DashBoardUser = () => {
	const [users, setUsers] = useState<UsersData[] | undefined>();
	const [loading, setLoading] = useState(false);
	const [userId, setUserId] = useState<string>("");

	// Fetch All Users Function
	useEffect(() => {
		setLoading(true);
		const getUsers = async () => {
			const response = await Users.getUsers();
			setUsers(response);
			setLoading(false);
		};

		getUsers();
	}, []);

	const columns: GridColDef[] = [
		{
			field: "fullName",
			headerName: "Fullname",
			width: 300,
			editable: false,
		},
		{
			field: "email",
			headerName: "Email",
			width: 300,
			editable: false,
		},
		{
			field: "dateCreated",
			headerName: "Date Created",
			width: 250,
			editable: false,
		},
	];

	const rows = users?.map((user) => {
		const date = new Date(user.createdAt);
		const formattedDate = date.toDateString();

		const fullName = `${user.firstName} ${user.lastName}`;

		return {
			id: user._id,
			fullName: helpers.titleCase(fullName),
			email: user.email,
			dateCreated: formattedDate,
		};
	});

	return (
		<React.Fragment>
			{loading ? (
				<Spinner variant="fixed" />
			) : (
				<div className="user-container-dashboard">
					<Box sx={{ height: 400, width: "100%" }}>
						<DataGrid
							rows={rows || []}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: {
										pageSize: 5,
									},
								},
							}}
							pageSizeOptions={[5]}
							disableRowSelectionOnClick
						/>
					</Box>
				</div>
			)}
		</React.Fragment>
	);
};

export default DashBoardUser;
