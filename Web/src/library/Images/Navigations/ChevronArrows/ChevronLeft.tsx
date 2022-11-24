import classNames from "classnames";
import "./ChevronArrows.scss";

interface IChevronLeft {
  width?: number | string;
  className?: string;
}

const ChevronLeft: React.FC<IChevronLeft> = ({ width, className }) => {
  const svgclassnames = classNames("chevron-arrow-left-svg", className);

  return (
    <svg
      className={svgclassnames}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.6,11.9l2.1,2.2L20.9,24l9.9,9.9L28.6,36l-12-12.1L28.6,11.9z" />
    </svg>
  );
};

ChevronLeft.defaultProps = {
  width: 100,
};

export default ChevronLeft;
