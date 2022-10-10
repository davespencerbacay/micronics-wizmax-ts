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

type ShopTypes =
  | "AMAZON_LABEL"
  | "AMAZON_LINK"
  | "MICRONICS_KOREA_LABEL"
  | "MICRONICS_KOREA_LINK"
  | "COMPUZONE_LABEL"
  | "COMPUZONE_LINK"
  | "NAVER_LABEL"
  | "NAVER_LINK"
  | "DANAWA_LABEL"
  | "DANAWA_LINK"
  | "WIZMAX_OFFICIAL_STORE_LABEL"
  | "WIZMAX_OFFICIAL_STORE_LINK"
  | "SHOPEE_LABEL"
  | "SHOPEE_LINK"
  | "LAZADA_LABEL"
  | "LAZADA_LINK"
  | "MAXITEC_LABEL"
  | "MAXITEC_LINK";
export const SHOPS: Record<ShopTypes, string> = {
  AMAZON_LABEL: "Amazon",
  AMAZON_LINK:
    "https://www.amazon.com/stores/WIZMAX/page/AADA7D9F-FC97-4B97-B16B-ABFBAD23A146?ref_=ast_blnE",
  MICRONICS_KOREA_LABEL: "Micronics Korea",
  MICRONICS_KOREA_LINK: "http://www.micronics.co.kr/micronics/index.php",
  COMPUZONE_LABEL: "Compuzone",
  COMPUZONE_LINK:
    "https://www.compuzone.co.kr/search/search.htm?Seargbl=1&hidden_Txt=&IsEventSearch=&SearchProductKey=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4v",
  NAVER_LABEL: "Naver",
  NAVER_LINK: "https://smartstore.naver.com/micronics",
  DANAWA_LABEL: "Danawa",
  DANAWA_LINK: "Amazon",
  WIZMAX_OFFICIAL_STORE_LABEL: "Wizmax Official Store",
  WIZMAX_OFFICIAL_STORE_LINK: "http://wizmaxph.myshopify.com/",
  SHOPEE_LABEL: "Shopee",
  SHOPEE_LINK: "",
  LAZADA_LABEL: "Lazada",
  LAZADA_LINK: "http://www.lazada.com.ph/shop/wizmax-global",
  MAXITEC_LABEL: "MaxiTec",
  MAXITEC_LINK:
    "https://www.maxitec.com.ec/gaming-y-videojuegos/micronics?PS=24",
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
