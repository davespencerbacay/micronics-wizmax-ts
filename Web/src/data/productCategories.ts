import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";

interface IProductCategories {
  id: string;
  name: string | JSX.Element;
  link: string;
  img: string;
  text: string;
}

export const productCategories: IProductCategories[] = [
  {
    id: "84d6fbc4-a2d5-46a2-b34a-3b56442fef83",
    name: intl("productSubLinks.mouse"),
    link: ROUTE_PATH.PRODUCT_MOUSE,
    img: "./images/micronics-assets/banner-images/mouse.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: intl("productSubLinks.keyboard"),
    link: ROUTE_PATH.PRODUCT_KEYBOARD,
    img: "./images/micronics-assets/banner-images/keyboard.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "f5796d4b-2188-47c4-a57c-15fdd46ab27a",
    name: intl("productSubLinks.headset"),
    link: ROUTE_PATH.PRODUCT_HEADSET,
    img: "./images/micronics-assets/banner-images/headset.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "2ddd3f47-c952-416e-a789-b2a7b5faf9e0",
    name: intl("productSubLinks.fansCoolers"),
    link: ROUTE_PATH.PRODUCT_FANS_COOLERS,
    img: "",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "7a5fa092-3ccc-47a4-9d74-571e6baa24f4",
    name: intl("productSubLinks.pcCase"),
    link: ROUTE_PATH.PRODUCT_PCCASE,
    img: "./images/micronics-assets/banner-images/pc-case.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "4778c6d6-85d3-4c90-8660-740978df64ef",
    name: intl("productSubLinks.psu"),
    link: ROUTE_PATH.PRODUCT_PSU,
    img: "./images/micronics-assets/banner-images/psu.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
  {
    id: "37864a57-abb9-4f95-8de8-aac700b618ab",
    name: intl("productSubLinks.accessories"),
    link: ROUTE_PATH.PRODUCT_ACCESSORIES,
    img: "./images/micronics-assets/banner-images/accessories.jpg",
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Eu Cursus Libero. Duis Tincidunt Ante Ascelerisque Rhoncus. Integer",
  },
];
