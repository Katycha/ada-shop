import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-8">
      <div className="flex justify-between">
        <button className="btn" onClick={getProducts}>
          Get Products
        </button>
        <h1 className="text-4xl">New Arrivals</h1>
        <button className="btn hidden md:block">More products →</button>
      </div>
      <div className="flex flex-wrap justify-between mb-3">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <button className="btn block md:hidden">More products →</button>
    </div>
  );
}

export default ProductList;
