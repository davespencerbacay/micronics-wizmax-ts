import React, { useState } from "react";
import {
  Container,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { LOCALES } from "i18n";
import "./NavigationBarMobile.scss";
import intl from "i18n/intl";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import { ROUTE_PATH } from "constants/routes";
import KoreanFlag from "library/Images/Flags/KoreanFlag/KoreanFlag";
import USFLag from "library/Images/Flags/USFlag/USFlag";
import GoTo from "library/Images/Navigations/GoTo/GoTo";
import Facebook from "library/Images/SocialMedias/Facebook/Facebook";
import Instagram from "library/Images/SocialMedias/Instagram/Instagram";
import Tiktok from "library/Images/SocialMedias/Tiktok/Tiktok";
import Twitter from "library/Images/SocialMedias/Twitter/Twitter";
import Youtube from "library/Images/SocialMedias/Youtube/Youtube";
import { SOCIAL_MEDIA } from "constants/";
import NavbarLogoMobile from "library/NavigationBar/NavbarLogoMobile";
import PopupSection from "pages/Home/HomeLanding/Sections/PopupSection/PopupSection";
import Img from "library/Images/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import products from "data/products";

//NAVIGATION LINKS AND ROUTES
interface INavigationLinksMobile {
  routeHandler: () => void;
}
const NavigationLinksMobile: React.FC<INavigationLinksMobile> = (props) => {
  const navbarLinksMobile = [
    {
      routePath: ROUTE_PATH.INDEX,
      text: intl("navigationBar.home"),
    },
    {
      routePath: ROUTE_PATH.PRODUCT,
      text: intl("navigationBar.products"),
    },
    {
      routePath: ROUTE_PATH.SUPPORT_DRIVERS_SOFTWARES,
      text: intl("navigationBar.support"),
    },
    {
      routePath: ROUTE_PATH.SHOP,
      text: intl("navigationBar.shop"),
    },
    {
      routePath: ROUTE_PATH.CONTACT,
      text: intl("navigationBar.contact"),
    },
  ];

  return (
    <div className="navbar-ul-div">
      {navbarLinksMobile.map((link, index) => (
        <ListGroupItem
          className="navbar-ul-div-li"
          key={index}
          onClick={() => props.routeHandler()}
        >
          <Link to={link.routePath}>
            <span>
              {link.text}
              <GoTo className="arrow-icon" width={10} />
            </span>
          </Link>
        </ListGroupItem>
      ))}
    </div>
  );
};

//SOCIAL MEDIA ICONS AND IMAGES
// const NavbarSocialMedias: React.FC = () => {
//   const socialMedias = [
//     {
//       url: SOCIAL_MEDIA.FACEBOOK_LINK,
//       image: <Facebook width={50} className="social-icons" />,
//     },
//     {
//       url: SOCIAL_MEDIA.INSTAGRAM_LINK,
//       image: <Instagram width={50} className="social-icons" />,
//     },
//     {
//       url: SOCIAL_MEDIA.TIKTOK_LINK,
//       image: <Tiktok width={50} className="social-icons" />,
//     },
//     {
//       url: SOCIAL_MEDIA.TWITTER_LINK,
//       image: <Twitter width={50} className="social-icons" />,
//     },
//     {
//       url: SOCIAL_MEDIA.YOUTUBE_LINK,
//       image: <Youtube width={50} className="social-icons" />,
//     },
//   ];

//   return (
//     <ListGroup className="social-icons-group">
//       <ListGroupItem className="social-icons-li">
//         {socialMedias.map((social, index) => (
//           <a
//             href={social.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             key={index}
//           >
//             {social.image}
//           </a>
//         ))}
//       </ListGroupItem>
//     </ListGroup>
//   );
// };

interface INavigationBarMobile {
  changeLanguage: (language: string) => void;
}

const NavigationBarMobile: React.FC<INavigationBarMobile> = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [line1Animation, setLine1Animation] = useState(true);
  const [line2Animation, setLine2Animation] = useState(true);
  //show and hide navbar
  const crossHandler = () => {
    setIsHidden((prevState) => !prevState);
    setLine1Animation((prevState) => !prevState);
    setLine2Animation((prevState) => !prevState);
  };
  //Cross Button
  const navbarClassname = classnames({
    "navbar-container": true,
    "navbar-container-hide": isHidden,
  });
  const line1Classname = classnames({
    "line-1": true,
    "line-1-horizontal": line1Animation,
  });
  const line2Classname = classnames({
    "line-2": true,
    "line-2-horizontal": line2Animation,
  });

  const listItems = [
    {
      className: "navbar-ul-subgroup-li",
      onClick: () => props.changeLanguage(LOCALES.KOREAN),
      flag: <KoreanFlag width={30} className="kr-svg-navbar-mobile" />,
      flagName: intl("navigationBar.korean"),
    },
    {
      className: "navbar-ul-subgroup-li",
      onClick: () => props.changeLanguage(LOCALES.ENGLISH),
      flag: <USFLag width={30} className="us-flag-svg" />,
      flagName: intl("navigationBar.english"),
    },
  ];

  const routeHandler = () => {
    window.scrollTo(0, 0);
    setIsHidden(true);
    setLine1Animation((prevState) => !prevState);
    setLine2Animation((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const goToCesHandler = () => {
    window.scrollTo(0, 0);
    navigate("/ces");
    setIsHidden(true);
    setLine1Animation((prevState) => !prevState);
    setLine2Animation((prevState) => !prevState);
  };
  const [resultActive, setResultActive] = useState(false);
  const searchbarToggleHandler = () => {
    setResultActive((prevState) => !prevState);
    setKeyWord("");
  };
  const navigateTo = useNavigate();
  const [keyWord, setKeyWord] = useState("");
  const [searchedProducts, setSearchedProducts] = useState<any>([]);

  const keyWordHandler = (keyword: any) => {
    setKeyWord(keyword.target.value);
    setSearchedProducts(products);
    console.log(keyWord);
  };

  const navigateToProduct = (catId: any, prodId: any) => {
    navigateTo(`/products/${catId}/${prodId}`);
    setKeyWord("");
    setResultActive(false);
  };
  return (
    <React.Fragment>
      <div className="navbar-mobile">
        <Container className={navbarClassname} fluid="sm">
          <FormGroup className="switch-container" switch>
            <Input className="switch" type="switch" role="switch" />
          </FormGroup>
          <div className="cross-container" onClick={crossHandler}>
            <div className={line1Classname}></div>
            <div className={line2Classname}></div>
          </div>
          <ListGroup className="navbar-ul" flush>
            <NavigationLinksMobile routeHandler={routeHandler} />
            {/* <div className="ces-navbar-mobile" onClick={goToCesHandler}>
              <Img
                className="ces"
                img="/images/micronics-assets/home-page/ces.png"
              />
              <strong>LIVE!</strong>
              <p>Click Here!</p>
            </div> */}
            {/* <ListGroupItem className="translation">
              {intl("navigationBar.translation")}
              <ListGroup className="navbar-ul-subgroup" flush>
                {listItems.map((items: any) => {
                  return (
                    <ListGroupItem
                      className={items.className}
                      onClick={items.onClick}
                    >
                      {items.flag}
                      {items.flagName}
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            </ListGroupItem> */}
            <ListGroupItem className="social-media-section">
              {/* <h2>{intl("navigationBar.getInTouch")}</h2> */}
              {/* <NavbarSocialMedias /> */}
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div className="navbar-logo-container">
          <Link to={ROUTE_PATH.INDEX} onClick={() => scrollTo(0, 0)}>
            <NavbarLogoMobile />
          </Link>
        </div>
        <div className="searchbar-container">
          <FontAwesomeIcon
            icon={resultActive ? faX : faSearch}
            onClick={searchbarToggleHandler}
          />
        </div>
        <div className={`result-container ${resultActive ? "active" : ""}`}>
          <input
            type="search"
            name="s"
            id="search"
            placeholder="Search for Products . . ."
            onChange={keyWordHandler}
          />
          {keyWord && (
            <div className="results">
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
                        navigateToProduct(
                          product.categoryId,
                          product.productId
                        );
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
      </div>
    </React.Fragment>
  );
};

export default NavigationBarMobile;
