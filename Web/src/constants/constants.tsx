import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Support from "pages/Support/Support";
import Shop from "pages/Shop/Shop";

/* Change languge consts */
export const STORAGE_KEY: string = "locale";
export const LANGUAGES = {
  KOREA: "KR",
  EN: "EN"
}

/* Theme Variants */
export const VARIANTS = {
  DARK: "dark",
  LIGHT: "light",
};

/* Route */
export const ROUTE_PATH = {
  INDEX: "/",
  PRODUCT: "/products",
  SUPPORT: "/support",
  SHOP: "/shop",
  CONTACT: "/contact",
};
export const REACT_ROUTES: ReactRoutesType[] = [
  {
    PATH: ROUTE_PATH.INDEX,
    ELEMENT: <Home />,
  },
  {
    PATH: ROUTE_PATH.PRODUCT,
    ELEMENT: <Product />,
  },
  {
    PATH: ROUTE_PATH.SUPPORT,
    ELEMENT: <Support />,
  },
  {
    PATH: ROUTE_PATH.SHOP,
    ELEMENT: <Shop />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    ELEMENT: <Contact />,
  },
];

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "images/micronics-assets/main-logo.png",
    NAVBAR: "images/micronics-assets/navbar-logo.png"
  },
  FACEBOOK: "images/micronics-assets/facebook.png",
  TWITTER: "images/micronics-assets/twitter.png",
  INSTAGRAM: "images/micronics-assets/instagram.png",
  TIKTOK: "images/micronics-assets/tiktok.png",
  YOUTUBE: "images/micronics-assets/youtube.png",
};
