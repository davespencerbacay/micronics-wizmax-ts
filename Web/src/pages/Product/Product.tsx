import Footer from "layouts/Footer/Footer";
import NavigationBar from "layouts/NavigationBar/NavigationBar";
import PageTitle from "library/PageTitle/PageTitle";
import "./Product.scss";

const Product: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <PageTitle title="Products" />
      <Footer />
    </div>
  );
};

export default Product;
