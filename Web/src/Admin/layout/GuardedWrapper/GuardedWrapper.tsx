import useIsLoggedIn from "hooks/useIsLoggedIn";
import Invalid from "library/Invalid/Invalid";
import React from "react";

interface GuardedWrapperProps {
  children: JSX.Element | React.ReactNode;
}

const GuardedWrapper: React.FC<GuardedWrapperProps> = (props) => {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return (
    <Invalid message="Please Sign first to use the Wizmax Admin portal." />
  );
};

export default GuardedWrapper;
