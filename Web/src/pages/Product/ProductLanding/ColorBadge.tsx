import React from "react";
import "./ColorBadge.scss";

interface Color {
  color: string;
  secondaryColor: string;
  images: string[];
}
interface ColorBadgeProps {
  colors: Color[];
}
const ColorBadge: React.FC<ColorBadgeProps> = (props) => {
  return (
    <div className="color-availability-container">
      {props.colors?.map((color) => (
        <div
          className="color-availability"
          style={{
            background:
              color.color && color.secondaryColor
                ? `conic-gradient(${color.secondaryColor} 0deg, ${color.secondaryColor} 180deg, ${color.color} 180deg, ${color.color} 360deg)`
                : `conic-gradient(${color.color} 0deg, ${color.color} 360deg)`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBadge;
