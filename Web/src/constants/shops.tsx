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
    shopName: "Amazon",
    shopLink:
      "https://www.amazon.com/stores/WIZMAX/page/AADA7D9F-FC97-4B97-B16B-ABFBAD23A146?ref_=ast_blnE",
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
    shopName: "Micronics Korea",
    shopLink: "http://www.micronics.co.kr/micronics/index.php",
  },
  {
    shopName: "Compuzone",
    shopLink:
      "https://www.compuzone.co.kr/search/search.htm?Seargbl=1&hidden_Txt=&IsEventSearch=&SearchProductKey=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4",
  },
  {
    shopName: "Naver",
    shopLink: "https://smartstore.naver.com/micronics",
  },
  {
    shopName: "Danawa",
    shopLink:
      "https://search.danawa.com/dsearch.php?query=micronics&originalQuery=micronics&volumeType=allvs&page=1&limit=40&sort=saveDESC&list=list&boost=true&addDelivery=N&makerbrand_name=%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EB%8B%89%EC%8A%A4&recommendedSort=Y&defaultUICategoryCode=112777&defaultPhysicsCategoryCode=861%7C880%7C997%7C0&defaultVmTab=943&defaultVaTab=83552&tab=main",
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
    shopName: "Wizmax Official Store",
    shopLink: "http://wizmaxph.myshopify.com/",
  },
  {
    shopName: "Shopee",
    shopLink: "",
  },
  {
    shopName: "Lazada",
    shopLink: "http://www.lazada.com.ph/shop/wizmax-global",
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
    shopName: "MaxiTec",
    shopLink: "https://www.maxitec.com.ec/gaming-y-videojuegos/micronics?PS=24",
  },
];
export const shopsEcuador = ECUADOR_SHOPS.map((shop) => {
  return {
    name: shop.shopName,
    link: shop.shopLink,
  };
});
