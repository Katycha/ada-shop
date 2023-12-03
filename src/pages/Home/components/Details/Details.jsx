import { useParams } from "react-router-dom";
import Header from "../../../../components/Header/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import { useEffect, useState } from "react";
import axios from "axios";
import JoinUs from "../../JoinUs";
import Footer from "../../../../components/Footer/Footer";
import SliderMobile from "./components/SliderMobile";
import SliderDesctop from "./components/SliderDesctop";

function Details() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  console.log(product);

  async function getSingleProduct() {
    const response = await axios.get(
      "https://dummyjson.com/products/" + params.id
    );

    setProduct(response.data);
  }

  useEffect(() => {
    getSingleProduct();
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        L O A D I N G ...
      </div>
    );
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container sm:mx-auto px-8 md:px-0 mx-40">
        <Header />
        <BreadCrumbs />
        <div className="md:hidden">
          <SliderMobile product={product} />
        </div>
        <div className=" hidden md:block">
          <SliderDesctop product={product} />
        </div>
        <JoinUs />
        <Footer />
      </div>
    </div>
  );
}
export default Details;
