import React from "react";

interface IconProps {
  width?: number;
  isVisible?: boolean;
  icon: string;
}
const Icon: React.FC<IconProps> = (props) => {
  if (!props.isVisible) {
    return <React.Fragment />;
  }

  return <img src={props.icon} width={props.width} alt={props.icon} />;
};

Icon.defaultProps = {
  width: 15,
  isVisible: true,
};
export default Icon;
