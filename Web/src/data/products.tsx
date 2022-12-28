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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086124/product-brochures/mouse/zm-1_db_english_yho6c5.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085978/product-images/mouse/zm1-1_y1rcit.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085973/product-images/mouse/zm1-2_vjwbdf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085976/product-images/mouse/zm1-3_vfb5uc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085979/product-images/mouse/zm1-4_myflwy.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086115/product-brochures/mouse/ZM2_DB_Translation_Revision_tbsqns.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085980/product-images/mouse/ZM2-1_emfkkk.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085973/product-images/mouse/ZM2-2_ypbfct.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085979/product-images/mouse/ZM2-3_daziuk.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086122/product-brochures/mouse/Mouse_MM1_DB_ywgchq.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085978/product-images/mouse/mm1-1_mqwr2z.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085980/product-images/mouse/mm1-2_pjwfjv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085981/product-images/mouse/mm1-3_ezkuje.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085976/product-images/mouse/mm1-4_psawbp.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085981/product-images/mouse/mm1-5_cch16g.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086117/product-brochures/mouse/WM1-DB_k6lydo.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085985/product-images/mouse/wm1-1_filoyf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085985/product-images/mouse/wm1-2_qpmstr.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085983/product-images/mouse/wm1-3_tworek.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085982/product-images/mouse/wm1-4_xflhak.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085981/product-images/mouse/wm1-5_zwfjah.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085978/product-images/mouse/wm1-6_hf2c1e.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086115/product-brochures/mouse/WM2_DB_Translation_Revision_vbymny.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085976/product-images/mouse/WM2-4_mgrnbe.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085974/product-images/mouse/WM2-1_gvuuu4.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085974/product-images/mouse/WM2-2_piyliy.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085972/product-images/mouse/WM2-3_k0fkdl.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085976/product-images/mouse/WM2-5_p2he9h.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086115/product-brochures/mouse/MANIC-G40-DB_ENGLISH_u90cef.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085971/product-images/mouse/MG40_-3_pi1dmq.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085970/product-images/mouse/MG40_-1_qe33yh.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085970/product-images/mouse/MG40_-2_vdeinx.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085972/product-images/mouse/MG40_-4_sfzhh8.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086122/product-brochures/mouse/MG501_DB_Translation_z5pfzh.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085971/product-images/mouse/MG501-3_trm1hu.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085971/product-images/mouse/MG501-1_nylamn.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085973/product-images/mouse/MG501-2_mi8uez.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085977/product-images/mouse/MG530_-_3_qcpwtm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085984/product-images/mouse/MG530_-_1_jll17u.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085974/product-images/mouse/MG530_-_2_lwk6ez.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085980/product-images/mouse/MG530_-_4_vaefnl.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085975/product-images/mouse/ZG106_3327-1_z2ea4p.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085974/product-images/mouse/ZG106_3327-2_agdosk.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085978/product-images/mouse/ZG106_3327-4_bn0mpm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085980/product-images/mouse/ZG106_3327-5_kynaqu.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085978/product-images/mouse/ZG106_3327-6_oqcvjv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085974/product-images/mouse/ZG106_3327-7_ptgigf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085975/product-images/mouse/ZG106_3327-8_lx9xdg.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085983/product-images/mouse/ZG106_3327-9_aq9vk4.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085979/product-images/mouse/M630W-B-2_aiszl4.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085984/product-images/mouse/M630W-B-1_h7uaww.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085976/product-images/mouse/M630W-B-3_juiig4.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085970/product-images/mouse/M630W-B-4_xd4h2l.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085970/product-images/mouse/M630W-B-5_yfutxe.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085970/product-images/mouse/M630W-B-6_nvvqqv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671085971/product-images/mouse/M630W-B-7_rxsc2t.png",
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
    isNewRelease: "New Release",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086204/product-brochures/keyboard/ZK1_DB_english_g3stxw.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086156/product-images/keyboard/zk1-1_gbquyo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086158/product-images/keyboard/ZK1-2_qtdwzn.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086159/product-images/keyboard/zk1-3_v45bvo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086159/product-images/keyboard/ZK1-4_vioony.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086199/product-brochures/keyboard/ZK2-DB-english_u3jzek.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086159/product-images/keyboard/ZK2-1_tckpbc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086155/product-images/keyboard/ZK2-2_xqfjxo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086163/product-images/keyboard/ZK2-3_ioeyku.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086162/product-images/keyboard/ZK2-4_c80n1i.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086153/product-images/keyboard/ZK2-5_dfjfpr.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086196/product-brochures/keyboard/Keyboard_WK1_DB_updated_zkqmtu.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086149/product-images/keyboard/WK1B_-_4_dohgft.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086155/product-images/keyboard/WK1B_-_2_muswa6.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086160/product-images/keyboard/WK1B_-_3_dxdzid.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086148/product-images/keyboard/WK1B_-_1_knqp2n.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086198/product-brochures/keyboard/Keyboard_WK2_DB_updated_k8oprk.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086156/product-images/keyboard/WK2-1_oxhjgm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086149/product-images/keyboard/WK2-2_j5xk2h.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086151/product-images/keyboard/WK2-3_sbrzgd.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086150/product-images/keyboard/WK2-4_orwsfr.png",
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
      "/images/micronics-assets/product-images/keyboard/brochure/https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086191/product-brochures/keyboard/Keyboard_WK3_DB_updated_xattjd.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086157/product-images/keyboard/WK3_-_1_phxefg.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086163/product-images/keyboard/WK3-2_lsqqfa.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086161/product-images/keyboard/WK3-3_lili7s.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086161/product-images/keyboard/WK3-4_fuuonj.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086208/product-brochures/keyboard/wk4_DB_english_ujvsps.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086157/product-images/keyboard/WK4-1_wv5aey.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086162/product-images/keyboard/WK4-2_dt7vdw.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086159/product-images/keyboard/WK4-3_vr8qv3.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086156/product-images/keyboard/WK4-4_iyqh2e.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086190/product-brochures/keyboard/Keyboard_MK1_DB_tvv4qc.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086148/product-images/keyboard/MK1_-_1_h1nx3y.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086155/product-images/keyboard/MK1_-_2_qnmaam.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086153/product-images/keyboard/MK1_-_3_zodwy7.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086152/product-images/keyboard/MK1_-_4_z7o5wp.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086154/product-images/keyboard/MK1_-_5_k2biy6.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086154/product-images/keyboard/MK1_-_6_uq9pgc.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086194/product-brochures/keyboard/EX580_ENG_s8a2hl.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086151/product-images/keyboard/EX580_-_1_hedycm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/EX580_-_2_kgm53x.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/EX580_-_3_jo6vah.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/EX580_-_4_sy9aye.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086150/product-images/keyboard/EX580_-_5_jfswvo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086150/product-images/keyboard/EX580_-_6_omcboi.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086151/product-images/keyboard/EX580_-_7_jv9lri.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086154/product-images/keyboard/EX580_-_8_qq7ih1.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086198/product-brochures/keyboard/EX580L_DB-ENG_toi7ho.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086147/product-images/keyboard/EX580_L_0005_05_sj0qik.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086154/product-images/keyboard/EX580_L_0006_06_nsbbcj.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086164/product-images/keyboard/EX580_L_0008_08_v52qqn.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086161/product-images/keyboard/EX580_L_0009_09_zacuri.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086160/product-images/keyboard/EX580_L_0010_10_w4pytb.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086167/product-images/keyboard/EX580_L_0011_11_u5iajl.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086149/product-images/keyboard/EX580_L_0012_12_xcm4lp.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086189/product-brochures/keyboard/Keyboard_X100_DB_juxvlv.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086151/product-images/keyboard/X100_-_3_j0letm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086152/product-images/keyboard/X100_-_2_ulmsyo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086152/product-images/keyboard/X100_-_4_j6hknh.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/X100_-_1_ryqy7k.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086204/product-brochures/keyboard/EX89_DB_ENGLISH_i6khvn.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/EX89_TKL_-_5_dh3qar.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086145/product-images/keyboard/EX89_TKL_-_1_va3epb.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086144/product-images/keyboard/EX89_TKL_-_2_d9y47v.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086145/product-images/keyboard/EX89_TKL_-_3_spsv28.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086147/product-images/keyboard/EX89_TKL_-_4_c6bb1h.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086189/product-brochures/keyboard/K350_DB_ENG_g8sasm.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086152/product-images/keyboard/K350_-_3_o8brsb.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086149/product-images/keyboard/K350_-_1_uc8yz3.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086147/product-images/keyboard/K350_-_2_sic6ax.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086211/product-brochures/keyboard/DB_X40_ENGLISH_pkw25q.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086164/product-images/keyboard/X40_-_1_f8dqvc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086156/product-images/keyboard/X40_-_2_khrk31.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086166/product-images/keyboard/X40_-_3_iaipzi.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086162/product-images/keyboard/X40_-_4_jxibli.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086164/product-images/keyboard/X40_-_5_kpoesi.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086146/product-images/keyboard/Manic_X40P-3_mbbzxw.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086148/product-images/keyboard/Manic_X40P-1_wzaefl.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086148/product-images/keyboard/Manic_X40P-2_foagnk.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086154/product-images/keyboard/W85TKL_-_3_qz4ln7.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086159/product-images/keyboard/W85TKL_-_1_sbfkw9.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086165/product-images/keyboard/W85TKL_-_2_d23fix.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086157/product-images/keyboard/W85TKL_-_4_vt1ken.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086160/product-images/keyboard/W85TKL_-_5_rkmncy.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086264/product-brochures/headset/Headset_WH1_DB_fmg2zn.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086238/product-images/headset/wh1-1_oo98c0.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086240/product-images/headset/wh1-2_ejidex.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086230/product-images/headset/wh1-3_k4nciy.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086235/product-images/headset/wh1-4_crycgc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086241/product-images/headset/wh1-5_vybgt6.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086264/product-brochures/headset/MH1-DB_tvc1qc.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086233/product-images/headset/MH-1-1_erld5s.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086231/product-images/headset/MH-1-2_z9alpn.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086234/product-images/headset/MH-1-3_vd4wal.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086234/product-images/headset/MH-1-4_hjhrld.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086259/product-brochures/headset/MH2-DB_t7szyj.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086242/product-images/headset/MH2-1_fu2t0b.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086234/product-images/headset/MH2-2_gm8xna.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086240/product-images/headset/MH2-3_psaxg5.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086241/product-images/headset/MH2-4_ycdpow.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086236/product-images/headset/MH2-5_wetip2.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086232/product-images/headset/MH3_1000x1000px_ukzcwl.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086239/product-images/headset/W301-4_vzgams.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086235/product-images/headset/W301-1_zukbip.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086235/product-images/headset/W301-2_a21xez.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086232/product-images/headset/W301-3_mxpqyj.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086232/product-images/headset/W301-5_evuxd3.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086237/product-images/headset/W301-6_qg0ziq.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086231/product-images/headset/W301-7_wssqmo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086230/product-images/headset/W301-8_czq7xn.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086269/product-brochures/headset/Headset_HS-301_DB_tyh8v0.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086237/product-images/headset/HS-301_05_qvwrg6.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086228/product-images/headset/HS-301_01_m4z1yl.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086230/product-images/headset/HS-301_02_iwhkvw.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086228/product-images/headset/HS-301_03_kfpogv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086230/product-images/headset/HS-301_04_j7s8jw.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086265/product-brochures/headset/Headset_HS-370_DB_isqh2j.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086234/product-images/headset/HS-370_02_clsujt.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086229/product-images/headset/HS-370_01_qr647g.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086228/product-images/headset/HS-370_03_ewd7fy.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086229/product-images/headset/HS-370_04_iy3k0v.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086263/product-brochures/headset/Headset_HS-420_DB_ttq3ek.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086238/product-images/headset/HS-420_01_Black_gmcsjv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086235/product-images/headset/HS-420_02_Black_wymjks.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086230/product-images/headset/HS-420_03_Black_dhy8r7.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086237/product-images/headset/HS-420_01_White_xaiqp3.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086237/product-images/headset/HS-420_02_White_wpbbye.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086231/product-images/headset/HS-420_03_White_k6xsvk.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086239/product-images/headset/HS-420_01_Pink_bkm1ru.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086238/product-images/headset/HS-420_02_Pink_dfxfq4.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086233/product-images/headset/HS-420_03_Pink_udeuoe.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086266/product-brochures/headset/Headset_HS-530_DB_pdnlra.png",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086232/product-images/headset/HS-530_03_l0djbv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086233/product-images/headset/HS-530_01_wdeezt.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086231/product-images/headset/HS-530_02_d2qrlj.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086231/product-images/headset/HS-530_05_slsatq.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086229/product-images/headset/HS-530_06_Remote_glbmcm.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086332/product-brochures/pc_case/DB_GX3_ENGLISH_UPDATED_whqbhn.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086307/product-images/pc_case/gx3-chang_2_ky7iwo.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086308/product-images/pc_case/gx3-chang_1_vftkly.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086305/product-images/pc_case/gx3-chang_3_lzjgfe.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086301/product-images/pc_case/gx3-chang_4_xnnc33.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086355/product-brochures/pc_case/DB_GM3_MOON_UPDATED_oxy2wc.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086304/product-images/pc_case/gm3-moon_2_x7pw4r.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086307/product-images/pc_case/gm3-moon_1_z9yknp.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086303/product-images/pc_case/gm3-moon_3_yowxla.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086305/product-images/pc_case/gm3-moon_4_mvx0ph.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086351/product-brochures/pc_case/GXPUNCH-DB_czuszg.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086309/product-images/pc_case/gx-3_ojilvc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086295/product-images/pc_case/gx-2_zf81vf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086289/product-images/pc_case/gx-1_pjmrzo.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086343/product-brochures/pc_case/rapang-db_zkjycy.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086291/product-images/pc_case/em1-4_fvktu5.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086287/product-images/pc_case/em1-1_hvfgtm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086288/product-images/pc_case/em1-2_tpnfnc.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086288/product-images/pc_case/em1-3_tcduj0.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086337/product-brochures/pc_case/EM1-Woofer-Black_updated_fmbqw5.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086298/product-images/pc_case/wb-2_w009ns.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086306/product-images/pc_case/wb-1_uvk57h.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086291/product-images/pc_case/wb-3_cpwbya.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086346/product-brochures/pc_case/DB_EM2-STEREO_Black_UPDATED_zy2ose.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086314/product-images/pc_case/em2-stereo-black6_gdgnfe.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086312/product-images/pc_case/em2-stereo-black1_o2f1lr.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086315/product-images/pc_case/em2-stereo-black2_kjm9y6.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086307/product-images/pc_case/em2-stereo-black3_uh5squ.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086313/product-images/pc_case/em2-stereo-black4_ihigmn.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086314/product-images/pc_case/em2-stereo-black5_qu4oaf.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086295/product-images/pc_case/gm1b-2_avvsdf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086295/product-images/pc_case/gm1b-1_fc8hcm.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086304/product-images/pc_case/gm1b_ldvnfp.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086341/product-brochures/pc_case/OM1-DB_xk4tsz.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086297/product-images/pc_case/om1-1_wkppqa.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086303/product-images/pc_case/om1-2_ycsrdj.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086288/product-images/pc_case/om1-3_aez8f1.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086342/product-brochures/pc_case/GH-1-MESH-DB_v8oy61.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086293/product-images/pc_case/GH1_Mesh_White_-_5_fnqqxv.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086289/product-images/pc_case/GH1_Mesh_White_-_1_jpi7qj.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086299/product-images/pc_case/GH1_Mesh_White_-_2_zahnun.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086287/product-images/pc_case/GH1_Mesh_White_-_3_o2o9ts.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086292/product-images/pc_case/GH1_Mesh_White_-_4_iwpk9q.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086299/product-images/pc_case/GH1_Mesh_White_-_6_tw3xgj.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086303/product-images/pc_case/Shadow_2-2_wbhlpt.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086289/product-images/pc_case/Shadow_2-1_njr0yr.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086297/product-images/pc_case/Shadow_2-3_xfwm4r.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086297/product-images/pc_case/GH2_Metal-2_ewg04n.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086293/product-images/pc_case/GH2_Metal-1_k424qt.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086294/product-images/pc_case/GH2_Metal-3_rnwe8s.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086290/product-images/pc_case/GH2_Metal-4_y7mrqx.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086291/product-images/pc_case/GH3_Troika-2_vy9f8k.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086307/product-images/pc_case/GH3_Troika-1_datnze.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086290/product-images/pc_case/GH3_Troika-3_z4lsfd.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086290/product-images/pc_case/GH3_Troika-4_b0prlz.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086294/product-images/pc_case/GH4_Leto-3_mcayqh.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086293/product-images/pc_case/GH4_Leto-1_rmgop7.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086291/product-images/pc_case/GH4_Leto-2_fbr5qh.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086292/product-images/pc_case/GH4_Leto-4_zrfv2v.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086298/product-images/pc_case/GL1_Mortar-1_n7sjat.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086295/product-images/pc_case/GL1_Mortar-2_jw7ahi.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086299/product-images/pc_case/GL1_Mortar-3_qeyk2o.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086299/product-images/pc_case/GL1_Mortar-4_q1uk9b.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086288/product-images/pc_case/GH4_LetoMesh-1_rkjk1m.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086292/product-images/pc_case/GH4_LetoMesh-2_tqtlwq.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086295/product-images/pc_case/GH4_LetoMesh-3_bo48f5.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086286/product-images/pc_case/CX-480-1_pywggf.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086288/product-images/pc_case/CX-480-3_h30xoz.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086287/product-images/pc_case/CX-480-2_alh5cu.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086340/product-brochures/pc_case/UPDATED_GX2_NEURON_GLASS_DB_TRANSLATED_rxe8r6.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086297/product-images/pc_case/GX2-NEURON-GLASS2_kemy3i.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086291/product-images/pc_case/GX2-NEURON-GLASS1_qqdsku.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086300/product-images/pc_case/GX2-NEURON-GLASS3_clbxon.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086332/product-brochures/pc_case/UPDATED_GX2_NEURON_MESH_DB_TRANSLATED_pbk7go.jpg",
    img: [
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086296/product-images/pc_case/GX2-NEURON-MESH3_oym7bi.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086294/product-images/pc_case/GX2-NEURON-MESH2_zqegix.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086297/product-images/pc_case/GX2-NEURON-MESH1_gncfbd.png",
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
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086301/product-images/pc_case/GM2_Helios-1_mmzo9q.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086302/product-images/pc_case/GM2_Helios-2_fp6car.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086301/product-images/pc_case/GM2_Helios-4_xldxoy.png",
      "https://res.cloudinary.com/ddwocxwmc/image/upload/v1671086301/product-images/pc_case/GM2_Helios-3_wxwngq.png",
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
