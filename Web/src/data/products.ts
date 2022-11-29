import { ROUTE_PATH } from "constants/routes";

const products = [
  {
    id: "1",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "ZM1"),
    name: "product 1",
    img: "./images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "2",
    categoryId: "CATEGORY_MOUSE",
    name: "product 2",
    img: "./images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "CATEGORY_MOUSE",
    name: "product 3",
    img: "./images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "CATEGORY_MOUSE",
    name: "product 4",
    img: "./images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "5",
    categoryId: "CATEGORY_MOUSE",
    name: "product 5",
    img: "./images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "keyboard 3",
    img: "",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "product 2",
    img: "",
    countryAvailability: ["PH", "KR", "US"],
  },
];

export default products;
