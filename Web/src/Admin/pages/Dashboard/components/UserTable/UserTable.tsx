import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Spinner from "library/Spinner/Spinner";
import { Users } from "Admin/api/agent";
import { UsersData } from "Admin/models/userModel";
import { toast } from "react-toastify";
import { Drawer, List } from "@mui/material";
import helpers from "helpers/helpers";
import "./UserTable.scss";

type Anchor = "right";

const UserTable: React.FC = () => {
	const [users, setUsers] = useState<UsersData[] | undefined>();
	const [loading, setLoading] = useState(false);
	const [userId, setUserId] = useState<string>("");
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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

	const style = {
		position: "absolute" as "absolute",
		borderRadius: 3,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "#eee",
		border: "1px solid #000",
		boxShadow: 15,
		p: 5,
	};

	const columns: GridColDef[] = [
		{ field: "id", headerName: "ID", width: 250, editable: true },
		{
			field: "fullName",
			headerName: "Fullname",
			width: 260,
			editable: false,
		},
		{
			field: "email",
			headerName: "Email",
			width: 220,
			editable: false,
		},
		{
			field: "dateCreated",
			headerName: "Date Created",
			width: 200,
			editable: false,
		},
		{
			field: "isAdmin",
			headerName: "Role",
			width: 300,
			align: "center",
			headerAlign: "center",
			editable: false,
		},
		{
			field: "actions",
			headerName: "Actions",
			width: 180,
			renderCell: (params) => params.value,
			headerAlign: "center",
			align: "center",
		},
	];

	const deleteUserHandler = async (userId: string) => {
		setLoading(true);
		await Users.deleteUser(userId);
		toast.success("User successfully Deleted");
		setLoading(false);

		const filteredUsers = users?.filter((data) => data._id !== userId);
		setUsers(filteredUsers);
		setOpen(false);
	};

	// Edit User Function
	const [state, setState] = useState({
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean, id?: string | undefined) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
			setUserId(id ?? "");
		};

	const rows = users?.map((user) => {
		const date = new Date(user.createdAt);
		const formattedDate = date.toDateString();

		const fullName = `${user.firstName} ${user.lastName}`;

		const showRole = user.isAdmin ? "Admin" : "Staff";

		return {
			id: user._id,
			fullName: helpers.titleCase(fullName),
			email: user.email,
			dateCreated: formattedDate,
			isAdmin: showRole,
			actions: (
				<div className="grid-actions-btn">
					<button
						className="edit-btn"
						onClick={toggleDrawer("right", true, user._id)}
					>
						Edit
					</button>

					<button className="delete-btn" onClick={() => setOpen(true)}>
						Delete
					</button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<div className="modal-container">
								<h3>Are you sure you want to delete this user?</h3>
								<div className="modal-btn">
									<Button
										variant="contained"
										onClick={() => deleteUserHandler(user._id)}
									>
										Yes
									</Button>
									<Button
										variant="contained"
										color="error"
										onClick={() => setOpen(false)}
									>
										No
									</Button>
								</div>
							</div>
						</Box>
					</Modal>
				</div>
			),
		};
	});

	if (loading) {
		return <Spinner variant="fixed" />;
	}

	return (
		<div>
			<Box sx={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows || []}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					pageSizeOptions={[5]}
					disableRowSelectionOnClick
				/>
			</Box>
			<Drawer
				anchor="right"
				open={state["right"]}
				onClose={toggleDrawer("right", false)}
			>
				<Box sx={{ width: 400 }} role="presentation">
					<List></List>
				</Box>
			</Drawer>
		</div>
	);
};

export default UserTable;
