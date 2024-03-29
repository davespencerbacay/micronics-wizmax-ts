import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Shop from "pages/Shop/Shop";
import PageWrapper from "library/PageWrapper/PageWrapper";
import BecomeDistributor from "pages/BecomeDistributor/BecomeDistributor";
import { ROUTE_PATH } from "./routes";
import Drivers from "pages/Support/components/Drivers";
import ProductLanding from "pages/Product/ProductLanding/ProductLanding";
import Manuals from "pages/Support/components/Manuals";
import Ces from "pages/Special/ces";
import WarrantyFaq from "pages/Policy/WarrantyFaq";
import InvalidRoute from "pages/InvalidRoute/InvalidRoute";

/* Change context consts */
export const STORAGE_KEY: Record<string, string> = {
  LOCALE: "locale",
  DARK_MODE: "dark_mode",
};

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

type SocialMediaTypes =
  | "FACEBOOK_LABEL"
  | "FACEBOOK_LINK"
  | "INSTAGRAM_LABEL"
  | "INSTAGRAM_LINK"
  | "TIKTOK_LABEL"
  | "TIKTOK_LINK"
  | "TWITTER_LABEL"
  | "TWITTER_LINK"
  | "YOUTUBE_LABEL"
  | "YOUTUBE_LINK";
export const SOCIAL_MEDIA: Record<SocialMediaTypes, string> = {
  FACEBOOK_LABEL: "Facebook",
  FACEBOOK_LINK: "https://www.facebook.com/Wizmax-100846952546335/",
  INSTAGRAM_LABEL: "Instagram",
  INSTAGRAM_LINK: "https://www.instagram.com/wizmaxglobal/",
  TIKTOK_LABEL: "Tiktok",
  TIKTOK_LINK: "https://www.tiktok.com/@wizmaxinc",
  TWITTER_LABEL: "Twitter",
  TWITTER_LINK: "https://twitter.com/Wizmaxinc",
  YOUTUBE_LABEL: "Youtube",
  YOUTUBE_LINK: "https://www.youtube.com/channel/UC78IfgEhU10aaQWi-iqpvGg",
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
    PATH: ROUTE_PATH.PRODUCT_LANDING,
    ELEMENT: <PageWrapper component={<ProductLanding />} />,
  },
  {
    PATH: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
    ELEMENT: <PageWrapper component={<Drivers />} />,
  },
  {
    PATH: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES_BY_CATEGORY_ID,
    ELEMENT: <PageWrapper component={<Drivers />} />,
  },
  {
    PATH: ROUTE_PATH.SUPPORT_BROCHURE_MANUALS,
    ELEMENT: <PageWrapper component={<Manuals />} />,
  },
  {
    PATH: ROUTE_PATH.SHOP,
    ELEMENT: <PageWrapper component={<Shop />} />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    ELEMENT: <PageWrapper component={<Contact />} />,
  },
  {
    PATH: ROUTE_PATH.BECOME_DISTRIBUTOR,
    ELEMENT: <PageWrapper component={<BecomeDistributor />} />,
  },
  {
    PATH: ROUTE_PATH.CES,
    ELEMENT: <PageWrapper component={<Ces />} showFooter={false} />,
  },
  {
    PATH: ROUTE_PATH.WARRANTY_FAQ,
    ELEMENT: <PageWrapper component={<WarrantyFaq />} />,
  },
  {
    PATH: ROUTE_PATH.NOTFOUND,
    ELEMENT: <PageWrapper component={<InvalidRoute />} />,
  },
];

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "/images/logos/main-logo.png",
    HORIZONTAL_BLACK: "/images/logos/footer-logo-v2.png",
    HORIZONTAL_WHITE: "/images/logos/footer-logo-v2.png",
    NAVBAR_WHITE: "/images/logos/navbar-logo-v2.png",
    NAVBAR_BLACK: "/images/logos/navbar-logo-v2.png",
    NAVBAR_MAIN: "/images/logos/nav-logo.png",
  },
  FACEBOOK: "/images/micronics-assets/facebook.png",
  TWITTER: "/images/micronics-assets/twitter.png",
  INSTAGRAM: "/images/micronics-assets/instagram.png",
  TIKTOK: "/images/micronics-assets/tiktok.png",
  YOUTUBE: "/images/micronics-assets/youtube.png",
};
