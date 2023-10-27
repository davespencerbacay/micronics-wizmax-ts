import { Products } from "Admin/api/agent";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { CrumbTypes } from "Admin/pages/Dashboard/components/types";
import { ROUTE_PATH } from "constants/routes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProductPage.scss";
import Spinner from "library/Spinner/Spinner";
import { ProductsData } from "Admin/models/productModel";
import { Grid } from "@mui/material";
import helpers from "helpers/helpers";

const SingleProductPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductsData | undefined>();

  const { id } = useParams();

  // Fetch Single Product
  useEffect(() => {
    const getSingleProduct = async (productId: string) => {
      setLoading(true);
      const product = await Products.getSingleProduct(productId);
      setProduct(product);
      setLoading(false);
    };
    getSingleProduct(id ?? "");
  }, [id]);

  const crumbs: CrumbTypes[] = [
    {
      title: "Wizmax Global",
      url: ROUTE_PATH.DASHBOARD,
      isActive: false,
    },
    {
      title: "Products",
      url: ROUTE_PATH.PRODUCTS,
      isActive: false,
    },
    {
      title: "View Product",
      url: ROUTE_PATH.PRODUCTS,
      isActive: true,
    },
  ];

  return (
    <AdminWrapper breadcrumb={crumbs}>
      {loading ? (
        <Spinner variant="fixed" />
      ) : (
        <div className="view-product-container">
          <Grid
            container
            spacing={2}
            alignItems="center"
            className="two-col-container"
          >
            <Grid item md={6}>
              <div className="image-holder">
                <img src={product?.productImage} alt="product image" />
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="product-captions">
                <h2>{helpers.titleCase(product?.productName ?? "")}</h2>
                <h3>Category: {helpers.titleCase(product?.category ?? "")}</h3>
                <p>{product?.productDescription}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </AdminWrapper>
  );
};

export default SingleProductPage;
