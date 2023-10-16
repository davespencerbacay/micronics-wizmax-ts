import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable/UserTable";
import { BiPlus } from "react-icons/bi";
import Spinner from "library/Spinner/Spinner";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ROUTE_PATH } from "constants/routes";
import { CrumbTypes } from "../Dashboard/components/types";
import Form from "./components/UserForm";
import { GridColDef } from "@mui/x-data-grid";
import { UsersData } from "Admin/models/userModel";
import { Users } from "Admin/api/agent";
import { toast } from "react-toastify";
import helpers from "helpers/helpers";
import "./UserPage.scss";
import AdminButton from "library/AdminButton/AdminButton";

const crumbs: CrumbTypes[] = [
  {
    title: "Wizmax Global",
    url: ROUTE_PATH.DASHBOARD,
    isActive: false,
  },
  {
    title: "Users",
    url: ROUTE_PATH.USERS,
    isActive: true,
  },
];

const UserPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [users, setUsers] = useState<UsersData[] | undefined>();
  const [userId, setUserId] = useState<string>("");
  const [open, setOpen] = useState(false);
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

  const style = {
    position: "absolute" as "absolute",
    borderRadius: 3,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#eee",
  };

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

  const rows = users?.map((user) => {
    const date = new Date(user.createdAt);
    const formattedDate = date.toDateString();
    const fullName = `${user.firstName} ${user.lastName}`;
    const showRole = user.isAdmin ? "Admin" : "Staff";

    const getUser = localStorage.getItem("user");
    const parseUserId = JSON.parse(getUser ?? "");
    const userId = parseUserId._id;

    return {
      id: user._id,
      fullName: helpers.titleCase(fullName),
      email: user.email,
      dateCreated: formattedDate,
      isAdmin: showRole,
      actions: (
        <div className="grid-actions-btn">
          <AdminButton
            variant="default"
            onClick={() => {
              setIsEditMode(true);
              setUserId(user._id);
              setIsDrawerOpen(true);
            }}
          >
            Edit
          </AdminButton>

          <AdminButton
            variant="danger"
            onClick={() => {
              setOpen(true);
            }}
            disabled={user._id === userId}
          >
            Delete
          </AdminButton>
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
                  <AdminButton
                    variant="default"
                    onClick={() => {
                      deleteUserHandler(user._id);
                    }}
                  >
                    Yes
                  </AdminButton>
                  <AdminButton variant="danger" onClick={() => setOpen(false)}>
                    No
                  </AdminButton>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      ),
    };
  });

  return (
    <AdminWrapper breadcrumb={crumbs}>
      {loading ? (
        <Spinner variant="fixed" />
      ) : (
        <div className="user-page-container">
          <div className="add-user-btn">
            <AdminButton
              variant="default"
              onClick={() => {
                setIsDrawerOpen(true);
                setIsEditMode(false);
                setUserId("");
              }}
            >
              <BiPlus /> Add an User
            </AdminButton>
            <div className="drawer-container">
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <Box sx={{ width: 400 }} role="presentation">
                  <List>
                    <Form isEditMode={isEditMode} id={userId} />
                  </List>
                </Box>
              </Drawer>
            </div>
            <div className="content-label">
              <h3>Users</h3>
              <p>List of all users.</p>
            </div>
          </div>
          <div className="user-table">
            <UserTable columns={columns} rows={rows} loading={loading} />
          </div>
        </div>
      )}
    </AdminWrapper>
  );
};

export default UserPage;
