import React from "react";
import { BadgeProps, Badge as BadgeReactStrap } from "reactstrap";
import "./Badge.scss";

interface IBadge extends BadgeProps {
  value: string | number;
  isVisible?: boolean;
}
const Badge: React.FC<IBadge> = (props) => {
  return <BadgeReactStrap bg="light">{props.value}</BadgeReactStrap>;
};

Badge.defaultProps = {
  isVisible: true,
  value: 0,
};

export default Badge;
