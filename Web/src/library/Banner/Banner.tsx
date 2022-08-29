import "./Banner.scss";

interface HeaderProps {
  title: string;
  description: string;
}
const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className={`header-container`}>
      <div className={`container `}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Header;
