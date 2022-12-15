import { ROUTE_PATH } from "constants/routes";
import React from "react";

const products = [
  /**
   * Main Product Desgin / Structure
   * Please follow
   *  */
  // MOUSE SECTION
  {
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
      "/images/micronics-assets/product-images/mouse/images/zm1-1.png",
      "/images/micronics-assets/product-images/mouse/images/zm1-2.png",
      "/images/micronics-assets/product-images/mouse/images/zm1-3.png",
      "/images/micronics-assets/product-images/mouse/images/zm1-4.png",
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
    productId: "ZM2",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "ZM2"),
    name: "ZM2",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/ZM2_DB_Translation_Revision.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse/images/ZM2-1.png",
      "/images/micronics-assets/product-images/mouse/images/ZM2-2.png",
      "/images/micronics-assets/product-images/mouse/images/ZM2-3.png",
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
        description: ["ZM2"],
      },
      {
        name: "SIZE ",
        description: ["127.4mm(L) x 69.96mm(W) x 39.7mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["111g"],
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
        description: ["PAW3370 Optical Sensor"],
      },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["1.62m"],
      // },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["7 Mode RGB"],
      },
      {
        name: "INTERFACE",
        description: ["Gold-Plated USB"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
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
              R-R-HMM-ZM-2
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
    productId: "MM1",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "MM1"),
    name: "MM1",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/Mouse_MM1_DB.png",
    img: [
      "/images/micronics-assets/product-images/mouse/images/mm1-1.png",
      "/images/micronics-assets/product-images/mouse/images/mm1-2.png",
      "/images/micronics-assets/product-images/mouse/images/mm1-3.png",
      "/images/micronics-assets/product-images/mouse/images/mm1-4.png",
      "/images/micronics-assets/product-images/mouse/images/mm1-5.png",
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
        description: ["MM1"],
      },
      {
        name: "SIZE",
        description: ["117.5mm(L) x 65.9mm(W) x 38.8mm(H)"],
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
        description: ["PAW3327 Optical Sensor"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.9m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["RGB (7 MODES AVAILABLE)"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Paracord Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11® , PlayStation4®",
        ],
      },
      {
        name: "ACCELERATION ",
        description: ["30G"],
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
        name: "KC Certification No",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-MM1-1
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
  {
    productId: "WM1",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "WM1"),
    name: "WM1",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/WM1-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse/images/wm1-1.png",
      "/images/micronics-assets/product-images/mouse/images/wm1-2.png",
      "/images/micronics-assets/product-images/mouse/images/wm1-3.png",
      "/images/micronics-assets/product-images/mouse/images/wm1-4.png",
      "/images/micronics-assets/product-images/mouse/images/wm1-5.png",
      "/images/micronics-assets/product-images/mouse/images/wm1-6.png",
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
        description: ["WM1"],
      },
      {
        name: "SIZE",
        description: ["121.2mm(L) x 66.6mm(W) x 38.8mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["70g ± 2g"],
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
        description: ["PAW3370 Optical Sensor "],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.9m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["RGB (7 modes available)"],
      },
      {
        name: "DPI",
        description: ["19,000 DPI (7 steps adjustable)"],
      },
      {
        name: "INTERFACE",
        description: [" USB / Paracord cable"],
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
        description: ["Label at the back"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WM-1
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
  {
    productId: "WM2",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "WM2"),
    name: "WM2",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/WM2_DB_Translation_Revision.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse/images/WM2-4.png",
      "/images/micronics-assets/product-images/mouse/images/WM2-1.png",
      "/images/micronics-assets/product-images/mouse/images/WM2-2.png",
      "/images/micronics-assets/product-images/mouse/images/WM2-3.png",
      "/images/micronics-assets/product-images/mouse/images/WM2-5.png",
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
        description: ["WM2"],
      },
      {
        name: "SIZE ",
        description: ["127.4mm(L) x 68.7mm(W) x 39.5mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["110g ± 5g"],
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
        description: ["PAW3370 Optical Sensor"],
      },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["1.62m"],
      // },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["7 Mode RGB"],
      },
      {
        name: "DPI",
        description: ["20,000"],
      },
      {
        name: "INTERFACE",
        description: ["Wired USB Type-A"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows Vista, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
        ],
      },
      {
        name: "ACCELERATION",
        description: ["50G"],
      },
      {
        name: "TRACKING SPEED",
        description: ["400G"],
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
        name: "KC CERTIFICATION",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WM-2
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
  {
    productId: "MG40",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "MG40"),
    name: "MG40",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/MANIC-G40-DB_ENGLISH.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse/images/MG40 -3.png",
      "/images/micronics-assets/product-images/mouse/images/MG40 -1.png",
      "/images/micronics-assets/product-images/mouse/images/MG40 -2.png",
      "/images/micronics-assets/product-images/mouse/images/MG40 -4.png",
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
        description: ["Manic G40"],
      },
      {
        name: "SIZE ",
        description: ["123mm(L) x 64mm(W) x 38mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["96g"],
      },
      {
        name: "SWITCH",
        description: ["OMRON"],
      },
      {
        name: "LIFESPAN",
        description: ["20 million clicks"],
      },
      {
        name: "SENSOR",
        description: ["PMW 3360 (DPI: 12,000, 6 step)"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.7m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["RGB Pattern"],
      },
      {
        name: "INTERFACE",
        description: ["USB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows 10®"],
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
              R-REI-HMM-MANICG40
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
    productId: "MG501",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "MG501"),
    name: "MG501",
    brochure:
      "/images/micronics-assets/product-images/mouse/brochure/MG501_DB_Translation.jpg",
    img: [
      "/images/micronics-assets/product-images/mouse/images/MG501-3.png",
      "/images/micronics-assets/product-images/mouse/images/MG501-1.png",
      "/images/micronics-assets/product-images/mouse/images/MG501-2.png",
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
        description: ["MG501"],
      },
      {
        name: "SIZE ",
        description: ["126mm(L) x 69mm(W) x 42mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["127g ± 5g"],
      },
      {
        name: "SWITCH",
        description: ["Huano Switch"],
      },
      // {
      //   name: "LIFESPAN",
      //   description: ["20 million clicks"],
      // },
      {
        name: "SENSOR",
        description: ["ANDS - 3050"],
      },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["1.62m"],
      // },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      // {
      //   name: "LED",
      //   description: ["Bottom RGB"],
      // },
      {
        name: "INTERFACE",
        description: ["USB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows 10®"],
      },
      {
        name: "ACCELERATION",
        description: ["20G"],
      },
      {
        name: "CONTENTS",
        description: ["MG501 Mouse, Product Manual"],
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
              R-R-HMM-MG501
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
    productId: "MG530",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "MG530"),
    name: "MG530",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/mouse/images/MG530  - 3.png",
      "/images/micronics-assets/product-images/mouse/images/MG530  - 1.png",
      "/images/micronics-assets/product-images/mouse/images/MG530  - 2.png",
      "/images/micronics-assets/product-images/mouse/images/MG530  - 4.png",
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
        description: ["MG530"],
      },
      {
        name: "SIZE ",
        description: ["120mm(L) x 67mm(W) x 38mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["119g"],
      },
      {
        name: "SWITCH",
        description: ["Huano Switch"],
      },
      {
        name: "LIFESPAN",
        description: ["20 Million Clicks"],
      },
      {
        name: "SENSOR",
        description: ["PAW3327 Optical Sensor"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.9m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["7 Mode RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
        ],
      },
      {
        name: "ACCELERATION",
        description: ["30G"],
      },
      {
        name: "CONTENTS",
        description: ["MG530 Mouse, Product Manual"],
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
              R-R-HMM-MG530
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
    productId: "MZG106",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "MZG106"),
    name: "Manic ZG106",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-1.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-2.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-3.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-4.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-5.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-6.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-7.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-8.png",
      "/images/micronics-assets/product-images/mouse/images/ZG106 3327-9.png",
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
        description: ["Manic ZG106"],
      },
      {
        name: "SIZE ",
        description: ["124mm(L) x 68mm(W) x 40mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["106g"],
      },
      {
        name: "SWITCH",
        description: ["Huano Switch"],
      },
      {
        name: "LIFESPAN",
        description: ["20 Million Clicks"],
      },
      {
        name: "SENSOR",
        description: ["PAW 3327 (DPI: 12,400, 7 step)"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Rubber Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
        ],
      },
      {
        name: "ACCELERATION",
        description: ["30G"],
      },
      {
        name: "CONTENTS",
        description: ["Z-G106 Mouse, Product Manual"],
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
              R-R-HMM-ZG106
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
    productId: "M630W",
    categoryId: "CATEGORY_MOUSE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_MOUSE"
    ).replace(":productId", "M630W"),
    name: "Manic M630W",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/mouse/images/M630W-B-2.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-1.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-3.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-4.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-5.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-6.png",
      "/images/micronics-assets/product-images/mouse/images/M630W-B-7.png",
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
        description: ["Manic M630W"],
      },
      {
        name: "SIZE ",
        description: ["103mm(L) x 70mm(W) x 42mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["62g ± 5g (with receiver)"],
      },
      {
        name: "SWITCH",
        description: ["Silent Switch"],
      },
      {
        name: "LIFESPAN",
        description: ["5 Million Clicks"],
      },
      {
        name: "SENSOR",
        description: ["Optical Sensor (DPI: 1,600)"],
      },
      {
        name: "WIRELESS DISTANCE",
        description: ["10m"],
      },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["1.8m"],
      // },
      {
        name: "POLLING RATE",
        description: ["250Hz"],
      },
      // {
      //   name: "LED",
      //   description: ["RGB"],
      // },
      {
        name: "INTERFACE",
        description: ["USB 2.4GHz"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 10®, Windows 11®"],
      },
      // {
      //   name: "ACCELERATION",
      //   description: ["30G"],
      // },
      {
        name: "CONTENTS",
        description: ["M630W Mouse, AA Battery, Receiver, Product Manual"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the Bottom of the Mouse"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-M630W, R-R-HMM-R630W
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
  //KEYBOARD SECTION
  {
    productId: "ZK1",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "ZK1"),
    name: "ZK1",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/ZK1_DB_english.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/zk1-1.png",
      "/images/micronics-assets/product-images/keyboard/images/zk1-2.png",
      "/images/micronics-assets/product-images/keyboard/images/zk1-3.png",
      "/images/micronics-assets/product-images/keyboard/images/zk1-4.png",
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
  {
    productId: "ZK2",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "ZK2"),
    name: "ZK2",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/ZK2-DB-english.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/ZK2-1.png",
      "/images/micronics-assets/product-images/keyboard/images/ZK2-2.png",
      "/images/micronics-assets/product-images/keyboard/images/ZK2-3.png",
      "/images/micronics-assets/product-images/keyboard/images/ZK2-4.png",
      "/images/micronics-assets/product-images/keyboard/images/ZK2-5.png",
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
        description: ["ZK2"],
      },
      {
        name: "SIZE",
        description: ["453mm(L) x 42mm(W) x 147mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["1087g ± 30g"],
      },
      {
        name: "SWITCH ",
        description: ["Manic 2nd Generation Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million key strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Keys Anti-ghosting "],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB + Side RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windos XP®, Windows 8®, Windows 10®, Windows 11®, PlayStation4®",
        ],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "ZK2 Keyboard, ZK2 Product Manual, Keycap Remover, Switch Remover, 3 Spare Switches, Dust Bag",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-ZK-2
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
    productId: "WK1",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "WK1"),
    name: "WK1",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/Keyboard_WK1_DB_updated.png",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/WK1B - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/WK1B - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/WK1B - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/WK1B - 1.png",
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
        description: ["WK1"],
      },
      {
        name: "SIZE",
        description: ["456mm(L) x 35mm(W) x 155mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["1135g ± 2g"],
      },
      {
        name: "SWITCH",
        description: ["Manic Switch Blue / Red / Brown"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
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
        description: ["WK1, Keycap Remover, Product Manual"],
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
        name: "KC CERTIFICATION NUMBER ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WK-1
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
  {
    productId: "WK2",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "WK2"),
    name: "WK2",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/Keyboard_WK2_DB_updated.png",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/WK2-1.png",
      "/images/micronics-assets/product-images/keyboard/images/WK2-2.png",
      "/images/micronics-assets/product-images/keyboard/images/WK2-3.png",
      "/images/micronics-assets/product-images/keyboard/images/WK2-4.png",
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
        name: "MODEL",
        description: [" WK2"],
      },
      {
        name: "SIZE",
        description: ["446mm(L) x 38mm(W) x 162mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["1184g ± 30g"],
      },
      {
        name: "SWITCH",
        description: ["Manic Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million key strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Keys Anti-ghosting"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB + Top RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
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
        description: [
          "WK2 Keyboard, Keycap Remover, Switch Remover, 3 Spare Switches, Dust Bag, Product Manual",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of keyboard"],
      },
      {
        name: "WARRANTY ",
        description: ["1 year warranty  under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WK-2
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
  {
    productId: "WK3",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "WK3"),
    name: "WK3",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/Keyboard_WK3_DB_updated.png",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/WK3 - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/WK3-2.png",
      "/images/micronics-assets/product-images/keyboard/images/WK3-3.png",
      "/images/micronics-assets/product-images/keyboard/images/WK3-4.png",
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
        name: "MODEL NAME ",
        description: ["WK3"],
      },
      {
        name: "SIZE ",
        description: ["374.4mm(L) x 42mm(W) x 146.4mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["817g ± 30g "],
      },
      {
        name: "SWITCH",
        description: ["Manic Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["87 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million key strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["Anti-ghosting infinite simultaneous input "],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB + Bottom RGB "],
      },
      {
        name: "INTERFACE",
        description: ["Detachable USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 8®, Windows 10®, Windows 11®, PlayStation4®",
        ],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "WK3 Keyboard, Keycap Remover, Switch Remover, 3 Spare Switches, Dust Bag, Product Manual",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of the keyboard"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WK-3
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
  {
    productId: "WK4",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "WK4"),
    name: "WK4",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/wk4_DB_english.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/WK4-1.png",
      "/images/micronics-assets/product-images/keyboard/images/WK4-2.png",
      "/images/micronics-assets/product-images/keyboard/images/WK4-3.png",
      "/images/micronics-assets/product-images/keyboard/images/WK4-4.png",
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
        description: ["WK4"],
      },
      {
        name: "SIZE",
        description: ["365mm(L) x 36mm(W) x 142mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["944g ± 30g"],
      },
      {
        name: "SWITCH",
        description: ["Manic Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["87 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["80 million key strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["Anti-ghosting"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB + Top RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Polyfabric Cable"],
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
        description: [
          "WK4 Keyboard, Keycap Remover, Switch Remover, 3 Spare Switches, Dust Bag, Product Manual",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of the keyboard"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WK-4
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
  {
    productId: "MK1",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MK1"),
    name: "MK1",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/Keyboard_MK1_DB.png",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 5.png",
      "/images/micronics-assets/product-images/keyboard/images/MK1 - 6.png",
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
        description: ["MK1"],
      },
      {
        name: "SIZE",
        description: ["440mm(L) x 168mm(W) x 39mm(H) ± 1mm"],
      },
      {
        name: "WEIGHT",
        description: ["941g ± 2g"],
      },
      {
        name: "SWITCH",
        description: ["Manic Switch Blue/Red/Brown"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["80 million strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Keys Anti-ghosting "],
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
        description: ["Front RGB + Back RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8® , Windows 10®, PlayStation4®",
        ],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "MK1 Keyboard, Keycap Remover, Switch Remover, Product Manual",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-MK-1-FCC
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
  {
    productId: "EX580",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "EX580"),
    name: "EX580",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/EX580_ENG.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 5.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 6.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 7.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580 - 8.png",
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
        description: ["EX580"],
      },
      {
        name: "SIZE",
        description: ["446mm(L) x 135mm(W) x 37mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["1020g ± 10g"],
      },
      {
        name: "SWITCH",
        description: ["Jixian 4.0 Optical Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["100 million strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Infinite Simultaneous Inputs"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.5m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows XP®, Windows 7®, Windows 8® , Windows 10®"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Mechanical Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: ["Manic EX580 Keyboard, Product Manual, Keycap Puller"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp; R-R-HMM-X50
              (Derivative model)
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
  {
    productId: "EX580L",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "EX580L"),
    name: "EX580L",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/EX580L_DB-ENG.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0005_05.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0006_06.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0008_08.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0009_09.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0010_10.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0011_11.png",
      "/images/micronics-assets/product-images/keyboard/images/EX580_L_0012_12.png",
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
        description: ["EX580L"],
      },
      {
        name: "SIZE",
        description: ["446mm(L) x 135mm(W) x 37mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["1059g ± 10g"],
      },
      {
        name: "SWITCH",
        description: ["2nd Gen Manic Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million strokes"],
      },
      // {
      //   name: "CONCURRENT INPUT",
      //   description: ["104 Infinite Simultaneous Inputs"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["1.8m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8® , Windows 10®, Windows 11®",
        ],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Mechanical Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "Manic EX580L Keyboard, Product Manual, Cleaning Brush, Keycap Remover, Keyboard Cover",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-EX580L
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
  {
    productId: "MANICX100",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MANICX100"),
    name: "Manic X100",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/Keyboard_X100_DB.png",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/X100 - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/X100 - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/X100 - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/X100 - 1.png",
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
        description: ["MANIC X100"],
      },
      {
        name: "SIZE",
        description: ["440mm(L) x 140mm(W) x 47mm(H) ± 0.5mm"],
      },
      {
        name: "WEIGHT",
        description: ["1100g ± 20g"],
      },
      {
        name: "SWITCH",
        description: ["Manic Blue/Red/Brown Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million strokes"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Infinite Simultaneous Inputs"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.5m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["Front RGB"],
      },
      {
        name: "INTERFACE",
        description: ["USB / Fabric Cable"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows XP®, Windows 7®, Windows 8® , Windows 10®"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Mechanical Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: ["Manic X100 Keyboard, Product Manual, Keycap Puller"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-X100
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
  {
    productId: "MANICEX89",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MANICEX89"),
    name: "Manic EX89 TKL",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/EX89_DB_ENGLISH.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/EX89 TKL - 5.png",
      "/images/micronics-assets/product-images/keyboard/images/EX89 TKL - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/EX89 TKL - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/EX89 TKL - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/EX89 TKL - 4.png",
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
        description: ["Manic EX89"],
      },
      {
        name: "SIZE",
        description: ["358mm(L) x 130mm(W) x 39mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["866g ± 20g"],
      },
      {
        name: "SWITCH",
        description: ["Green / Red / Brown Switch"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["89 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 Million Strokes"],
      },
      // {
      //   name: "CONCURRENT INPUT",
      //   description: ["104 Keys Anti-ghosting "],
      // },
      {
        name: "CABLE LENGTH",
        description: ["1.2m"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      // {
      //   name: "LED",
      //   description: ["Front RGB + Back RGB"],
      // },
      {
        name: "INTERFACE",
        description: ["USB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 64®, Windows 7®, Windows 8® , Windows 10®"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Mechanical Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "Manic EX89 Keyboard, Keycap Remover, Switch Remover, Product Manual",
        ],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled on the back of the Product"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION NUMBER",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-EX89
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
  {
    productId: "MK350",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MK350"),
    name: "Manic K350",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/K350_DB_ENG.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/K350 - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/K350 - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/K350 - 2.png",
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
        description: ["Manic K350"],
      },
      {
        name: "SIZE",
        description: ["438mm(L) x 126mm(W) x 15.8mm(H) ± 2mm"],
      },
      {
        name: "WEIGHT",
        description: ["555g ± 10g"],
      },
      {
        name: "SWITCH",
        description: ["Pantograph (Scissor Switch)"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["110 Keys"],
      },
      // {
      //   name: "LIFESPAN",
      //   description: ["80 million key strokes"],
      // },
      // {
      //   name: "CONCURRENT INPUT",
      //   description: ["104 Keys Anti-ghosting"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["150cm ± 3cm"],
      },
      // {
      //   name: "POLLING RATE",
      //   description: ["1000Hz"],
      // },
      // {
      //   name: "LED",
      //   description: ["Front RGB + Bottom RGB"],
      // },
      {
        name: "INTERFACE",
        description: ["Wired USB"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Mac OS®, Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
        ],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Keyboard"],
      },
      {
        name: "CONTENTS",
        description: ["Keyboard and Product Manual"],
      },
      // {
      //   name: "PRODUCTION DATE",
      //   description: ["Labeled at the back of the keyboard"],
      // },
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
              R-R-HMM-K350
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
  {
    productId: "MX40",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MX40"),
    name: "Manic X40",
    brochure:
      "/images/micronics-assets/product-images/keyboard/brochure/DB_X40_ENGLISH.jpg",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/X40 - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/X40 - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/X40 - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/X40 - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/X40 - 5.png",
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
        description: ["Manic X40"],
      },
      {
        name: "SIZE",
        description: ["443.8mm(L) x 139.7mm(W) x 38.8mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["1243g ± 10g"],
      },
      {
        name: "INCLINE ANGLE",
        description: ["4.3"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["104 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["10 million key strokes"],
      },
      {
        name: "COLOR",
        description: ["Black / White"],
      },
      {
        name: "KEYCAP",
        description: ["Double Injection"],
      },
      {
        name: "CONCURRENT INPUT",
        description: ["104 Interchangeable Optical Axis"],
      },
      {
        name: "CABLE LENGTH",
        description: ["1.8M"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "INTERFACE",
        description: ["USB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows 10®"],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Mechanical Gaming Keyboard"],
      },
      {
        name: "CONTENTS",
        description: [
          "Keyboard Cover, Remover, 4x Spare Switch, PC Room Sticker",
        ],
      },
      // {
      //   name: "SWITCH",
      //   description: ["4th Generation JIXIAN Optical Switch (Hot-Swappable)"],
      // },
      // {
      //   name: "LED",
      //   description: ["White LED Effect"],
      // },
      // {
      //   name: "FEATURE",
      //   description: ["IPX8 Waterproof"],
      // },
      // {
      //   name: "POLLING RATE",
      //   description: ["1000Hz"],
      // },
      // {
      //   name: "LED",
      //   description: ["Front RGB + Bottom RGB"],
      // },

      // },
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
              R-R-HMM-MANICX40
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
  {
    productId: "MX40P",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "MX40P"),
    name: "Manic X40P",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/Manic X40P-3.png",
      "/images/micronics-assets/product-images/keyboard/images/Manic X40P-1.png",
      "/images/micronics-assets/product-images/keyboard/images/Manic X40P-2.png",
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
        description: ["Manic X40P"],
      },
      // {
      //   name: "SIZE",
      //   description: ["438mm(L) x 126mm(W) x 15.8mm(H) ± 2mm"],
      // },
      // {
      //   name: "WEIGHT",
      //   description: ["555g ± 10g"],
      // },
      {
        name: "SWITCH",
        description: ["4th Generation JIXIAN Optical Switch (Hot-Swappable)"],
      },
      {
        name: "KEYCAP",
        description: ["PBT Keycap"],
      },
      {
        name: "LIFESPAN",
        description: ["100 million key strokes"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["White LED Effect"],
      },
      {
        name: "FEATURE",
        description: ["IPX8 Waterproof"],
      },
      // {
      //   name: "NUMBER OF KEYS",
      //   description: ["110 Keys"],
      // },

      // {
      //   name: "CONCURRENT INPUT",
      //   description: ["104 Keys Anti-ghosting"],
      // },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["150cm ± 3cm"],
      // },
      // {
      //   name: "POLLING RATE",
      //   description: ["1000Hz"],
      // },
      // {
      //   name: "LED",
      //   description: ["Front RGB + Bottom RGB"],
      // },
      // {
      //   name: "INTERFACE",
      //   description: ["Wired USB"],
      // },
      // {
      //   name: "COMPATIBILITY",
      //   description: [
      //     "Mac OS®, Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®",
      //   ],
      // },
      // {
      //   name: "PRODUCT TYPE",
      //   description: ["Keyboard"],
      // },
      // {
      //   name: "CONTENTS",
      //   description: ["Keyboard and Product Manual"],
      // },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of the keyboard"],
      },
      {
        name: "WARRANTY ",
        description: ["1 year warranty under limited conditions apply"],
      },
      // {
      //   name: "KC CERTIFICATION NUMBER",
      //   description: [
      //     <React.Fragment>
      //       <span>
      //         <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
      //         R-R-HMM-K350
      //       </span>
      //     </React.Fragment>,
      //   ],
      // },
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
  {
    productId: "W85-TKL",
    categoryId: "CATEGORY_KB",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_KB"
    ).replace(":productId", "W85-TKL"),
    name: "Wizmax W85 TKL",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/keyboard/images/W85TKL - 3.png",
      "/images/micronics-assets/product-images/keyboard/images/W85TKL - 1.png",
      "/images/micronics-assets/product-images/keyboard/images/W85TKL - 2.png",
      "/images/micronics-assets/product-images/keyboard/images/W85TKL - 4.png",
      "/images/micronics-assets/product-images/keyboard/images/W85TKL - 5.png",
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
        description: ["W85 TKL"],
      },
      // {
      //   name: "SIZE",
      //   description: ["438mm(L) x 126mm(W) x 15.8mm(H) ± 2mm"],
      // },
      // {
      //   name: "WEIGHT",
      //   description: ["555g ± 10g"],
      // },
      {
        name: "SWITCH",
        description: ["GATERON Yellow Pro Switch (Hot-Swappable)"],
      },
      {
        name: "KEYCAP",
        description: ["PBT 2 Color Keycap"],
      },
      {
        name: "NUMBER OF KEYS",
        description: ["85 Keys"],
      },
      {
        name: "LIFESPAN",
        description: ["60 million key strokes"],
      },
      {
        name: "INTERFACE",
        description: ["Wired/Wireless Connection Bluetooth/2.4GHz"],
      },
      {
        name: "POLLING RATE",
        description: ["1000Hz"],
      },
      {
        name: "LED",
        description: ["White LED Effect"],
      },
      {
        name: "PRODUCT TYPE",
        description: ["Gaming Keyboard"],
      },
      {
        name: "BATTERY",
        description: ["Li-Battery 3.7V, 3000mA/H (15H)"],
      },
      // {
      //   name: "FEATURE",
      //   description: ["IPX8 Waterproof"],
      // },
      // {
      //   name: "CONTENTS",
      //   description: ["Keyboard and Product Manual"],
      // },
      {
        name: "PRODUCTION DATE",
        description: ["Labeled at the back of the keyboard"],
      },
      {
        name: "WARRANTY ",
        description: ["1 year warranty under limited conditions apply"],
      },
      // {
      //   name: "KC CERTIFICATION NUMBER",
      //   description: [
      //     <React.Fragment>
      //       <span>
      //         <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
      //         R-R-HMM-K350
      //       </span>
      //     </React.Fragment>,
      //   ],
      // },
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
  //HEADSET SECTION
  {
    productId: "WH1",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "WH1"),
    name: "WH1",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/Headset_WH1_DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/wh1-1.png",
      "/images/micronics-assets/product-images/headset/images/wh1-2.png",
      "/images/micronics-assets/product-images/headset/images/wh1-3.png",
      "/images/micronics-assets/product-images/headset/images/wh1-4.png",
      "/images/micronics-assets/product-images/headset/images/wh1-5.png",
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
        name: "MODEL NAME ",
        description: ["WH1"],
      },
      {
        name: "SIZE",
        description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["295g (Cable Excluded)"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Gold Plated"],
      },
      {
        name: "MICROPHONE ",
        description: ["Hardware MIC Noise Canceling "],
      },
      {
        name: "MICROPHONE DIMENSION (MIC) ",
        description: ["⌀4 x 1.5mm"],
      },
      {
        name: " ENC MICROPHONE DIMENSION",
        description: ["⌀6 x 5mm"],
      },
      {
        name: "CABLE LENGTH",
        description: ["2200 ± 50mm"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows10®, Windows 11®, PlayStation4®",
        ],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["-42dB ± 3dB / 1kHz "],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["100Hz - 8kHz"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["30mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["32Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["WH1 Headset, Windscreen, Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-WH-1
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
    productId: "MH1",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MH1"),
    name: "MH1",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/MH1-DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/MH-1-1.png",
      "/images/micronics-assets/product-images/headset/images/MH-1-2.png",
      "/images/micronics-assets/product-images/headset/images/MH-1-3.png",
      "/images/micronics-assets/product-images/headset/images/MH-1-4.png",
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
        name: "MODEL NAME ",
        description: ["MH1"],
      },
      {
        name: "SIZE",
        description: ["205mm(L) x 105mm(W) x 218mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["325g (Cable Excluded)"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Gold Plated"],
      },
      {
        name: "MICROPHONE DIMENSION (MIC)",
        description: ["⌀4 x 1.5mm"],
      },
      {
        name: " ENC MICROPHONE DIMENSION",
        description: ["⌀6 x 5mm"],
      },
      {
        name: "CABLE LENGTH",
        description: ["135 ± 10mm"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®, PlayStation4®",
        ],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["-42dB ± 3dB / 1kHz "],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["100Hz - 8kHz"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["30mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["21Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["MH1 Headset, Windscreen, Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-MH1-1
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
    productId: "MH2",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MH2"),
    name: "MH2",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/MH2-DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/MH2-1.png",
      "/images/micronics-assets/product-images/headset/images/MH2-2.png",
      "/images/micronics-assets/product-images/headset/images/MH2-3.png",
      "/images/micronics-assets/product-images/headset/images/MH2-4.png",
      "/images/micronics-assets/product-images/headset/images/MH2-5.png",
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
        name: "MODEL NAME ",
        description: ["MH2"],
      },
      {
        name: "SIZE",
        description: ["207mm(L) x 100mm(W) x 214mm(H)"],
      },
      {
        name: "WEIGHT",
        description: ["300g (Cable Excluded)"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Gold Plated"],
      },
      {
        name: "MICROPHONE DIMENSION (BOOM)",
        description: ["⌀4 x 1.5mm"],
      },
      {
        name: "CABLE LENGTH",
        description: ["150mm"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: [
          "Windows XP®, Windows 7®, Windows 8®, Windows 10®, Windows 11®, PlayStation 4®",
        ],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["-33dB ± 3dB / 1kHz "],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["20Hz - 20kHz"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["20mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["2Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["MH2 Headset, Windscreen, Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp; R-R-HMM-MH2
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
    productId: "MH3",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MH3"),
    name: "MH3",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/headset/images/MH3 1000x1000px.png",
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
        name: "MODEL NAME ",
        description: ["MH3"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      // {
      //   name: "WEIGHT",
      //   description: ["295g (Cable Excluded)"],
      // },
      // {
      //   name: "WIRED/WIRELESS",
      //   description: ["Wired"],
      // },
      // {
      //   name: "INPUT TERMINAL",
      //   description: ["USB A / Gold Plated"],
      // },
      {
        name: "MICROPHONE ",
        description: ["Hardware Microphone Noise Cancellation"],
      },
      {
        name: "DRIVER UNIT ",
        description: ["50mm Driver Unit"],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: " ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["2200 ± 50mm"],
      // },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      // {
      //   name: "COMPATIBILITY",
      //   description: [
      //     "Windows XP®, Windows 7®, Windows 8®, Windows10®, Windows 11®, PlayStation4®",
      //   ],
      // },
      // {
      //   name: "PICK UP PATTERN",
      //   description: ["Omni-directional"],
      // },
      // {
      //   name: "SENSITIVITY",
      //   description: ["-42dB ± 3dB / 1kHz "],
      // },
      // {
      //   name: "FREQUENCY RANGE",
      //   description: ["100Hz - 8kHz"],
      // },
      // {
      //   name: "MAXIMUM OUTPUT",
      //   description: ["30mW"],
      // },
      // {
      //   name: "IMPEDANCE",
      //   description: ["32Ω ± 15%"],
      // },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      // {
      //   name: "CONTENTS",
      //   description: ["WH1 Headset, Windscreen, Product Manual"],
      // },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      // {
      //   name: "KC CERTIFICATION ",
      //   description: [
      //     <React.Fragment>
      //       <span>
      //         <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
      //         R-R-HMM-WH-1
      //       </span>
      //     </React.Fragment>,
      //   ],
      // },
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
    productId: "W301",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "W301"),
    name: "W301",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/headset/images/W301-4.png",
      "/images/micronics-assets/product-images/headset/images/W301-1.png",
      "/images/micronics-assets/product-images/headset/images/W301-2.png",
      "/images/micronics-assets/product-images/headset/images/W301-3.png",
      "/images/micronics-assets/product-images/headset/images/W301-5.png",
      "/images/micronics-assets/product-images/headset/images/W301-6.png",
      "/images/micronics-assets/product-images/headset/images/W301-7.png",
      "/images/micronics-assets/product-images/headset/images/W301-8.png",
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
        name: "MODEL NAME ",
        description: ["W301"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      // {
      //   name: "WEIGHT",
      //   description: ["295g (Cable Excluded)"],
      // },
      // {
      //   name: "WIRED/WIRELESS",
      //   description: ["Wired"],
      // },
      // {
      //   name: "INPUT TERMINAL",
      //   description: ["USB A / Gold Plated"],
      // },
      {
        name: "MICROPHONE ",
        description: ["Hardware Microphone Noise Cancellation"],
      },
      {
        name: "DRIVER UNIT ",
        description: ["40mm Driver Unit"],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: " ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      // {
      //   name: "CABLE LENGTH",
      //   description: ["2200 ± 50mm"],
      // },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1ch"],
      },
      {
        name: "LED",
        description: ["White"],
      },
      // {
      //   name: "COMPATIBILITY",
      //   description: [
      //     "Windows XP®, Windows 7®, Windows 8®, Windows10®, Windows 11®, PlayStation4®",
      //   ],
      // },
      // {
      //   name: "PICK UP PATTERN",
      //   description: ["Omni-directional"],
      // },
      // {
      //   name: "SENSITIVITY",
      //   description: ["-42dB ± 3dB / 1kHz "],
      // },
      // {
      //   name: "FREQUENCY RANGE",
      //   description: ["100Hz - 8kHz"],
      // },
      // {
      //   name: "MAXIMUM OUTPUT",
      //   description: ["30mW"],
      // },
      // {
      //   name: "IMPEDANCE",
      //   description: ["32Ω ± 15%"],
      // },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      // {
      //   name: "CONTENTS",
      //   description: ["WH1 Headset, Windscreen, Product Manual"],
      // },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      // {
      //   name: "KC CERTIFICATION ",
      //   description: [
      //     <React.Fragment>
      //       <span>
      //         <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
      //         R-R-HMM-WH-1
      //       </span>
      //     </React.Fragment>,
      //   ],
      // },
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
    productId: "MHS301",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MHS301"),
    name: "Manic HS-301",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/Headset_HS-301_DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/HS-301_05.png",
      "/images/micronics-assets/product-images/headset/images/HS-301_01.png",
      "/images/micronics-assets/product-images/headset/images/HS-301_02.png",
      "/images/micronics-assets/product-images/headset/images/HS-301_03.png",
      "/images/micronics-assets/product-images/headset/images/HS-301_04.png",
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
        name: "MODEL NAME ",
        description: ["Manic HS-301"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      {
        name: "WEIGHT",
        description: ["348g"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Silver Plated"],
      },
      {
        name: "MICROPHONE ",
        description: ["Hardware MIC Noise Canceling "],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: "ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["2.2m"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1 Ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows10®"],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["120 ± 3dB"],
      },
      {
        name: "MIC SENSITIVITY",
        description: ["(-)38 ± 3dB"],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["20-20,000HZ"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["100mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["16Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["HS-301 Headset and Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-HS-301
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
    productId: "MHS370",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MHS370"),
    name: "Manic HS-370",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/Headset_HS-370_DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/HS-370_02.png",
      "/images/micronics-assets/product-images/headset/images/HS-370_01.png",
      "/images/micronics-assets/product-images/headset/images/HS-370_03.png",
      "/images/micronics-assets/product-images/headset/images/HS-370_04.png",
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
        name: "MODEL NAME ",
        description: ["Manic HS-370"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      {
        name: "WEIGHT",
        description: ["379g"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Silver Plated"],
      },
      {
        name: "MICROPHONE ",
        description: ["Hardware MIC Noise Canceling "],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: "ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["2.4m"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1 Ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows10®"],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["120 ± 3dB"],
      },
      {
        name: "MIC SENSITIVITY",
        description: ["(-)38 ± 3dB"],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["20-20,000HZ"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["100mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["16Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["HS-370 Headset and Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-HS-370
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
    productId: "MHS420",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MHS420"),
    name: "Manic HS-420",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/Headset_HS-420_DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/HS-420_01_Black.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_02_Black.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_03_Black.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_01_White.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_02_White.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_03_White.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_01_Pink.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_02_Pink.png",
      "/images/micronics-assets/product-images/headset/images/HS-420_03_Pink.png",
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
        description: ["Manic HS-420"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      {
        name: "WEIGHT",
        description: ["401g"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Silver Plated"],
      },
      {
        name: "MICROPHONE ",
        description: ["Hardware MIC Noise Canceling "],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: "ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["2.4m"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1 Ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows10®"],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["98 ± 3dB"],
      },
      {
        name: "MIC SENSITIVITY",
        description: ["(-)38 ± 3dB"],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["20-20,000HZ"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["50mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["120 ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["HS-420 Headset and Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-HS-420
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
    productId: "MHS530",
    categoryId: "CATEGORY_HEADSET",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_HEADSET"
    ).replace(":productId", "MHS530"),
    name: "Manic HS-530",
    brochure:
      "/images/micronics-assets/product-images/headset/brochure/Headset_HS-530_DB.png",
    img: [
      "/images/micronics-assets/product-images/headset/images/HS-530_03.png",
      "/images/micronics-assets/product-images/headset/images/HS-530_01.png",
      "/images/micronics-assets/product-images/headset/images/HS-530_02.png",
      "/images/micronics-assets/product-images/headset/images/HS-530_05.png",
      "/images/micronics-assets/product-images/headset/images/HS-530_06_Remote.png",
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
        name: "MODEL NAME ",
        description: ["Manic HS-530"],
      },
      // {
      //   name: "SIZE",
      //   description: ["206mm(L) x 102mm(W) x 218mm(H)"],
      // },
      {
        name: "WEIGHT",
        description: ["438g"],
      },
      {
        name: "WIRED/WIRELESS",
        description: ["Wired"],
      },
      {
        name: "INPUT TERMINAL",
        description: ["USB A / Silver Plated"],
      },
      {
        name: "MICROPHONE ",
        description: ["Hardware MIC Noise Canceling "],
      },
      // {
      //   name: "MICROPHONE DIMENSION (MIC) ",
      //   description: ["⌀4 x 1.5mm"],
      // },
      // {
      //   name: "ENC MICROPHONE DIMENSION",
      //   description: ["⌀6 x 5mm"],
      // },
      {
        name: "CABLE LENGTH",
        description: ["2.4m"],
      },
      {
        name: "SURROUND SOUND ",
        description: ["Virtual 7.1 Ch"],
      },
      {
        name: "LED",
        description: ["RGB"],
      },
      {
        name: "COMPATIBILITY",
        description: ["Windows 7®, Windows 8®, Windows10®"],
      },
      {
        name: "PICK UP PATTERN",
        description: ["Omni-directional"],
      },
      {
        name: "SENSITIVITY",
        description: ["120 ± 3dB"],
      },
      {
        name: "MIC SENSITIVITY",
        description: ["(-)38 ± 3dB"],
      },
      {
        name: "FREQUENCY RANGE",
        description: ["20-20,000HZ"],
      },
      {
        name: "MAXIMUM OUTPUT",
        description: ["100mW"],
      },
      {
        name: "IMPEDANCE",
        description: ["16Ω ± 15%"],
      },
      {
        name: "PRODUCT TYPE ",
        description: ["Gaming Headset"],
      },
      {
        name: "CONTENTS",
        description: ["HS-530 Headset and Product Manual"],
      },
      {
        name: "PRODUCTION DATE",
        description: ["Label on the Back"],
      },
      {
        name: "WARRANTY",
        description: ["1 year warranty under limited conditions apply"],
      },
      {
        name: "KC CERTIFICATION ",
        description: [
          <React.Fragment>
            <span>
              <img src="/images/kc-logo.png" alt="kc-logo" /> &nbsp;
              R-R-HMM-HS-530
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
  //PC CASE
  {
    productId: "GX3-CHANG",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GX3-CHANG"),
    name: "GX3 Chang",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/DB_GX3_ENGLISH_UPDATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/gx3-chang_2.png",
      "/images/micronics-assets/product-images/pc_case/images/gx3-chang_1.png",
      "/images/micronics-assets/product-images/pc_case/images/gx3-chang_3.png",
      "/images/micronics-assets/product-images/pc_case/images/gx3-chang_4.png",
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
        description: ["GX3 Chang"],
      },
      {
        name: "DIMENSION",
        description: ["518mm(H) x 250mm(W) x 585mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"]
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power,LED Mode,Audio,USB 3.0 x2,USB 3.1 Type C"],
      },
      {
        name: "COLOR",
        description: ["White"],
      },
      {
        name: "GPU LENGTH",
        description: ["410mm / 460mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["8+3 (Vertical)"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD/SSD", "Inside", "Side"],
        subdescription: ["3.5in / 2.5in", "10(HDD/SSD)", "3(SSD) / 2(HDD)"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["190mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm White LED Fan x3, 140mm Fan x3 (Optional)",
          "120mm White LED Fan",
          "120mm Fan x4 (Optional), 140mm Fan x3 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120/240/280/360/420mm",
          "120mm",
          "120/240/280/360/420mm",
        ],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "GM3-MOON",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GM3-MOON"),
    name: "GM3 Moon",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/DB_GM3_MOON_UPDATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/gm3-moon_2.png",
      "/images/micronics-assets/product-images/pc_case/images/gm3-moon_1.png",
      "/images/micronics-assets/product-images/pc_case/images/gm3-moon_3.png",
      "/images/micronics-assets/product-images/pc_case/images/gm3-moon_4.png",
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
        description: ["GM3 Moon"],
      },
      {
        name: "DIMENSION",
        description: ["485mm(H) x 225mm(W) x 392mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"]
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, Restart, Audio, USB 2.0 x2, USB 3.0, LED Mode"],
      },
      {
        name: "COLOR",
        description: ["White"],
      },
      {
        name: "GPU LENGTH",
        description: ["460mm (Max) *290mm when water cooler is installed"],
      },
      {
        name: "PCI SLOTS",
        description: ["7+2 (Vertical)"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD/SSD", "Bottom", "Side"],
        subdescription: ["3.5in / 2.5in", "2(HDD/SSD)", "2(SSD)"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["175mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: ["140mm LED Fan x3", "140mm LED Fan", "120mm Fan x2"],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: ["120/240/360mm", "120mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "GX1-PUNCH",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GX1-PUNCH"),
    name: "GX1 Punch",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/GXPUNCH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/gx-3.png",
      "/images/micronics-assets/product-images/pc_case/images/gx-2.png",
      "/images/micronics-assets/product-images/pc_case/images/gx-1.png",
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
        description: ["GX1 Punch"],
      },
      {
        name: "DIMENSION",
        description: ["485mm(H) x 216mm(W) x 450mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["8kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 2.0, USB 3.0, USB 3.1, Audio, Mic, Restart, LED Mode",
        ],
      },
      {
        name: "COLOR",
        description: ["White/Black"],
      },
      {
        name: "GPU LENGTH",
        description: ["375mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["SSD", "HDD/SSD"],
        subdescription: ["2", "2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["170mm"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Bottom"],
        subdescription: [
          "120mm Fan x2, 120/140mm Fan x3 (Optional)",
          "120mm aRGB Fan",
          "120mm aRGB Fan x3, 140mm Fan x2 (Optional)",
          "120mm Fan (Optional; when drive bay is removed)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Top", "Front"],
        subdescription: ["120/240/280/360mm", "120/240/280/360mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Hinged Tempered Glass", "Metal"],
      },
    ],
  },
  {
    productId: "EL1-RAPANG",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "EL1-RAPANG"),
    name: "EL1 Rapang",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/rapang-db.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/em1-4.png",
      "/images/micronics-assets/product-images/pc_case/images/em1-1.png",
      "/images/micronics-assets/product-images/pc_case/images/em1-2.png",
      "/images/micronics-assets/product-images/pc_case/images/em1-3.png",
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
        description: ["EL1 Rapang"],
      },
      {
        name: "DIMENSION",
        description: ["385mm(H) x 170mm(W) x 370mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["2.7kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["USB 2.0, USB 3.0, Audio, Mic"],
      },
      {
        name: "COLOR",
        description: ["White"],
      },
      {
        name: "GPU LENGTH",
        description: ["300mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["4"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["ODD", "HDD", "SSD"],
        subdescription: ["5.25in", "3.5in x2", "2.5in x3"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["150mm"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Side"],
        subdescription: [
          "120mm Fan x2 (Optional)",
          "80mm Fan",
          "120mm Fan (Optional)",
        ],
      },
    ],
  },
  {
    productId: "EM1-WOOFER-B",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "EM1-WOOFER-B"),
    name: "EM1 Woofer",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/EM1-Woofer-Black_updated.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/wb-2.png",
      "/images/micronics-assets/product-images/pc_case/images/wb-1.png",
      "/images/micronics-assets/product-images/pc_case/images/wb-3.png",
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
        description: ["EM1 Woofer"],
      },
      {
        name: "DIMENSION",
        description: ["424mm(H) x 210mm(W) x 373mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["4.2kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 2.0 x2, USB 3.0, Audio, Mic, Restart, LED Mode",
        ],
      },
      {
        name: "COLOR",
        description: ["Black / White"],
      },
      {
        name: "GPU LENGTH",
        description: ["320mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["4"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD", "HDD/SSD"],
        subdescription: ["3.5in", "2.5in x2", "1 Combined"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Bottom"],
        subdescription: [
          "160mm white LED Fan, 120mm Fan (Optional)",
          "120mm White LED Fan",
          "120mm Fan x2 (Optional)",
          "120mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Top", "Front", "Rear"],
        subdescription: ["240mm", "240mm", "120mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "EM2-STEREO-B",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "EM2-STEREO-B"),
    name: "EM2 Stereo",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/DB_EM2-STEREO_Black_UPDATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black6.png",
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black1.png",
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black2.png",
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black3.png",
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black4.png",
      "/images/micronics-assets/product-images/pc_case/images/em2-stereo-black5.png",
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
        description: ["EM2 Stereo"],
      },
      {
        name: "DIMENSION",
        description: ["210mm(H) x 490mm(W) x 394mm(D)"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 3.0, USB 2.0 x2, Audio, Mic, Restart, Fan Speed, LED Mode",
        ],
      },
      {
        name: "COLOR",
        description: ["Black / White"],
      },
      {
        name: "GPU LENGTH",
        description: ["340mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["SSD", "HDD/SSD"],
        subdescription: ["2.5in x5", "3.5in x3"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "140mm LED Fan x2",
          "120mm LED Fan",
          "120mm Fan x2 (Optional), 140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["240/280/360mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Metal"],
      },
    ],
  },
  {
    productId: "GM1-TRANSFORM-B",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GM1-TRANSFORM-B"),
    name: "GM1 Transform",
    brochure: "",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/gm1b-2.png",
      "/images/micronics-assets/product-images/pc_case/images/gm1b-1.png",
      "/images/micronics-assets/product-images/pc_case/images/gm1b.png",
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
        description: ["GM1 Transform"],
      },
      {
        name: "DIMENSION",
        description: ["485mm(H) x 216mm(W) x 450mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["8kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, USB 2.0 x2, USB 3.0, Audio, Mic, Restart"],
      },
      {
        name: "COLOR",
        description: ["Black / White"],
      },
      {
        name: "GPU LENGTH",
        description: ["355mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["SSD", "HDD/SSD"],
        subdescription: ["2.5in x2", "2 Combined"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm White Ring Fan x3",
          "120mm White Ring Fan",
          "120/140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["240/360mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "OM1-CIRCLE",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "OM1-CIRCLE"),
    name: "OM1 Circle",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/OM1-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/om1-1.png",
      "/images/micronics-assets/product-images/pc_case/images/om1-2.png",
      "/images/micronics-assets/product-images/pc_case/images/om1-3.png",
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
        description: ["OM1 Circle"],
      },
      {
        name: "DIMENSION",
        description: ["465mm(H) x 210mm(W) x 368mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["4.85kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, USB 2.0 x2, USB 3.0, Audio, Mic, Restart"],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "GPU LENGTH",
        description: ["320mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD", "HDD/SSD"],
        subdescription: ["3.5in", "2.5in x2", "1 Combined"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Bottom"],
        subdescription: [
          "120mm White Ring Fan, 120mm Black Fan, 120mm Fan (Optional)",
          "120mm White Ring Fan",
          "120mm Fan x2 (Optional)",
          "120mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["120/240mm", "120/240mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "GH1-MESH-W",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GH1-MESH-W"),
    name: "GH1 Mesh White",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GH1 Mesh White - 5.png",
      "/images/micronics-assets/product-images/pc_case/images/GH1 Mesh White - 1.png",
      "/images/micronics-assets/product-images/pc_case/images/GH1 Mesh White - 2.png",
      "/images/micronics-assets/product-images/pc_case/images/GH1 Mesh White - 3.png",
      "/images/micronics-assets/product-images/pc_case/images/GH1 Mesh White - 4.png",
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
        description: ["GH1 Mesh White"],
      },
      {
        name: "DIMENSION",
        description: ["490mm(H) x 216mm(W) x 426mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["7.9kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 2.0 x2, USB 3.0, Audio, Mic, Restart, LED Mode",
        ],
      },
      {
        name: "COLOR",
        description: ["White"],
      },
      {
        name: "GPU LENGTH",
        description: ["350mm (Max)"],
      },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD", "HDD/SSD"],
        subdescription: ["3.5in", "2.5in x2", "2 Combined"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm White Ring Fan x3, 140mm Fan x3 (Optional)",
          "120mm White Ring Fan",
          "120/140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["240/280/360mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Steel"],
      },
    ],
  },
  {
    productId: "SHADOW-2",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "SHADOW-2"),
    name: "Shadow 2",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/Shadow 2-2.png",
      "/images/micronics-assets/product-images/pc_case/images/Shadow 2-1.png",
      "/images/micronics-assets/product-images/pc_case/images/Shadow 2-3.png",
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
        description: ["Shadow 2"],
      },
      {
        name: "DIMENSION",
        description: ["580mm(H) x 250mm(W) x 642mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["10.4kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, USB 2.0, USB 3.0, HD Audio, Mic, Reset"],
      },
      {
        name: "COLOR",
        description: ["Black & White"],
      },
      {
        name: "VGA LENGTH",
        description: ["475mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in (Max) x3", "2.5in (Max) x6"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["180mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Inside"],
        subdescription: [
          "120mm Fan x2 (Optional)",
          "120mm Fan (Optional)",
          "120mm Fan x3 Optional)",
          "120mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top", "Inside"],
        subdescription: [
          "240mm (Optional)",
          "360mm (Optional)",
          "240mm (Optional)",
        ],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GH2-METAL",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GH2-METAL"),
    name: "GH2 Metal",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GH2 Metal-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GH2 Metal-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GH2 Metal-3.png",
      "/images/micronics-assets/product-images/pc_case/images/GH2 Metal-4.png",
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
        description: ["GH2 Metal"],
      },
      {
        name: "DIMENSION",
        description: ["425mm(H) x 210mm(W) x 397mm(D)"],
      },
      {
        name: "WEIGHT",
        description: ["6.15kg"],
      },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, USB 2.0 x2, USB 3.0, HD Audio, Mic, Reset"],
      },
      {
        name: "COLOR",
        description: ["White"],
      },
      {
        name: "VGA LENGTH",
        description: ["335mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["4"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD/SSD", "SSD"],
        subdescription: ["3.5in & 2.5in x2", "2.5in x 2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["165mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm RGB Fan x3",
          "120mm RGB Fan",
          "120mm Fan x2 or 140mm x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["240mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GH3-TROIKA",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GH3-TROIKA"),
    name: "GH3 Troika",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GH3 Troika-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GH3 Troika-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GH3 Troika-3.png",
      "/images/micronics-assets/product-images/pc_case/images/GH3 Troika-4.png",
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
        description: ["GH3 Troika"],
      },
      {
        name: "DIMENSION",
        description: ["507mm(H) x 219mm(W) x 426mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["EATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, Reset, USB 3.0, USB 2.0, HD Audio, Mic"],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "VGA LENGTH",
        description: ["370mm (Max) (319mm with Front Sandwich Configuration)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["ODD", "HDD/SSD", "SSD"],
        subdescription: ["5.25in", "3.5in & 2.5in x2", "2.5in x2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["165mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm Blue LED Fan x2 (140mm Fan x2 Optional)",
          "120mm Blue LED Fan",
          "120mm Fan x2 or 140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["120/240/280/360mm", "120/240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GH4-LETO",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GH4-LETO"),
    name: "GH4 Leto",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GH4 Leto-3.png",
      "/images/micronics-assets/product-images/pc_case/images/GH4 Leto-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GH4 Leto-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GH4 Leto-4.png",
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
        description: ["GH4 Leto"],
      },
      {
        name: "DIMENSION",
        description: ["495mm(H) x 216mm(W) x 400mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, Reset, USB 3.0, USB 2.0 x 2, HD Audio, Mic, LED on & off",
        ],
      },
      {
        name: "COLOR",
        description: ["Space Gray"],
      },
      {
        name: "VGA LENGTH",
        description: ["350mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in, 3.5in & 2.5in", "2.5in x2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["165mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm Fan x3 (140mm Fan x3 Optional)",
          "120mm LED Fan",
          "120mm Fan x2 or 140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top", "Rear"],
        subdescription: ["120/240/360mm", "120/240mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GL1-MORTAR",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GL1-MORTAR"),
    name: "GL1 Mortar",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GL1 Mortar-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GL1 Mortar-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GL1 Mortar-3.png",
      "/images/micronics-assets/product-images/pc_case/images/GL1 Mortar-4.png",
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
        description: ["GL1 Mortar"],
      },
      {
        name: "DIMENSION",
        description: ["449mm(H) x 200mm(W) x 390mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: ["Power, USB 3.0, USB 2.0 x2, Audio In &Out, Reset"],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "VGA LENGTH",
        description: ["345mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in, 3.5in or 2.5in", "2.5in x2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm RGB LED Fan x3",
          "120mm RGB LED Fan",
          "120mm Black Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["120/240/360mm", "120mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GH4-LETOMESH",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GH4-LETOMESH"),
    name: "GH4 Letomesh",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GH4 LetoMesh-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GH4 LetoMesh-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GH4 LetoMesh-3.png",
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
        description: ["GH4 LetoMesh"],
      },
      {
        name: "DIMENSION",
        description: ["495mm(H) x 216mm(W) x 400mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX / ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, Reset, USB 3.0, USB 2.0 x 2, HD Audio, Mic, LED on & off",
        ],
      },
      {
        name: "COLOR",
        description: ["Space Gray"],
      },
      {
        name: "VGA LENGTH",
        description: ["350mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7 (reusable PCI cover)"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in, 3.5in & 2.5in", "2.5in x2"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["165mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm Fan x3 (140mm Fan x3 Optional)",
          "120mm LED Fan",
          "120mm Fan x2 or 140mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["120/240/360mm", "120/ 240mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "CX-480",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "CX-480"),
    name: "Coolmax CX-480",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/GH-1-MESH-DB.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/CX-480-1.png",
      "/images/micronics-assets/product-images/pc_case/images/CX-480-3.png",
      "/images/micronics-assets/product-images/pc_case/images/CX-480-2.png",
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
        description: ["Coolmax CX480"],
      },
      {
        name: "DIMENSION",
        description: ["482mm(H) x 205mm(W) x 390mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 3.0, USB 2.0 x2, HD Audio, Mic, LED On & Off",
        ],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "VGA LENGTH",
        description: ["340mm (Max), 280mm with water cooling"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in, 3.5in & 2.5in", "2.5in x3"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Power Duct"],
        subdescription: [
          "120mm Rainbow Fan x3 (140mm Fan x2 Optional)",
          "120mm Rainbow Fan",
          "120mm Rainbow Fan x3 (140mm Fan x2 Optional)",
          "Duct 120mm Fan x2 (Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: [
          "240/280mm/360(Optional)",
          "120mm/240mm/280mm(Optional)",
        ],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GX2-NEURON-GLASS",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GX2-NEURON-GLASS"),
    name: "GX2-Neuron Glass",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/(UPDATED) GX2 NEURON GLASS DB_TRANSLATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-GLASS2.png",
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-GLASS1.png",
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-GLASS3.png",
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
        description: ["GX2-Neuron Glass"],
      },
      {
        name: "DIMENSION",
        description: ["515mm(H) x 239mm(W) x 475mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX(290x305) / ATX / M-ATX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "USB Type C, USB 3.0 x2, USB 2.0 x2 HD Audio, Mic, Power, Reset, LED mode",
        ],
      },
      {
        name: "COLOR",
        description: ["Special Gray"],
      },
      {
        name: "VGA LENGTH",
        description: ["420mm (Max) / 275mm with Side Radiator Installed"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["8"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in x6", "2.5in x6"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Left", "Right"],
        subdescription: [
          "120mm Fan",
          "120mm aRGB Fan",
          "120mm aRGB Fan x2, 140mm Fan x2 (Optional)",
          "120mm Fan x2",
          "120mm Fan x2",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Right"],
        subdescription: [
          "120/240/280/360mm (Optional)",
          "120mm (Optional)",
          "120/240mm (Optional)",
        ],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GX2-NEURON-MESH",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GX2-NEURON-MESH"),
    name: "GX2-Neuron Mesh",
    brochure:
      "/images/micronics-assets/product-images/pc_case/brochure/(UPDATED) GX2 NEURON MESH DB_TRANSLATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-MESH3.png",
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-MESH2.png",
      "/images/micronics-assets/product-images/pc_case/images/GX2-NEURON-MESH1.png",
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
        description: ["GX2-Neuron Mesh"],
      },
      {
        name: "DIMENSION",
        description: ["515mm(H) x 239mm(W) x 475mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["E-ATX(290x305) / ATX / M-ATX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "USB Type C, USB 3.0 x2, USB 2.0 x2 HD Audio, Mic, Power, Reset, LED mode",
        ],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "VGA LENGTH",
        description: ["395mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["8"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in x10", "2.5in x8"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["160mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top", "Left", "Right"],
        subdescription: [
          "120mm aRBG Fan x3, 140mm Fan x3 (Optional)",
          "120mm aRGB Fan",
          "120mm Fan x3 (Optional), 140mm Fan x2 (Optional)",
          "120mm Fan x2",
          "120mm Fan x2 (Optional; when drive bay is removed)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top", "Rear", "Right"],
        subdescription: [
          "120/240/280/360mm (Optional)",
          "120/240/280/360mm (Optional)",
          "120mm (Optional)",
          "120/240mm (Optional; when drive bay is removed)",
        ],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left"],
        subdescription: ["Tempered Glass"],
      },
    ],
  },
  {
    productId: "GM2-HELIOS",
    categoryId: "CATEGORY_PCCASE",
    path: ROUTE_PATH.PRODUCT_LANDING.replace(
      ":categoryId",
      "CATEGORY_PCCASE"
    ).replace(":productId", "GM2-HELIOS"),
    name: "GM2 Helios",
    // brochure:
    //   "/images/micronics-assets/product-images/pc_case/brochure/(UPDATED) GX2 NEURON MESH DB_TRANSLATED.jpg",
    img: [
      "/images/micronics-assets/product-images/pc_case/images/GM2 Helios-1.png",
      "/images/micronics-assets/product-images/pc_case/images/GM2 Helios-2.png",
      "/images/micronics-assets/product-images/pc_case/images/GM2 Helios-4.png",
      "/images/micronics-assets/product-images/pc_case/images/GM2 Helios-3.png",
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
        description: ["GM2 Helios"],
      },
      {
        name: "DIMENSION",
        description: ["483mm(H) x 225mm(W) x 386mm(D)"],
      },
      // {
      //   name: "WEIGHT",
      //   description: ["7.9kg"],
      // },
      {
        name: "PSU SIZE",
        description: ["Standard ATX"],
      },
      {
        name: "MOTHERBOARD",
        description: ["ATX / M-ATX / ITX"],
      },
      {
        name: "I/O PANEL",
        description: [
          "Power, USB 3.0, USB 2.0 x2, HD Audio, Mic, LED on & off, Reset",
        ],
      },
      {
        name: "COLOR",
        description: ["Black"],
      },
      {
        name: "VGA LENGTH",
        description: ["340mm (Max)"],
      },
      // {
      //   name: "GPU LENGTH",
      //   description: ["350mm (Max)"],
      // },
      {
        name: "PCI SLOTS",
        description: ["7"],
      },
      {
        name: "DRIVE BAY",
        description: [""],
        subname: ["HDD", "SSD"],
        subdescription: ["3.5in x2", "2.5in x3"],
      },
      {
        name: "CPU COOLER MOUNTING HEIGHT",
        description: ["175mm (Max)"],
      },
      {
        name: "COOLER SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Rear", "Top"],
        subdescription: [
          "120mm Rainbow LED Fan x3 (140mm Fan x3 Optional)",
          "120mm Rainbow LED Fan",
          "120mm Black Fan x2 (140mm Fan x2 Optional)",
        ],
      },
      {
        name: "WATER COOLER COMPATIBLE SPECIFICATIONS",
        description: [""],
        subname: ["Front", "Top"],
        subdescription: ["240/280/360mm", "240/280mm"],
      },
      {
        name: "SIDE PANEL",
        description: [""],
        subname: ["Left", "Right"],
        subdescription: ["Tempered Glass", "Metal"],
      },
    ],
  },
];

export default products;
