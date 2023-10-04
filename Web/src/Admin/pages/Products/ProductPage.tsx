import { Products } from "Admin/api/agent";
import AdminWrapper from "Admin/layout/AdminWrapper/AdminWrapper";
import { ProductsData } from "Admin/models/productModel";
import { ROUTE_PATH } from "constants/routes";
import React, { useEffect, useState } from "react";
import { CrumbTypes } from "../Dashboard/components/types";
import { BiPlus } from "react-icons/bi";
import AdminButton from "library/AdminButton/AdminButton";
import ProductCard from "library/ProductCard/ProductCard";
import "./ProductPage.scss";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<ProductsData[] | undefined>();

  // Fetch All Products
  useEffect(() => {
    const getProducts = async () => {
      const products = await Products.getAllProducts();
      setProducts(products);
      console.log(products);
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

  return (
    <AdminWrapper breadcrumb={crumbs}>
      <div className="product-page-container">
        <div className="product-top-actions">
          <div className="content-label">
            <h3>Products</h3>
            <p>List of all products.</p>
          </div>
          <AdminButton variant="default">
            <BiPlus /> Add a Product
          </AdminButton>
        </div>
        <div className="product-table">
          {products?.map((product) => {
            return (
              <ProductCard
                image={product.productImage}
                name={product.productName}
                description={product.productDescription}
              />
            );
          })}
        </div>
      </div>
    </AdminWrapper>
  );
};

export default ProductPage;
