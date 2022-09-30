import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";
import Icon from "library/Icons/Icon";

export interface IShopLinks {
  name: string;
}

export type SubLinksType = {
  icon: string | JSX.Element;
  text: string | JSX.Element;
  path: string;
  className: string;
  shops?: IShopLinks[];
};

const PRODUCT_IMAGES = {
  MOUSE: "images/micronics-assets/product-images/Mouse-1.png",
  KEYBOARD: "images/micronics-assets/product-images/Keyboard-1.png",
  HEADSET: "images/micronics-assets/product-images/Headset-1.png",
  PC_CASE: "images/micronics-assets/product-images/Pc Case-1.png",
  FANS_COOLERS: "images/micronics-assets/product-images/Fans Coolers-1.png",
  PSU: "images/micronics-assets/product-images/PSU-1.png",
  ACCESSORIES: "images/micronics-assets/product-images/Accessories.svg",
};

export const productSubLinks: SubLinksType[] = [
  {
    icon: <Icon icon={PRODUCT_IMAGES.MOUSE} width={130}></Icon>,
    text: intl("productSubLinks.mouse"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 1,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.KEYBOARD} width={130}></Icon>,
    text: intl("productSubLinks.keyboard"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 2,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.HEADSET} width={130}></Icon>,
    text: intl("productSubLinks.headset"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 3,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.FANS_COOLERS} width={130}></Icon>,
    text: intl("productSubLinks.fansCoolers"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 4,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.PC_CASE} width={130}></Icon>,
    text: intl("productSubLinks.pcCase"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 5,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.PSU} width={130}></Icon>,
    text: intl("productSubLinks.psu"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 6,
    className: "sub-navbar-items",
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.ACCESSORIES} width={130}></Icon>,
    text: intl("productSubLinks.accessories"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 7,
    className: "sub-navbar-items",
  },
];

const SUPPORT_ICONS = {
  DRIVER_SOFTWARES: "images/micronics-assets/Drivers and Softwares.svg",
  BROCHURE_MANUALS: "images/micronics-assets/Brochures and Manuals.svg",
};

export const supportSubLinks: SubLinksType[] = [
  {
    icon: <Icon icon={SUPPORT_ICONS.DRIVER_SOFTWARES} width={70}></Icon>,
    text: intl("supportSubLinks.driversSoftwares"),
    path: "",
    className: "sub-navbar-support-items",
  },
  {
    icon: <Icon icon={SUPPORT_ICONS.BROCHURE_MANUALS} width={80}></Icon>,
    text: intl("supportSubLinks.brochuresManuals"),
    path: "",
    className: "sub-navbar-support-items",
  },
];

const SHOP_ICONS = {
  SHOP_USA: "images/micronics-assets/US Flag.svg",
  SHOP_KOREA: "images/micronics-assets/KR Flag.svg",
  SHOP_PHILIPPINES: "images/micronics-assets/Philippines Flag.svg",
  SHOP_ECUADOR: "images/micronics-assets/Ecuador Flag.svg",
};

export const shopSubLinks: SubLinksType[] = [
  {
    icon: <Icon icon={SHOP_ICONS.SHOP_USA} width={20}></Icon>,
    text: intl("shopSubLinks.northAmerica"),
    path: "",
    className: "sub-navbar-shop-items",
    shops: [{ name: "Amazon" }],
  },
  {
    icon: <Icon icon={SHOP_ICONS.SHOP_KOREA} width={20}></Icon>,
    text: intl("shopSubLinks.korea"),
    path: "",
    className: "sub-navbar-shop-items",
    shops: [
      { name: "Micronics Korea" },
      { name: "Compuzone" },
      { name: "Naver" },
      { name: "Danawa" },
    ],
  },
  {
    icon: <Icon icon={SHOP_ICONS.SHOP_PHILIPPINES} width={20}></Icon>,
    text: intl("shopSubLinks.philippines"),
    path: "",
    className: "sub-navbar-shop-items",
    shops: [
      { name: "Wizmax Official Store" },
      { name: "Shopee" },
      { name: "Lazada" },
    ],
  },
  {
    icon: <Icon icon={SHOP_ICONS.SHOP_ECUADOR} width={20}></Icon>,
    text: intl("shopSubLinks.ecuador"),
    path: "",
    className: "sub-navbar-shop-items",
    shops: [{ name: "MaxiTec" }],
  },
];
