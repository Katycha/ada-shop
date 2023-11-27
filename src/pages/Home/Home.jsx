import OurServices from "./components/OurServices/OurServices";
import Articles from "./components/Articles";
import First from "./components/First";
import Footer from "../../components/Footer/Footer";
import Products from "./components/Products/Products";
import Discounts from "./components/Discounts/Discounts";
import JoinUs from "./JoinUs";
import ProductList from "../../components/ProductsList/ProductsList";

function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <First />
      <Products />
      <ProductList />
      <OurServices />
      <Discounts />
      <Articles />
      <JoinUs />
      <Footer />
    </div>
  );
}
export default Home;
