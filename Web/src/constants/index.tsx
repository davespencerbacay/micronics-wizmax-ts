import Home from "pages/Home/Home";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import { ReactRoutesType } from "./types";
import Support from "pages/Support/Support";
import Shop from "pages/Shop/Shop";
import PageWrapper from "library/PageWrapper/PageWrapper";
import BecomeDistributor from "pages/BecomeDistributor/BecomeDistributor";
import { ROUTE_PATH } from "./routes";

/* Change languge consts */
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
    PATH: ROUTE_PATH.SUPPORT,
    ELEMENT: <PageWrapper component={<Support />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.SHOP,
    ELEMENT: <PageWrapper component={<Shop />} showNavbar={false} />,
  },
  {
    PATH: ROUTE_PATH.CONTACT,
    ELEMENT: <PageWrapper component={<Contact />} />,
  },
  {
    PATH: ROUTE_PATH.BECOME_DISTRIBUTOR,
    ELEMENT: <PageWrapper component={<BecomeDistributor />} />,
  },
];

/* Web App Constant Images */
export const IMAGES = {
  COMPANY_LOGOS: {
    MAIN: "images/logos/main-logo.png",
    HORIZONTAL_BLACK: "images/logos/wizmax-logo-horizonall-black.png",
    HORIZONTAL_WHITE: "images/logos/wizmax-logo-horizontal-white.png",
    NAVBAR_WHITE: "images/logos/navbar-logo.png",
    NAVBAR_BLACK: "images/logos/navbar-logo-black.png",
  },
  FACEBOOK: "images/micronics-assets/facebook.png",
  TWITTER: "images/micronics-assets/twitter.png",
  INSTAGRAM: "images/micronics-assets/instagram.png",
  TIKTOK: "images/micronics-assets/tiktok.png",
  YOUTUBE: "images/micronics-assets/youtube.png",
};
