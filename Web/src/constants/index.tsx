import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Support from "pages/Support/Support";
import Shop from "pages/Shop/Shop";
import PageWrapper from "library/PageWrapper/PageWrapper";
import { ROUTE_PATH } from "./routes";

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

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "images/micronics-assets/main-logo.png",
    NAVBAR: "images/micronics-assets/navbar-logo.png",
  },
  PRODUCT_IMAGES: {
    MOUSE: "images/micronics-assets/product-images/Mouse-1.png",
    KEYBOARD: "images/micronics-assets/product-images/Keyboard-1.png",
    HEADSET: "images/micronics-assets/product-images/Headset-1.png",
    PC_CASE: "images/micronics-assets/product-images/Pc Case-1.png",
    FANS_COOLERS: "images/micronics-assets/product-images/Fans Coolers-1.png",
    PSU: "images/micronics-assets/product-images/PSU-1.png",
    ACCESSORIES: "images/micronics-assets/product-images/Accessories.svg",
  },
  SUPPORT_ICONS: {
    DRIVER_SOFTWARES: "images/micronics-assets/Drivers and Softwares.svg",
    BROCHURE_MANUALS: "images/micronics-assets/Brochures and Manuals.svg",
  },
  FLAGS: {
    USA: "images/micronics-assets/US Flag.svg",
    KOREA: "images/micronics-assets/KR Flag.svg",
    PHILIPPINES: "images/micronics-assets/Philippines Flag.svg",
    ECUADOR: "images/micronics-assets/Ecuador Flag.svg",
  },
  FACEBOOK: "images/micronics-assets/facebook.png",
  TWITTER: "images/micronics-assets/twitter.png",
  INSTAGRAM: "images/micronics-assets/instagram.png",
  TIKTOK: "images/micronics-assets/tiktok.png",
  YOUTUBE: "images/micronics-assets/youtube.png",
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
    ELEMENT: <PageWrapper component={<Support />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.SHOP,
    /* Show footer and component only */
    ELEMENT: <PageWrapper component={<Shop />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    /* Show navbar and component only */
    ELEMENT: <PageWrapper component={<Contact />} showFooter={false} />,
  },
];
