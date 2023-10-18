import { Products } from "Admin/api/agent";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { ProductsData } from "Admin/models/productModel";
import { ROUTE_PATH } from "constants/routes";
import React, { useEffect, useState } from "react";
import { CrumbTypes } from "../Dashboard/components/types";
import { BiPlus } from "react-icons/bi";
import AdminButton from "library/AdminButton/AdminButton";
import { GridColDef } from "@mui/x-data-grid";
import Spinner from "library/Spinner/Spinner";
import ProductTable from "./components/ProductTable";
import helpers from "helpers/helpers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ProductPage.scss";
import ADMIN_ROUTES from "constants/adminRoutes";

const ProductPage: React.FC = () => {
	const [products, setProducts] = useState<ProductsData[] | undefined>();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [productId, setProductId] = useState<string>("");
	const handleClose = () => setOpen(false);

	const navigate = useNavigate();

	// Fetch All Products
	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const products = await Products.getAllProducts();
			setProducts(products);
			setLoading(false);
		};
		getProducts();
	}, []);

	const crumbs: CrumbTypes[] = [
		{
			title: "Wizmax Global",
			url: ROUTE_PATH.DASHBOARD,
			isActive: false,
		},
		{
			title: "Products",
			url: ROUTE_PATH.PRODUCTS,
			isActive: true,
		},
	];

	const columns: GridColDef[] = [
		{
			field: "productImage",
			headerName: "Product Image",
			width: 200,

			renderCell: (params) => params.value,
		},
		{ field: "id", headerName: "ID", width: 270 },

		{
			field: "category",
			headerName: " Product Category",
			width: 250,
		},
		{
			field: "productName",
			headerName: "Product Name",
			width: 260,
		},

		{
			field: "createdAt",
			headerName: "Date Created",
			width: 200,
		},

		{
			field: "actions",
			headerName: "Actions",
			width: 180,
			renderCell: (params: any) => params.value,
			headerAlign: "center",
			align: "center",
		},
	];

	const deleteProducthandler = async (productId: string) => {
		const result = await Swal.fire({
			title: "Do you really want to delete this product?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		});
		if (result.isConfirmed) {
			setLoading(true);
			const deletedUser = await Products.deleteProduct(productId);
			const updatedProducts = products?.filter(
				(data) => data._id !== productId
			);
			setProducts(updatedProducts);
			setLoading(false);
			toast.success("Product successfully deleted.");
			Swal.fire("Deleted!", "Product has been deleted.", "success");
		}
	};

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

			actions: (
				<div className="grid-actions-btn">
					<AdminButton
						variant="default"
						onClick={() => {
							navigate(ADMIN_ROUTES.UPDATEPRODUCT.replace(":id", product._id));
						}}
					>
						Edit
					</AdminButton>

					<AdminButton
						variant="danger"
						onClick={() => deleteProducthandler(product._id)}
					>
						Delete
					</AdminButton>
				</div>
			),
		};
	});

	return (
		<AdminWrapper breadcrumb={crumbs}>
			{loading ? (
				<Spinner variant="fixed" />
			) : (
				<div className="product-page-container">
					<div className="product-top-actions">
						<AdminButton
							variant="default"
							onClick={() => navigate(ROUTE_PATH.CREATEPRODUCT)}
						>
							<BiPlus /> Add a Product
						</AdminButton>
						<div className="content-label">
							<h3>Products</h3>
							<p>List of all products.</p>
						</div>
					</div>

					<div className="user-table">
						<ProductTable columns={columns} rows={rows} loading={loading} />
					</div>
				</div>
			)}
		</AdminWrapper>
	);
};

export default ProductPage;
