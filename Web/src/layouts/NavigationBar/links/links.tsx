import { ROUTE_PATH } from "constants/routes";
import {
  ShopLinksType,
  IShops,
  shopsUSA,
  shopsKorea,
  shopsPhilippines,
  shopsEcuador,
} from "constants/shops";
import intl from "i18n/intl";
import EcuadorFlag from "library/Images/Flags/EcuadorFlag/EcuadorFlag";
import KoreanFlag from "library/Images/Flags/KoreanFlag/KoreanFlag";
import PhilippineFlag from "library/Images/Flags/PhilippineFlag/PhilippineFlag";
import USFLag from "library/Images/Flags/USFlag/USFlag";
import Img from "library/Images/Image";

export interface IInquiryTexts {
  text: string | JSX.Element;
}

export interface IBecomeDistributorTexts {
  text: string | JSX.Element;
}

export type SubLinksType = {
  id: string;
  icon: string | JSX.Element;
  text: string | JSX.Element;
  path: string;
  className: string;
  inquiryTexts?: IInquiryTexts[];
  becomeDistributorTexts?: IBecomeDistributorTexts[];
  shops?: IShops[];
  shopName?: ShopLinksType[];
  shopLink?: ShopLinksType[];
  route?: any;
};

const PRODUCT_IMAGES = {
  MOUSE: "/images/micronics-assets/product-images/Mouse-1.png",
  KEYBOARD: "/images/micronics-assets/product-images/Keyboard-1.png",
  HEADSET: "/images/micronics-assets/product-images/Headset-1.png",
  PC_CASE: "https://res.cloudinary.com/ddwocxwmc/image/upload/v1672912245/product-images/pc_case/EH-1_Mondrian_-4_kuvx4z.png",
  FANS_COOLERS: "/images/micronics-assets/product-images/Fans Coolers-1.png",
  PSU: "/images/micronics-assets/product-images/PSU-1.png",
  ACCESSORIES: "/images/micronics-assets/product-images/Accessories.svg",
};

export const productSubLinks: SubLinksType[] = [
  {
    id: "product",
    icon: <Img img={PRODUCT_IMAGES.MOUSE} width={130}></Img>,
    text: intl("productSubLinks.mouse"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 1,
    icon: <Img img={PRODUCT_IMAGES.KEYBOARD} width={130}></Img>,
    text: intl("productSubLinks.keyboard"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 2,
    icon: <Img img={PRODUCT_IMAGES.HEADSET} width={130}></Img>,
    text: intl("productSubLinks.headset"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 3,
    icon: <Img img={PRODUCT_IMAGES.FANS_COOLERS} width={130}></Img>,
    text: intl("productSubLinks.fansCoolers"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 4,
    icon: <Img img={PRODUCT_IMAGES.PC_CASE} width={130}></Img>,
    text: intl("productSubLinks.pcCase"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 5,
    icon: <Img img={PRODUCT_IMAGES.PSU} width={130}></Img>,
    text: intl("productSubLinks.psu"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
  {
    id: "product",
    route: 6,
    icon: <Img img={PRODUCT_IMAGES.ACCESSORIES} width={130}></Img>,
    text: intl("productSubLinks.accessories"),
    path: ROUTE_PATH.PRODUCT_CATEGORY.replace("/:categoryId", ""),
    className: "sub-navbar-items",
  },
];

const SUPPORT_ICONS = {
  DRIVER_SOFTWARES: "/images/micronics-assets/Drivers and Softwares.svg",
  BROCHURE_MANUALS: "/images/micronics-assets/Brochures and Manuals.svg",
};

export const supportSubLinks: SubLinksType[] = [
  {
    id: "support",
    icon: <Img img={SUPPORT_ICONS.DRIVER_SOFTWARES} width={70}></Img>,
    text: intl("supportSubLinks.driversSoftwares"),
    path: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
    className: "sub-navbar-support-items",
  },
  {
    id: "support",
    icon: <Img img={SUPPORT_ICONS.BROCHURE_MANUALS} width={80}></Img>,
    text: intl("supportSubLinks.brochuresManuals"),
    path: ROUTE_PATH.SUPPORT_BROCHURE_MANUALS,
    className: "sub-navbar-support-items",
  },
];

const SHOP_ICONS = {
  SHOP_USA: <USFLag width={25} />,
  SHOP_KOREA: <KoreanFlag width={25} />,
  SHOP_PHILIPPINES: <PhilippineFlag width={25} />,
  SHOP_ECUADOR: <EcuadorFlag width={25} />,
};

export const shopSubLinks: SubLinksType[] = [
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_USA,
    text: intl("shopSubLinks.northAmerica"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: shopsUSA,
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_KOREA,
    text: intl("shopSubLinks.korea"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: shopsKorea,
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_PHILIPPINES,
    text: intl("shopSubLinks.philippines"),

    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: shopsPhilippines,
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_ECUADOR,
    text: intl("shopSubLinks.ecuador"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: shopsEcuador,
  },
];

const CONTACT_ICONS = {
  RIGHT_ARROW: "/images/micronics-assets/Chevron Right Arrow.svg",
};

export const contactSubLinks: SubLinksType[] = [
  {
    id: "contact",
    icon: <Img img={CONTACT_ICONS.RIGHT_ARROW} width={15}></Img>,
    text: intl("contactSubLinks.inquiry"),
    path: ROUTE_PATH.CONTACT_INQUIRY,
    className: "sub-navbar-contact-items",
    inquiryTexts: [
      {
        text: intl("contactSubLinks.inquiryText"),
      },
    ],
  },
  {
    id: "contact",
    icon: <Img img={CONTACT_ICONS.RIGHT_ARROW} width={15}></Img>,
    text: intl("contactSubLinks.becomeDistributor"),
    path: ROUTE_PATH.CONTACT_BECOME_DISTRIBUTOR,
    className: "sub-navbar-contact-items",
    becomeDistributorTexts: [
      {
        text: intl("contactSubLinks.becomeDistributorText"),
      },
    ],
  },
];
