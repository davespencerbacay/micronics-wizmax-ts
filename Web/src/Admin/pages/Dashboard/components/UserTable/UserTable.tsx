import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Spinner from "library/Spinner/Spinner";
import { Users } from "Admin/api/agent";
import { UsersData } from "Admin/models/userModel";
import { toast } from "react-toastify";
import "./UserTable.scss";
import { Drawer, List } from "@mui/material";
import EditUser from "Admin/pages/Users/components/EditUser";

type Anchor = "right";

const UserTable: React.FC = () => {
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
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Fullname",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: false,
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      width: 800,
      editable: false,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
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
    return {
      id: user._id,
      fullName: user.firstName + " " + user.lastName,
      email: user.email,
      dateCreated: user.createdAt,
      actions: (
        <div className="grid-actions-btn">
          <button
            className="edit-btn"
            onClick={toggleDrawer("right", true, user._id)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteUserHandler(user._id)}
          >
            Delete
          </button>
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
                pageSize: 20,
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
          <List>
            <EditUser id={userId} />
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default UserTable;
