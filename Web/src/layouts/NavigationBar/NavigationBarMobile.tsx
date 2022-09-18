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
import { Link } from "react-router-dom";
import classnames from "classnames";
import { ROUTE_PATH } from "constants/routes";

//NAVIGATION LINKS AND ROUTES
const NavigationLinksMobile: React.FC = () => {
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
      routePath: ROUTE_PATH.SUPPORT,
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
        <ListGroupItem className="navbar-ul-div-li" key={index}>
          <Link to={link.routePath}>
            {link.text}
            <img
              className="arrow-icon"
              src="/images/micronics-assets/go-to-icon.svg"
              alt="Arrow Icon"
            />
          </Link>
        </ListGroupItem>
      ))}
    </div>
  );
};

//SOCIAL MEDIA ICONS AND IMAGES
const NavbarSocialMedias: React.FC = () => {
  const socialMedias = [
    {
      url: "https://www.facebook.com/Wizmax-100846952546335/",
      image: "/images/micronics-assets/Facebook Icon-Colored.svg",
    },
    {
      url: "https://www.instagram.com/wizmaxglobal/",
      image: "/images/micronics-assets/Instagram Icon-Colored.svg",
    },
    {
      url: "https://www.tiktok.com/@wizmaxinc",
      image: "/images/micronics-assets/Tiktok Icon-Colored.svg",
    },
    {
      url: "https://twitter.com/Wizmaxinc",
      image: "/images/micronics-assets/Twitter Icon-Colored.svg",
    },
    {
      url: "https://www.youtube.com/channel/UC78IfgEhU10aaQWi-iqpvGg",
      image: "/images/micronics-assets/Youtube Icon-Colored.svg",
    },
  ];

  return (
    <ListGroup className="social-icons-group">
      <ListGroupItem className="social-icons-li">
        {socialMedias.map((socials, index) => (
          <a
            href={socials.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              className="social-icons"
              src={socials.image}
              alt={socials.image}
            />
          </a>
        ))}
      </ListGroupItem>
    </ListGroup>
  );
};

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

  return (
    <React.Fragment>
      <Container className={navbarClassname} fluid="sm">
        <FormGroup className="switch-container" switch>
          <Input className="switch" type="switch" role="switch" />
        </FormGroup>
        <div className="cross-container" onClick={crossHandler}>
          <div className={line1Classname}></div>
          <div className={line2Classname}></div>
        </div>
        <ListGroup className="navbar-ul" flush>
          <NavigationLinksMobile />
          <ListGroupItem className="translation">
            {intl("navigationBar.translation")}
            <ListGroup className="navbar-ul-subgroup" flush>
              <ListGroupItem
                className="navbar-ul-subgroup-li"
                onClick={() => props.changeLanguage(LOCALES.KOREAN)}
              >
                <img
                  src="/images/micronics-assets/KR Flag.svg"
                  alt="KR Flag"
                ></img>
                {intl("navigationBar.korean")}
              </ListGroupItem>
              <ListGroupItem
                className="navbar-ul-subgroup-li"
                onClick={() => props.changeLanguage(LOCALES.ENGLISH)}
              >
                <img
                  src="/images/micronics-assets/US Flag.svg"
                  alt="US Flag"
                ></img>
                {intl("navigationBar.english")}
              </ListGroupItem>
            </ListGroup>
          </ListGroupItem>
          <ListGroupItem className="social-media-section">
            <h2>{intl("navigationBar.getInTouch")}</h2>
            <NavbarSocialMedias />
          </ListGroupItem>
        </ListGroup>
      </Container>
    </React.Fragment>
  );
};

export default NavigationBarMobile;
