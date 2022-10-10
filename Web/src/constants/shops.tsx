import { SHOPS } from "constants/";

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
