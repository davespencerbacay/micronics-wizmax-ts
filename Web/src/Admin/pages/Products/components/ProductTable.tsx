import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridProps } from "Admin/pages/Users/components/UserTable/UserTable";
import React from "react";

const ProductTable: React.FC<DataGridProps> = (props) => {
  return (
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
  );
};

export default ProductTable;
