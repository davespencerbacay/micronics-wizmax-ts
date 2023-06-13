import React, { useEffect, useRef, useState } from "react";
import "./DownloadsProcedure.scss";
import products from "data/products";
import DownloadIcon from "library/Icons/DownloadIcon";

interface IDownloadsProcedure {
  onClick: () => void;
}

const DownloadsProcedure: React.FC<IDownloadsProcedure> = (props) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);
  const [searchProducts, setSearchProducts] = useState<any>([]);
  const [keyWord, setKeyWord] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const selectedProductRef = useRef<HTMLDivElement>(null);
  const clearResultRef = useRef<HTMLDivElement>(null);
  const [productBrochure, setProductBrochure] = useState("");
  const [productDriver, setProductDriver] = useState("");
  const [productManual, setProductManual] = useState("");
  const confirmProductRef = useRef<HTMLDivElement>(null);
  const [productName, setProductName] = useState("");

  const onKeyUp = (keyword: any) => {
    setKeyWord(keyword.target.value);
    setSearchProducts(products);
    console.log(keyWord);
  };

  const productSelectHandler = (product: any) => {
    console.log(product);
    setSelectedProduct(product.img[0]);
    setProductName(product.name);
    setKeyWord("");
    if (selectedProductRef.current) {
      selectedProductRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const productNameHandler = (product: any) => {
    console.log(product);
    setProductBrochure(product.brochure);
    setProductDriver(product.file);
    setProductManual(product.manual);
  };

  //STEP 2
  const clearResultContainer = () => {
    setSelectedProduct("");
    setProductName("");
    setProductBrochure("");
    setProductDriver("");
    setProductManual("");
    if (clearResultRef.current) {
      clearResultRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const productConfirmHandler = () => {
    if (confirmProductRef.current) {
      confirmProductRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  //STEP 3
  const downloadBrochureHandler = () => {
    window.open(productBrochure, "_blank")!.focus();
  };
  const downloadDriverHandler = () => {
    window.open(productDriver, "_blank")!.focus();
  };
  const downloadManualHandler = () => {
    window.open(productManual, "_blank")!.focus();
  };
  const backToSearch = () => {
    setSelectedProduct("");
    setProductName("");
    setProductBrochure("");
    setProductDriver("");
    setProductManual("");
    if (clearResultRef.current) {
      clearResultRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="dlp-container">
      <div className="step1" ref={clearResultRef}>
        <h2>1. Identify the Product</h2>
        <span onClick={props.onClick}>or you may explore by categories</span>
        <input
          type="text"
          value={keyWord}
          onChange={onKeyUp}
          placeholder="Search for Products . . ."
        />
        {keyWord && (
          <div className="search-result-container">
            {searchProducts
              .filter((product: any) => {
                const searchByName = product?.name
                  .toString()
                  .toLowerCase()
                  .includes(keyWord.toString().toLowerCase().trim());

                const searchByFilter = product?.filters?.some((key: any) =>
                  key.includes(keyWord.trim().toLowerCase())
                );

                let filteredData;
                if (searchByName) {
                  filteredData = searchByName;
                } else {
                  filteredData = searchByFilter;
                }

                return filteredData;
              })
              .map((product: any, index: any) => {
                return (
                  <div
                    className="filter-container"
                    key={index}
                    onClick={() => {
                      productSelectHandler(product);
                      productNameHandler(product);
                    }}
                  >
                    <div>
                      <h2>{product.name}</h2>
                    </div>
                    <div>
                      <img src={product.img[0]} alt={product.img[0]} />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="step2" ref={selectedProductRef}>
        <h2>2. Searched Product</h2>
        <div className="product-img-result-container">
          <img src={selectedProduct} alt={selectedProduct} />
        </div>
        <div>
          <h3>{productName}</h3>
        </div>
        <div className="result-button-container">
          <button className="back-to-search" onClick={clearResultContainer}>
            &lt;
          </button>
          <button onClick={productConfirmHandler}>Proceed</button>
        </div>
      </div>
      <div className="step3" ref={confirmProductRef}>
        <h2>3. Download!</h2>
        <div className="download-buttons">
          {productBrochure !== "" ? (
            <button onClick={downloadBrochureHandler}>
              Brochure <DownloadIcon />
            </button>
          ) : (
            <p className="no-brochure-available">No Brochure Available</p>
            
          )}
          {productDriver !== "" ? (
            <button onClick={downloadDriverHandler}>
              Driver <DownloadIcon />
            </button>
          ) : (
            "No Driver Available"
          )}
          {productManual !== "" ? (
            <button onClick={downloadManualHandler}>
              Manual <DownloadIcon />
            </button>
          ) : (
            "No Manual Available"
          )}
        </div>
        <p onClick={backToSearch}>Back to Search</p>
      </div>
    </div>
  );
};

export default DownloadsProcedure;
