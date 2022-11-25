import "./HeadsetMH2.scss";
import classNames from "classnames";

interface IHeadsetMH2 {
  width?: number | string;
  className?: string;
}

const HeadsetMH2: React.FC<IHeadsetMH2> = ({ width, className }) => {
  const svgclassnames = classNames("mh2-svg", className);

  return (
    <svg
      className={svgclassnames}
      width={width}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 1080"
    >
      <img width="1920" height="1080" id="MH2_Left_PV.34.1"></img>
    </svg>
  );
};

HeadsetMH2.defaultProps = {
  width: 100,
};

export default HeadsetMH2;
