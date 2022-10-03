import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Support from "pages/Support/Support";
import Shop from "pages/Shop/Shop";
import PageWrapper from "library/PageWrapper/PageWrapper";
import BecomeDistributor from "pages/BecomeDistributor/BecomeDistributor";

/* Change languge consts */
export const STORAGE_KEY: string = "locale";

/* Web App Constants Text */
export const COMPANY_NAME = "Wizmax Global";

type ContactTypes =
  | "KOREA_TEL"
  | "PH_TEL"
  | "EMAIL"
  | "BUSINESS_INQUIRY"
  | "GENERAL_INQUIRY";
export const CONTACTS: Record<ContactTypes, string> = {
  KOREA_TEL: "70 5066 4501 / 10 5501 3107",
  PH_TEL: "917 6466 166",
  EMAIL: "support@micronicsglobal.com",
  BUSINESS_INQUIRY: "Sales@wizmaxglobal.com",
  GENERAL_INQUIRY: "Support@wizmaxglobal.com",
};

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
  BECOME_DISTRIBUTOR: "/become-distributor",
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
    ELEMENT: <PageWrapper component={<Shop />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    ELEMENT: <PageWrapper component={<Contact />} showFooter={false} />,
  },
  {
    PATH: ROUTE_PATH.BECOME_DISTRIBUTOR,
    ELEMENT: <PageWrapper component={<BecomeDistributor />} />,
  },
];

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "images/micronics-assets/main-logo.png",
    HORIZONTAL_BLACK: "images/logos/wizmax-logo-horizonall-black.png",
    NAVBAR: "images/micronics-assets/navbar-logo.png",
  },
  FACEBOOK: "images/micronics-assets/facebook.png",
  TWITTER: "images/micronics-assets/twitter.png",
  INSTAGRAM: "images/micronics-assets/instagram.png",
  TIKTOK: "images/micronics-assets/tiktok.png",
  YOUTUBE: "images/micronics-assets/youtube.png",
};
