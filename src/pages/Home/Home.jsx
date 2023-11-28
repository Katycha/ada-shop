import OurServices from "./components/OurServices/OurServices";
import Articles from "./components/Articles";
import First from "./components/First";
import Footer from "../../components/Footer/Footer";
import Discounts from "./components/Discounts/Discounts";
import JoinUs from "./JoinUs";
import ProductList from "../../components/ProductsList/ProductsList";
import Categories from "./components/Categories/Categories";

function Home() {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <First />
      <Categories />
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
