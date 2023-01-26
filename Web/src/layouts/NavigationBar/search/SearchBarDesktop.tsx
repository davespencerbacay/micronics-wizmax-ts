import React, { useEffect, useState } from "react";
import "./SearchBarDesktop.scss";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "data/products";
import { useNavigate } from "react-router-dom";

interface ISearchBarDesktop {
  searchBarState: boolean;
  searchBarState2: () => void;
  onBlurCloseSearch: () => void;
}
const SearchBarDesktop: React.FC<ISearchBarDesktop> = (props) => {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState("");
  const [searchedProducts, setSearchedProducts] = useState<any>([]);

  useEffect(() => {
    setKeyWord("");
  }, [props.searchBarState]);

  const keyWordHandler = (keyword: any) => {
    setKeyWord(keyword.target.value);
    setSearchedProducts(products);
    console.log(keyWord);
  };

  const navigateToProduct = (catId: any, prodId: any) => {
    navigate(`/products/${catId}/${prodId}`);
    setKeyWord("");
  };
  const blurHandler = () => {
    setKeyWord("");
  };
  return (
    <div className="searchbar-container">
      <div className={props.searchBarState ? "searchbar" : "searchbar-hide"}>
        <input
          id="search"
          type="search"
          name="s"
          placeholder="Search for Products . . ."
          onChange={keyWordHandler}
          // onBlur={() => {
          //   // props.onBlurCloseSearch;
          //   // blurHandler();
          // }}
        />

        {/* <FontAwesomeIcon className="search-reset-btn" icon={faX} /> */}
      </div>
      {keyWord && props.searchBarState && (
        <div className="main-result-container">
          <div className="result-container">
            {searchedProducts
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
                console.log(filteredData);

                return filteredData;
              })
              .map((product: any, index: any) => {
                return (
                  <div
                    className="filter-container"
                    key={index}
                    onClick={() => {
                      navigateToProduct(product.categoryId, product.productId);
                      props.searchBarState2();
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
        </div>
      )}
    </div>
  );
};

export default SearchBarDesktop;
