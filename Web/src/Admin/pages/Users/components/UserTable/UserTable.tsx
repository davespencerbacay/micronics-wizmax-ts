import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Spinner from "library/Spinner/Spinner";
import "./UserTable.scss";

interface UserTable {
  loading: boolean;
  rows: any;
  columns: any;
}

const UserTable: React.FC<UserTable> = (props) => {
  if (props.loading) {
    return <Spinner variant="fixed" />;
  }

  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={props.rows || []}
          columns={props.columns}
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
    </div>
  );
};

export default UserTable;
