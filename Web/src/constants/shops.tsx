// export const REGIONS: Record<RegionTypes, string> = {
//   ASIA_PACIFIC_LABEL: "Asia Pacific",
//   NORTH_AND_SOUTH_AMERICA_LABEL: "North and South America",
// };

// type CountryTypes = "KOREA" | "PHILIPPINES" | "NORTH_AMERICA" | "ECUADOR";

// export const COUNTRIES: Record<CountryTypes, string> = {
//   KOREA: "Korea",
//   PHILIPPINES: "Philippines",
//   NORTH_AMERICA: "North America",
//   ECUADOR: "Ecuador",
// };

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
  | "MAXITEC_LINK"
  | "JAPAN_LABEL"
  | "JAPAN_LINK";
export const SHOPS: Record<ShopTypes, string> = {
  AMAZON_LABEL: "Amazon",
  AMAZON_LINK:
    "https://www.amazon.com/stores/WIZMAX/page/AADA7D9F-FC97-4B97-B16B-ABFBAD23A146?ref_=ast_blnE",
  MICRONICS_KOREA_LABEL: "Micronics Korea",
  MICRONICS_KOREA_LINK: "http://www.micronics.co.kr/micronics/index.php",
  COMPUZONE_LABEL: "Compuzone",
  COMPUZONE_LINK:
    "https://www.compuzone.co.kr/search/search.htm?Seargbl=1&hidden_Txt=&IsEventSearch=&SearchProductKey=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4",
  NAVER_LABEL: "Naver",
  NAVER_LINK: "https://smartstore.naver.com/micronics",
  DANAWA_LABEL: "Danawa",
  DANAWA_LINK:
    "https://search.danawa.com/dsearch.php?query=micronics&originalQuery=micronics&volumeType=allvs&page=1&limit=40&sort=saveDESC&list=list&boost=true&addDelivery=N&makerbrand_name=마이크로닉스&recommendedSort=Y&defaultUICategoryCode=112777&defaultPhysicsCategoryCode=861%7C880%7C997%7C0&defaultVmTab=943&defaultVaTab=83552&tab=main",
  WIZMAX_OFFICIAL_STORE_LABEL: "Wizmax Official Store",
  WIZMAX_OFFICIAL_STORE_LINK: "http://www.wizmaxph.myshopify.com/",
  SHOPEE_LABEL: "Shopee",
  SHOPEE_LINK: "https://shopee.ph/wizmaxph",
  LAZADA_LABEL: "Lazada",
  LAZADA_LINK: "https://www.lazada.com.ph/shop/wizmax",
  MAXITEC_LABEL: "MaxiTec",
  MAXITEC_LINK:
    "https://www.maxitec.com.ec/gaming-y-videojuegos/micronics?PS=24",
  JAPAN_LABEL: "Links",
  JAPAN_LINK: "https://www.links.co.jp/",
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
    shopLink: "",
  },
  {
    shopName: SHOPS.SHOPEE_LABEL,
    shopLink: SHOPS.SHOPEE_LINK,
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

export const JAPAN_SHOPS: any = [
  {
    shopName: SHOPS.JAPAN_LABEL,
    shopLink: SHOPS.JAPAN_LINK,
  },
];
export const shopsJapan = JAPAN_SHOPS.map((shop: any) => {
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

export const REGIONS_COUNTRIES: Record<any, any> = {
  REGIONS: [
    {
      REGION: "Asia Pacific",
      COUNTRIES: [
        {
          country: "Korea",
          shops: shopsKorea,
        },
        {
          country: "Philippines",
          shops: shopsPhilippines,
        },
        {
          country: "Japan",
          shops: shopsJapan,
        },
      ],
    },
    {
      REGION: "North and South America",
      COUNTRIES: [
        {
          country: "North America",
          shops: shopsUSA,
        },
        {
          country: "Ecuador",
          shops: shopsEcuador,
        },
      ],
    },
  ],
};
