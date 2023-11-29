import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider({ product }) {
  return (
    <div className="container">
      <div className="card bg-[#F3F5F7]  bg-no-repeat bg-contain  p-4 flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="uppercase font-bold bg-white px-3 py-1 rounded w-[70px] mb-2">
            new
          </span>
          <span className="bg-[#28CB89] text-white rounded px-3 py-1 font-bold w-[70px] mb-2">
            -50%
          </span>
        </div>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
          {product.images.map((item) => (
            <div className="overflow-hidden">
              <img src={item} alt="" className="h-full w-full" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mx-[5px]">
        <div className="flex">
          <span className="text-[12px] font-[400] mr-3">
            {product.rating} / 5{" "}
          </span>
          <span className="font-[400] text-[12px]">11 Reviews</span>
        </div>
        <div className="flex mr-2">
          <span>
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0)}
            $
          </span>
          <span className="ml-2 text-[#6C7275] line-through">
            {product.price}$
          </span>
        </div>
        <h3 className="font-[500] text-[40px]">{product.title}</h3>
        <p className="font-[400] text-[16px] text-[#6C7275]">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default Slider;
