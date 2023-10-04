import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc  Fetch All Products
// route  GET/api/products
// access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("[Products] not found");
  }
});

// @desc  Fetch All Product
// route  GET/api/products/:id
// access Private
const getProductsById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("[Product] not found");
  }
});

// @desc  Create Product
// route  POST/api/products/
// access Private
const createProduct = asyncHandler(async (req, res) => {
  const { category, productName, productImage, productDescription } = req.body;

  //   Check for Product Existence
  const productExist = await Product.findOne({ productName });
  if (productExist) {
    res.status(400);
    throw new Error("[Product] already exist");
  }

  const product = await Product.create({
    category,
    productName,
    productImage,
    productDescription,
  });

  if (product) {
    res.status(201).json("Product sucessfully created.");
  } else {
    res.status(400);
    throw new Error("Invalid Product Data");
  }
});

// @desc  Edit Product
// route  POST/api/products/:id
// access Private
const updateProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (product) {
      (product.category = req.body.category || product.category),
        (product.productName = req.body.productName || product.productName),
        (product.productImage = req.body.productImage || product.productImage),
        (product.productDescription =
          req.body.productDescription || product.productDescription);

      const updatedProduct = await product.save();

      res.json(`Product ${updatedProduct.productName} sucessfully edited.`);
    } else {
      res.status(404);
      throw new Error("[Product] not found");
    }
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
});

// @desc  Delete Product
// route  DELETE/api/products/:id
// access Private
const deleteProductById = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (product) {
      res.json("Product has been deleted");
    } else {
      res.status(404);
      throw new Error("[Product] not found");
    }
  } catch (error) {}
});

export {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
};
