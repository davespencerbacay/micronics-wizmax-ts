import { ROUTE_PATH } from "constants/routes";
import React from "react";

const products = [
  /**
   * Main Product Desgin / Structure
   * Please follow
   *  */
  {
    name: "ZK1",
    image: [
      "/images/products/ZK1-1.png",
      "/images/products/ZK1-2.png",
      "/images/products/ZK1-3.png",
      "/images/products/ZK1-4.png",
    ],
    db: "https://micronicsglobal.com/images/products/ZK1_DB_english.jpg",
    file: "https://drive.google.com/u/0/uc?id=1kzKGfJ28dFDYaNnycXAASsAGUTB022fw&export=download",
    manual:
      "https://micronicsglobal.com/downloads/manuals/ZK1/ZK-1-MANUAL_20410503.pdf",
    description: "Engineered for the Ultimate Experience ",
    categoryId: "CATEGORY_KB",
    productId: "ZK1",
    countryAvailability: [
      "/images/products/US.png",
      "/images/products/KR.png",
      "/images/products/PH.png",
    ],
    switches: true,
    sketches: ["/images/products/ZK1-sketch_new.png"],
    operatingSystem: "MAC_OS",

    // Declaration for Technical Sketch //
    table: [
      {
        name: "MODEL NAME",
        description: ["ZK1"],
      },
      {
        name: "SIZE",
        description: ["470mm(L) x 33mm(W) x 213mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["1056g ± 2g"],
      },
      {
        name: "SWITCH",
        description: ["Kailh BOX White / Red / Brown"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys + 3 Buttons + 1 Wheel"],
      },
      {
        name: "LIFESPAN",
        description: ["80 million key strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Keys Anti-ghosting"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.55m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB + Bottom RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable "],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®, PlayStation4®",
        ],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: ["ZK1, ZK1 Palm Rest, Keycap Remover, Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of the keyboard"],
      },
      {
        name: "WARRANTY ",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-ZK-1
            </span>
          </React.Fragment>,
        ],
      },
      {
        name: "COMPANY NAME",
        description: ["Hanmi Micronics Co., Ltd."],
      },
      {
        name: "CUSTOMER SERVICE",
        description: ["wizmaxglobal.com"],
      },
    ],
  },
  /** ------ END PRODUCT STRUCTURE ------ */
  {
    id: "1",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "ZM1"),
    name: "product 1",
    img: "/images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "2",
    categoryId: "CATEGORY_MOUSE",
    name: "product 2",
    img: "/images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "CATEGORY_MOUSE",
    name: "product 3",
    img: "/images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "CATEGORY_MOUSE",
    name: "product 4",
    img: "/images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "5",
    categoryId: "CATEGORY_MOUSE",
    name: "product 5",
    img: "/images/micronics-assets/product-images/mouse.svg",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "keyboard 3",
    img: "",
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "product 2",
    img: "",
    countryAvailability: ["PH", "KR", "US"],
  },
];

export default products;
