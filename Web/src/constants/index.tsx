import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Support from "pages/Support/Support";
import Shop from "pages/Shop/Shop";
import PageWrapper from "library/PageWrapper/PageWrapper";

/* Change languge consts */
export const STORAGE_KEY: string = "locale";

/* Web App Constants Text */
export const COMPANY_NAME = "Wizmax Global";

export const LANGUAGES = {
  KOREA: "KR",
  EN: "EN",
};

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
    ELEMENT: <PageWrapper component={<Home />} />,
  },
  {
    PATH: ROUTE_PATH.PRODUCT,
    ELEMENT: <PageWrapper component={<Product />} />,
  },
  {
    PATH: ROUTE_PATH.SUPPORT,
    ELEMENT: <PageWrapper component={<Support />} />,
  },
  {
    PATH: ROUTE_PATH.SHOP,
    /* !! NOTE: Delete this comment in the next sprint (Iteration 2) */
    /* Show footer and component only */
    ELEMENT: <PageWrapper component={<Shop />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    /* !! NOTE: Delete this comment in the next sprint (Iteration 2) */
    /* Show navbar and component only */
    ELEMENT: <PageWrapper component={<Contact />} showFooter={false} />,
  },
];

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "images/micronics-assets/main-logo.png",
    NAVBAR: "images/micronics-assets/navbar-logo.png",
  },
  FACEBOOK: "images/micronics-assets/facebook.png",
  TWITTER: "images/micronics-assets/twitter.png",
  INSTAGRAM: "images/micronics-assets/instagram.png",
  TIKTOK: "images/micronics-assets/tiktok.png",
  YOUTUBE: "images/micronics-assets/youtube.png",
};
