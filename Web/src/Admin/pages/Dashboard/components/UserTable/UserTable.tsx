import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "./UserTable.scss";
import Spinner from "library/Spinner/Spinner";
import { Users } from "Admin/api/users";
import { UsersData } from "Admin/models/userModel";

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<UsersData[] | undefined>();
  const [loading, setLoading] = useState(false);

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
      editable: true,
    },
    {
      field: "email",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "dateCreated",
      headerName: "Date Created",
      width: 150,
      editable: true,
    },
  ];

  const rows = users?.map((user) => {
    return {
      id: user._id,
      fullName: user.firstName + " " + user.lastName,
      email: user.email,
      dateCreated: user.createdAt,
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
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default UserTable;
