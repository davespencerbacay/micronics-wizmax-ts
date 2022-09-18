import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";
import Icon from "library/Icons/Icon";

export type SubLinksType = {
  icon: string | JSX.Element;
  text: string | JSX.Element;
  path: string;
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
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.KEYBOARD} width={130}></Icon>,
    text: intl("productSubLinks.keyboard"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 2,
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.HEADSET} width={130}></Icon>,
    text: intl("productSubLinks.headset"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 3,
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.FANS_COOLERS} width={130}></Icon>,
    text: intl("productSubLinks.fansCoolers"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 4,
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.PC_CASE} width={130}></Icon>,
    text: intl("productSubLinks.pcCase"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 5,
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.PSU} width={130}></Icon>,
    text: intl("productSubLinks.psu"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 6,
  },
  {
    icon: <Icon icon={PRODUCT_IMAGES.ACCESSORIES} width={130}></Icon>,
    text: intl("productSubLinks.accessories"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 7,
  },
];

const SUPPORT_ICONS = {
  DRIVER_SOFTWARES: "images/micronics-assets/Drivers and Softwares.svg",
  BROCHURE_MANUALS: "images/micronics-assets/Brochures and Manuals.svg",
};

export const supportSubLinks: SubLinksType[] = [
  {
    icon: <Icon icon={SUPPORT_ICONS.DRIVER_SOFTWARES} width={80}></Icon>,
    text: intl("supportSubLinks.driversSoftwares"),
    path: "",
  },
  {
    icon: <Icon icon={SUPPORT_ICONS.BROCHURE_MANUALS} width={80}></Icon>,
    text: intl("supportSubLinks.brochuresManuals"),
    path: "",
  },
];
