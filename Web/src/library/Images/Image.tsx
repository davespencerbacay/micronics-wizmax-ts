import React from "react";

interface ImageProps {
  width?: number;
  height?: number;
  isVisible?: boolean;
  img: string;
  className?: string;
}
const Img: React.FC<ImageProps> = (props) => {
  if (!props.isVisible) {
    return <React.Fragment />;
  }

  return (
    <img
      className={props.className}
      src={props.img}
      width={props.width}
      height={props.height}
      alt={props.img}
    />
  );
};

Img.defaultProps = {
  width: 15,
  isVisible: true,
};
export default Img;
