import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Products, Users } from "Admin/api/agent";
import { ProductsData } from "Admin/models/productModel";
import helpers from "helpers/helpers";
import Spinner from "library/Spinner/Spinner";
import React, { useEffect, useState } from "react";

const DashboardProduct = () => {
	const [products, setProducts] = useState<ProductsData[] | undefined>();
	const [loading, setLoading] = useState(false);
	const [productId, setProductId] = useState<string>("");

	// Fetch All Users Function
	useEffect(() => {
		setLoading(true);
		const getProducts = async () => {
			const response = await Products.getAllProducts();
			setProducts(response);
			setLoading(false);
		};

		getProducts();
	}, []);

	const columns: GridColDef[] = [
		{
			field: "productImage",
			headerName: "Product Image",
			width: 200,
			editable: true,
			renderCell: (params) => params.value,
		},
		{ field: "id", headerName: "ID", width: 270 },

		{
			field: "category",
			headerName: " Product Category",
			width: 200,
			editable: true,
		},
		{
			field: "productName",
			headerName: "Product Name",
			width: 200,
			editable: false,
		},

		{
			field: "createdAt",
			headerName: "Date Created",
			width: 200,
			editable: false,
		},
	];

	const rows = products?.map((product) => {
		const date = new Date(product.createdAt);
		const formattedDate = date.toDateString();
		const productName = product.productName;

		return {
			id: product._id,
			category: helpers.titleCase(product.category),
			productImage: (
				<img
					src={product.productImage}
					alt={product.productImage}
					className="product-image-admin"
				/>
			),
			productName: helpers.titleCase(productName),
			createdAt: formattedDate,
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

export default DashboardProduct;
