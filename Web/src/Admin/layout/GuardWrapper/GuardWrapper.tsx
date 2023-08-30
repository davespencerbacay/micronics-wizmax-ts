import useIsLoggedIn from "hooks/useIsLoggedIn";
import Invalid from "library/Invalid/Invalid";
import React from "react";

interface GuardWrapperProps {
  children: JSX.Element | React.ReactNode;
}

const GuardWrapper: React.FC<GuardWrapperProps> = (props) => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return <Invalid message="Please Log in your account first use the portal." />;
};

export default GuardWrapper;
