import classNames from "classnames";
import "./Banner.scss";

interface IBanner {
  title: string;
  subTitle?: string;
  variant?: "dark" | "light";
  align?: "center" | "left" | "right";
}
const Banner: React.FC<IBanner> = (props) => {
  const { title, subTitle, variant, align } = props;
  const bannerClassnames = classNames({
    banner: true,
    dark: variant === "dark",
    light: variant === "light",
    center: align === "center",
    left: align === "left",
    right: align === "right",
  });

  return (
    <div className={bannerClassnames}>
      <div className="container">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  variant: "dark",
};
export default Banner;
