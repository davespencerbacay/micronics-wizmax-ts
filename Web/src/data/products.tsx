import { ROUTE_PATH } from "constants/routes";
import React from "react";

const products = [
  /**
   * Main Product Desgin / Structure
   * Please follow
   *  */
  // {
  //   name: "ZK1",
  //   image: [
  //     "/images/products/ZK1-1.png",
  //     "/images/products/ZK1-2.png",
  //     "/images/products/ZK1-3.png",
  //     "/images/products/ZK1-4.png",
  //   ],
  //   db: "https://micronicsglobal.com/images/products/ZK1_DB_english.jpg",
  //   file: "https://drive.google.com/u/0/uc?id=1kzKGfJ28dFDYaNnycXAASsAGUTB022fw&export=download",
  //   manual:
  //     "https://micronicsglobal.com/downloads/manuals/ZK1/ZK-1-MANUAL_20410503.pdf",
  //   description: "Engineered for the Ultimate Experience ",
  //   categoryId: "CATEGORY_KB",
  //   productId: "ZK1",
  //   countryAvailability: [
  //     "/images/products/US.png",
  //     "/images/products/KR.png",
  //     "/images/products/PH.png",
  //   ],
  //   switches: true,
  //   sketches: ["/images/products/ZK1-sketch_new.png"],
  //   operatingSystem: "MAC_OS",

  //   // Declaration for Technical Sketch //
  //   table: [
  //     {
  //       name: "MODEL NAME",
  //       description: ["ZK1"],
  //     },
  //     {
  //       name: "SIZE",
  //       description: ["470mm(L) x 33mm(W) x 213mm(H) ± 1mm"],
  //     },
  //     {
  //       name: "WEIGHT",
  //       description: ["1056g ± 2g"],
  //     },
  //     {
  //       name: "SWITCH",
  //       description: ["Kailh BOX White / Red / Brown"],
  //     },
  //     {
  //       name: "NUMBER OF KEYS",
  //       description: ["104 Keys + 3 Buttons + 1 Wheel"],
  //     },
  //     {
  //       name: "LIFESPAN",
  //       description: ["80 million key strokes"],
  //     },
  //     {
  //       name: "CONCURRENT INPUT",
  //       description: ["104 Keys Anti-ghosting"],
  //     },
  //     {
  //       name: "CABLE LENGTH",
  //       description: ["1.55m"],
  //     },
  //     {
  //       name: "POLLING RATE",
  //       description: ["1000Hz"],
  //     },
  //     {
  //       name: "LED",
  //       description: ["Front RGB + Bottom RGB"],
  //     },
  //     {
  //       name: "INTERFACE",
  //       description: ["USB / Fabric Cable "],
  //     },
  //     {
  //       name: "COMPATIBILITY",
  //       description: [
  //         "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®, PlayStation4®",
  //       ],
  //     },
  //     {
  //       name: "PRODUCT TYPE",
  //       description: ["Gaming Keyboard"],
  //     },
  //     {
  //       name: "CONTENTS",
  //       description: ["ZK1, ZK1 Palm Rest, Keycap Remover, Product Manual"],
  //     },
  //     {
  //       name: "PRODUCTION DATE",
  //       description: ["Labeled at the back of the keyboard"],
  //     },
  //     {
  //       name: "WARRANTY ",
  //       description: ["1 year warranty under limited conditions apply"],
  //     },
  //     {
  //       name: "KC CERTIFICATION NUMBER",
  //       description: [
  //         <React.Fragment>
  //           <span>
  //             <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
  //             R-R-HMM-ZK-1
  //           </span>
  //         </React.Fragment>,
  //       ],
  //     },
  //     {
  //       name: "COMPANY NAME",
  //       description: ["Hanmi Micronics Co., Ltd."],
  //     },
  //     {
  //       name: "CUSTOMER SERVICE",
  //       description: ["wizmaxglobal.com"],
  //     },
  //   ],
  // },
  // {
  //   name: "ZM1",
  //   image: [
  //     "/images/products/zm1-1.png",
  //     "/images/products/zm1-2.png",
  //     "/images/products/zm1-3 (2).png",
  //     "/images/products/zm1-4.png",
  //   ],
  //   db: "/images/products/zm-1_db_english.jpg",
  //   file: "https://drive.google.com/u/0/uc?id=1s3e5rw55Is3BXAp5TV0mcdQs6QKjzzoQ&export=download",
  //   description: "Mouse for the Perfect Future",
  //   categoryId: "CATEGORY_MOUSE",
  //   // filters: filters[0].mouseFilters,
  //   productId: "ZM1",
  //   countryAvailability: ["/images/products/KR.png", "/images/products/PH.png"],
  //   sketches: ["/images/products/ZM1-SKETCH.jpg"],
  //   sketch: ["/images/products/ZM1-PALM.png"],
  //   table: [
  //     {
  //       name: "MODEL NAME",
  //       description: ["ZM1"],
  //     },
  //     {
  //       name: "SIZE ",
  //       description: ["120mm(L) x 66mm(W) x 35mm(H)"],
  //     },
  //     {
  //       name: "WEIGHT",
  //       description: ["108g ± 2g"],
  //     },
  //     {
  //       name: "SWITCH",
  //       description: ["Huano Switch"],
  //     },
  //     {
  //       name: "LIFESPAN",
  //       description: ["20 million clicks"],
  //     },
  //     {
  //       name: "SENSOR",
  //       description: ["PIXART PMW 3389"],
  //     },
  //     {
  //       name: "CABLE LENGTH",
  //       description: ["1.62m"],
  //     },
  //     {
  //       name: "POLLING RATE",
  //       description: ["1000Hz"],
  //     },
  //     {
  //       name: "LED",
  //       description: ["Bottom RGB"],
  //     },
  //     {
  //       name: "INTERFACE",
  //       description: ["USB / Polyfabric Cable  "],
  //     },
  //     {
  //       name: "COMPATIBILITY",
  //       description: [
  //         "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11® , PlayStation4®",
  //       ],
  //     },
  //     {
  //       name: "ACCELERATION",
  //       description: ["50G"],
  //     },
  //     {
  //       name: "WARRANTY",
  //       description: ["1 year warranty under limited conditions apply"],
  //     },
  //     {
  //       name: "PRODUCTION DATE",
  //       description: ["Labeled at the back"],
  //     },
  //     {
  //       name: "KC CERTIFICATION ",
  //       description: [
  //         <React.Fragment>
  //           <span>
  //             <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
  //             R-R-HMM-ZM-1
  //           </span>
  //         </React.Fragment>,
  //       ],
  //     },
  //     {
  //       name: "COMPANY NAME ",
  //       description: ["Hanmi Micronics Co., Ltd."],
  //     },
  //     {
  //       name: "CUSTOMER SERVICE ",
  //       description: ["wizmaxglobal.com"],
  //     },
  //   ],
  //   scale: true,
  // },
  /** ------ END PRODUCT STRUCTURE ------ */
  {
    id: "1",
    productId: "ZM1",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "ZM1"),
    name: "ZM1",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/zm-1_db_english.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse.svg",
      "/images/micronics-assets/product-images/mouse.svg",
      "/images/micronics-assets/product-images/mouse.svg",
      "/images/micronics-assets/product-images/mouse.svg",
      "/images/micronics-assets/product-images/mouse.svg",
    ],
    countryAvailability: [
      {
        abbreviation: "KR",
        country: "Korea",
      },
      {
        abbreviation: "PH",
        country: "Philippines",
      },
      {
        abbreviation: "US",
        country: "United States",
      },
      {
        abbreviation: "EC",
        country: "Ecuador",
      },
      {
        abbreviation: "JP",
        country: "Japan",
      },
    ],
    table: [
      {
        name: "MODEL NAME",
        description: ["ZM1"],
      },
      {
        name: "SIZE ",
        description: ["120mm(L) x 66mm(W) x 35mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["108g ± 2g"],
      },
      {
        name: "SWITCH",
        description: ["Huano Switch"],
      },
      {
        name: "LIFESPAN",
        description: ["20 million clicks"],
      },
      {
        name: "SENSOR",
        description: ["PIXART PMW 3389"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.62m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Bottom RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Polyfabric Cable  "],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11® , PlayStation4®",
        ],
      },
      {
        name: "ACCELERATION",
        description: ["50G"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-ZM-1
            </span>
          </React.Fragment>,
        ],
      },
      {
        name: "COMPANY NAME ",
        description: ["Hanmi Micronics Co., Ltd."],
      },
      {
        name: "CUSTOMER SERVICE ",
        description: ["wizmaxglobal.com"],
      },
    ],
  },
  {
    id: "2",
    categoryId: "CATEGORY_MOUSE",
    name: "product 2",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "CATEGORY_MOUSE",
    name: "product 3",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "CATEGORY_MOUSE",
    name: "product 4",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "5",
    categoryId: "CATEGORY_MOUSE",
    name: "product 5",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "3",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "keyboard 3",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
  {
    id: "4",
    categoryId: "77484846-2aee-4059-8415-d98b064b2c4a",
    name: "product 2",
    img: ["/images/micronics-assets/product-images/mouse.svg"],
    countryAvailability: ["PH", "KR", "US"],
  },
];

export default products;
