import { ROUTE_PATH } from "constants/routes";
import intl from "i18n/intl";
import EcuadorFlag from "library/Icons/Flags/EcuadorFlag/EcuadorFlag";
import Icon from "library/Icons/Icon";
import KoreanFlag from "library/Icons/Flags/KoreanFlag/KoreanFlag";
import PhilippineFlag from "library/Icons/Flags/PhilippineFlag/PhilippineFlag";
import USFLag from "library/Icons/Flags/USFlag/USFlag";

export interface IShopLinks {
  name: string;
  link: string;
}
export interface IInquiryTexts {
  text: string;
}

export interface IBecomeDistributorTexts {
  text: string;
}

export type SubLinksType = {
  id: string;
  icon: string | JSX.Element;
  text: string | JSX.Element;
  path: string;
  className: string;
  shops?: IShopLinks[];
  inquiryTexts?: IInquiryTexts[];
  becomeDistributorTexts?: IBecomeDistributorTexts[];
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
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.MOUSE} width={130}></Icon>,
    text: intl("productSubLinks.mouse"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 1,
    className: "sub-navbar-items",
  },
  {
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.KEYBOARD} width={130}></Icon>,
    text: intl("productSubLinks.keyboard"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 2,
    className: "sub-navbar-items",
  },
  {
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.HEADSET} width={130}></Icon>,
    text: intl("productSubLinks.headset"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 3,
    className: "sub-navbar-items",
  },
  {
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.FANS_COOLERS} width={130}></Icon>,
    text: intl("productSubLinks.fansCoolers"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 4,
    className: "sub-navbar-items",
  },
  {
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.PC_CASE} width={130}></Icon>,
    text: intl("productSubLinks.pcCase"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 5,
    className: "sub-navbar-items",
  },
  {
    id: "product",
    icon: <Icon icon={PRODUCT_IMAGES.PSU} width={130}></Icon>,
    text: intl("productSubLinks.psu"),
    path: ROUTE_PATH.PRODUCT_CATEGORY + 6,
    className: "sub-navbar-items",
  },
  {
    id: "product",
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
    id: "support",
    icon: <Icon icon={SUPPORT_ICONS.DRIVER_SOFTWARES} width={70}></Icon>,
    text: intl("supportSubLinks.driversSoftwares"),
    path: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
    className: "sub-navbar-support-items",
  },
  {
    id: "support",
    icon: <Icon icon={SUPPORT_ICONS.BROCHURE_MANUALS} width={80}></Icon>,
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
    shops: [
      {
        name: "Amazon",
        link: "https://www.amazon.com/stores/WIZMAX/page/AADA7D9F-FC97-4B97-B16B-ABFBAD23A146?ref_=ast_blnE",
      },
    ],
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_KOREA,
    text: intl("shopSubLinks.korea"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: [
      {
        name: "Micronics Korea",
        link: "http://www.micronics.co.kr/micronics/index.php",
      },
      {
        name: "Compuzone",
        link: "https://www.compuzone.co.kr/search/search.htm?Seargbl=1&hidden_Txt=&IsEventSearch=&SearchProductKey=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4",
      },
      { name: "Naver", link: "https://smartstore.naver.com/micronics" },
      {
        name: "Danawa",
        link: "https://search.danawa.com/dsearch.php?query=micronics&originalQuery=micronics&volumeType=allvs&page=1&limit=40&sort=saveDESC&list=list&boost=true&addDelivery=N&makerbrand_name=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4&recommendedSort=Y&defaultUICategoryCode=112777&defaultPhysicsCategoryCode=861%7C880%7C997%7C0&defaultVmTab=943&defaultVaTab=83552&tab=main",
      },
    ],
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_PHILIPPINES,
    text: intl("shopSubLinks.philippines"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: [
      { name: "Wizmax Official Store", link: "http://wizmaxph.myshopify.com/" },
      { name: "Shopee", link: "" },
      { name: "Lazada", link: "http://www.lazada.com.ph/shop/wizmax-global" },
    ],
  },
  {
    id: "shop",
    icon: SHOP_ICONS.SHOP_ECUADOR,
    text: intl("shopSubLinks.ecuador"),
    path: ROUTE_PATH.SHOP,
    className: "sub-navbar-shop-items",
    shops: [
      {
        name: "MaxiTec",
        link: "https://www.maxitec.com.ec/gaming-y-videojuegos/micronics?PS=24",
      },
    ],
  },
];

const CONTACT_ICONS = {
  RIGHT_ARROW: "images/micronics-assets/Chevron Right Arrow.svg",
};

export const contactSubLinks: SubLinksType[] = [
  {
    id: "contact",
    icon: <Icon icon={CONTACT_ICONS.RIGHT_ARROW} width={15}></Icon>,
    text: intl("contactSubLinks.inquiry"),
    path: ROUTE_PATH.CONTACT_INQUIRY,
    className: "sub-navbar-contact-items",
    inquiryTexts: [
      {
        text: "Need Help? We can assist you in any product-related inquiry.",
      },
    ],
  },
  {
    id: "contact",
    icon: <Icon icon={CONTACT_ICONS.RIGHT_ARROW} width={15}></Icon>,
    text: intl("contactSubLinks.becomeDistributor"),
    path: ROUTE_PATH.CONTACT_BECOME_DISTRIBUTOR,
    className: "sub-navbar-contact-items",
    becomeDistributorTexts: [
      {
        text: "Be part of the Wizmax Family! Let's make a Deal.",
      },
    ],
  },
];
