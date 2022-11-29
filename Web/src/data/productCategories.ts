import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";
import React from "react";

interface IProductCategories {
  categoryId: string;
  name: string | JSX.Element;
  link: Partial<Location> | string;
  // refLink?: React.RefObject<HTMLDivElement>;
  img: string;
  text: string;
}

export const productCategories: IProductCategories[] = [
  {
    categoryId: "CATEGORY_MOUSE",
    name: "Mouse",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_MOUSE"),
    img: "./images/micronics-assets/product-categories/banner-images/mouse.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_KB",
    name: "Keyboard",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_KB"),
    img: "./images/micronics-assets/product-categories/banner-images/keyboard.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_HEADSET",
    name: "Headset",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/headset.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_FC",
    name: "Fans & Coolers",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_FC"),
    img: "",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_PCCASE",
    name: "PC Case",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_PCCASE"),
    img: "./images/micronics-assets/product-categories/banner-images/pc-case.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_PSU",
    name: "PSU",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_PSU"),
    img: "./images/micronics-assets/product-categories/banner-images/psu.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "CATEGORY_ACCESSORIES",
    name: "Accessories",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "CATEGORY_ACCESSORIES"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/accessories.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
];
