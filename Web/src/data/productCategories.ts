import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";
import React from "react";

interface IProductCategories {
  categoryId: string;
  name: string | JSX.Element;
  link: Partial<Location> | string;
  img: string;
  text: string;
}

export const productCategories: IProductCategories[] = [
  {
    categoryId: "CATEGORY_MOUSE",
    name: "Mouse",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_MOUSE"),
    img: "./images/micronics-assets/product-categories/banner-images/mouse.jpg",
    text: "Upgrade your gaming experience with our state-of-the-art gaming mouse. With precise, responsive tracking and customizable buttons, you'll have the competitive edge in any game. Plus, its sleek design and comfortable grip will keep you comfortable for hours of gameplay. Get ready to dominate the competition with our gaming mouse",
  },
  {
    categoryId: "CATEGORY_KB",
    name: "Keyboard",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_KB"),
    img: "./images/micronics-assets/product-categories/banner-images/keyboard.jpg",
    text: "Customizable keys and backlighting, as well as special features like programmable macro keys and dedicated media controls. With its advanced features and sleek design, a gaming keyboard can take your gaming experience to the next level.",
  },
  {
    categoryId: "CATEGORY_HEADSET",
    name: "Headset",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/headset.jpg",
    text: "Hear every sound in crystal-clear detail and stay comfortable for hours on end. Whether you're battling it out in an intense first-person shooter or exploring a vast open-world adventure, a gaming headset will help you get the most out of your gaming experience.",
  },
  {
    categoryId: "CATEGORY_FC",
    name: "Fans & Coolers",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_FC"),
    img: "",
    text: "Don't let your computer overheat! Keep it running smoothly and efficiently with our top-of-the-line computer cooling system. Stay cool, stay focused, and keep your computer performing at its best with our advanced technology.",
  },
  {
    categoryId: "CATEGORY_PCCASE",
    name: "PC Case",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_PCCASE"),
    img: "./images/micronics-assets/product-categories/banner-images/pc-case.jpg",
    text: "The Stylish And Functional Home For Your Computer's Vital Organs.",
  },
  {
    categoryId: "CATEGORY_PSU",
    name: "PSU",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(":categoryId", "CATEGORY_PSU"),
    img: "./images/micronics-assets/product-categories/banner-images/psu.jpg",
    text: "Power the heart of your devices with our reliable and efficient POWER SUPPLY UNIT!",
  },
  {
    categoryId: "CATEGORY_ACCESSORIES",
    name: "Accessories",
    link: ROUTE_PATH.PRODUCT_CATEGORY.replace(
      ":categoryId",
      "CATEGORY_ACCESSORIES"
    ),
    img: "./images/micronics-assets/product-categories/banner-images/accessories.jpg",
    text: "Transform your computer into a powerhouse with our top-rated accessories.",
  },
];
