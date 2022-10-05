import classNames from "classnames";
import "./GoTo.scss";

interface IGoTo {
  width?: number | string;
  className?: string;
}

const GoTo: React.FC<IGoTo> = ({ width, className }) => {
  const svgclassnames = classNames("goto-svg", className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={svgclassnames}
      width={width}
      viewBox="0 0 12.8 14.629"
    >
      <path
        id="Path_19"
        data-name="Path 19"
        d="M7.314,0l7.314,12.8H0Z"
        transform="translate(12.8) rotate(90)"
        fill="#131313"
      />
    </svg>
  );
};

GoTo.defaultProps = {
  width: 100,
};

export default GoTo;
