import Footer from "layouts/Footer/Footer";
import NavigationBar from "layouts/NavigationBar/NavigationBar";
import React from "react";

interface IPageWrapper {
  showNavbar?: boolean;
  showFooter?: boolean;
  component: JSX.Element;
}
const PageWrapper: React.FC<IPageWrapper> = (props) => {
  if (props.showNavbar && props.showFooter && props.component) {
    return (
      <React.Fragment>
        <NavigationBar />
        {props.component}
        <Footer />
      </React.Fragment>
    );
  } else if (props.showFooter && props.component) {
    return (
      <React.Fragment>
        {props.component}
        <Footer />
      </React.Fragment>
    );
  } else if (props.showNavbar && props.component) {
    return (
      <React.Fragment>
        <NavigationBar />
        {props.component}
      </React.Fragment>
    );
  }

  return props.component;
};

PageWrapper.defaultProps = {
  showNavbar: true,
  showFooter: true,
};
export default PageWrapper;
