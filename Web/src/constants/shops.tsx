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

export interface IShops {
  name: string;
  link: string;
}

export type ShopLinksType = {
  shop?: IShops[];
  shopName: string;
  shopLink: string;
};

const USA_SHOPS: ShopLinksType[] = [
  {
    shopName: SHOPS.AMAZON_LABEL,
    shopLink: SHOPS.AMAZON_LINK,
  },
];
export const shopsUSA = USA_SHOPS.map((shop) => {
  return {
    name: shop.shopName,
    link: shop.shopLink,
  };
});

const KOREA_SHOPS: ShopLinksType[] = [
  {
    shopName: SHOPS.MICRONICS_KOREA_LABEL,
    shopLink: SHOPS.MICRONICS_KOREA_LINK,
  },
  {
    shopName: SHOPS.COMPUZONE_LABEL,
    shopLink: SHOPS.COMPUZONE_LINK,
  },
  {
    shopName: SHOPS.NAVER_LABEL,
    shopLink: SHOPS.NAVER_LINK,
  },
  {
    shopName: SHOPS.DANAWA_LABEL,
    shopLink: SHOPS.DANAWA_LINK,
  },
];
export const shopsKorea = KOREA_SHOPS.map((shop) => {
  return {
    name: shop.shopName,
    link: shop.shopLink,
  };
});

export const PHILIPPINES_SHOPS: ShopLinksType[] = [
  {
    shopName: SHOPS.WIZMAX_OFFICIAL_STORE_LABEL,
    shopLink: SHOPS.WIZMAX_OFFICIAL_STORE_LINK,
  },
  {
    shopName: SHOPS.SHOPEE_LABEL,
    shopLink: "",
  },
  {
    shopName: SHOPS.LAZADA_LABEL,
    shopLink: SHOPS.LAZADA_LINK,
  },
];
export const shopsPhilippines = PHILIPPINES_SHOPS.map((shop) => {
  return {
    name: shop.shopName,
    link: shop.shopLink,
  };
});

export const ECUADOR_SHOPS: ShopLinksType[] = [
  {
    shopName: SHOPS.MAXITEC_LABEL,
    shopLink: SHOPS.MAXITEC_LINK,
  },
];
export const shopsEcuador = ECUADOR_SHOPS.map((shop) => {
  return {
    name: shop.shopName,
    link: shop.shopLink,
  };
});
