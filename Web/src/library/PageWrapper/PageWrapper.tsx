import classNames from "classnames";
import useResponsive from "hooks/useResponsive";
import Footer from "layouts/Footer/Footer";
import NavigationBar from "layouts/NavigationBar/NavigationBar";
import React from "react";

interface IPageWrapper {
  showNavbar?: boolean;
  showFooter?: boolean;
  component: JSX.Element;
}
const PageWrapper: React.FC<IPageWrapper> = (props) => {
  const isMobileMode = useResponsive("mobile");

  const wrapperClassname = classNames({
    "has-margin-top": !isMobileMode,
  });

  if (props.showNavbar && props.showFooter && props.component) {
    return (
      <div className={wrapperClassname}>
        <NavigationBar />
        {props.component}
        <Footer />
      </div>
    );
  } else if (props.showFooter && props.component) {
    return (
      <div className={wrapperClassname}>
        {props.component}
        <Footer />
      </div>
    );
  } else if (props.showNavbar && props.component) {
    return (
      <div className={wrapperClassname}>
        <NavigationBar />
        {props.component}
      </div>
    );
  }

  return props.component;
};

PageWrapper.defaultProps = {
  showNavbar: true,
  showFooter: true,
};
export default PageWrapper;
