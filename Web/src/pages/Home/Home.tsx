import React from "react";
import HomeLandingDesktop from "./HomeLanding/HomeLandingDesktop";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const TITLE = "Wizmax Global";
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <HomeLandingDesktop />
    </>
  );
};

export default Home;
