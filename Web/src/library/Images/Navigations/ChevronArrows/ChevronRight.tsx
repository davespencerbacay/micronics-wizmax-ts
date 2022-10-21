import classNames from "classnames";
import "./ChevronArrows.scss";

interface IChevronRight {
  width?: number | string;
  className?: string;
}

const ChevronRight: React.FC<IChevronRight> = ({ width, className }) => {
  const svgclassnames = classNames("chevron-arrow-right-svg", className);

  return (
    <svg
      className={svgclassnames}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
    >
      <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
    </svg>
  );
};

ChevronRight.defaultProps = {
  width: 100,
};

export default ChevronRight;
