import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";

interface IProductCategories {
  categoryId: string;
  name: string | JSX.Element;
  link: Partial<Location> | string;
  img: string;
  text: string;
}

export const productCategories: IProductCategories[] = [
  {
    categoryId: "84d6fbc4-a2d5-46a2-b34a-3b56442fef83",
    name: "Mouse",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "84d6fbc4-a2d5-46a2-b34a-3b56442fef83"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/mouse.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "Keyboard",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "77484846-2aee-4059-8415-d98b064b2c4a"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/keyboard.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "f5796d4b-2188-47c4-a57c-15fdd46ab27a",
    name: "Headset",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "f5796d4b-2188-47c4-a57c-15fdd46ab27a"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/headset.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "2ddd3f47-c952-416e-a789-b2a7b5faf9e0",
    name: "Fans & Coolers",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "2ddd3f47-c952-416e-a789-b2a7b5faf9e0"
    ),
    img: "",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "7a5fa092-3ccc-47a4-9d74-571e6baa24f4",
    name: "PC Case",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "7a5fa092-3ccc-47a4-9d74-571e6baa24f4"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/pc-case.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "4778c6d6-85d3-4c90-8660-740978df64ef",
    name: "PSU",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "4778c6d6-85d3-4c90-8660-740978df64ef"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/psu.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    categoryId: "37864a57-abb9-4f95-8de8-aac700b618ab",
    name: "Accessories",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "37864a57-abb9-4f95-8de8-aac700b618ab"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/accessories.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
];
