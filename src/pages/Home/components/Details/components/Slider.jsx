import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star, ChevronRight, Heart } from "lucide-react";

function Slider({ product }) {
  return (
    <div className="container">
      <div className="card bg-[#F3F5F7]  bg-no-repeat bg-contain  p-4 flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="uppercase font-bold bg-white px-3 py-1 rounded w-[70px] mb-2">
            new
          </span>
          <span className="bg-[#28CB89] text-white rounded px-3 py-1 font-bold w-[70px] mb-2">
            {product.discountPercentage.toFixed(0)}%
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
      <div>
        <div className="flex mt-4 gap-x-[10px]">
          <div className="flex gap-x-0.5 ">
            <Star size={16} color="#343839" fill="#343839" />
            <Star size={16} color="#343839" fill="#343839" />
            <Star size={16} color="#343839" fill="#343839" />
            <Star size={16} color="#343839" fill="#343839" />
            <Star size={16} color="#343839" fill="#343839" />
          </div>
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
        <div className="flex flex-col gap-y-3 my-6">
          <h3 className="font-[400] text-[16px] text-[#343839]">
            Offer expires in:
          </h3>
          <div className="flex gap-x-4">
            <div className="flex flex-col w-15 h-20">
              <h1 className="text-[#141718] text-[34px] font-[500]  text-center bg-[#F3F5F7]">
                02
              </h1>
              <p className="text-[#6C7275] text-center text-[12px] font-[400]">
                Days
              </p>
            </div>
            <div className="flex flex-col w-15 h-20">
              <h1 className="text-[#141718] text-[34px] font-[500]  text-center bg-[#F3F5F7]">
                12
              </h1>
              <p className="text-[#6C7275] text-center text-[12px] font-[400]">
                Hours
              </p>
            </div>
            <div className="flex flex-col w-15 h-20">
              <h1 className="text-[#141718] text-[34px] font-[500]  text-center bg-[#F3F5F7]">
                45
              </h1>
              <p className="text-[#6C7275] text-center text-[12px] font-[400]">
                Minutes
              </p>
            </div>
            <div className="flex flex-col w-15 h-20">
              <h1 className="text-[#141718] text-[34px] font-[500]  text-center bg-[#F3F5F7]">
                05
              </h1>
              <p className="text-[#6C7275] text-center text-[12px] font-[400]">
                Seconds
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 my-6">
          <h3 className="text-[#6C7275] text-[16px] font-[600]">
            Measurements
          </h3>
          <h1 className="text-[20px] font-[400] text-[#000]">
            17 1/2x20 5/8 "
          </h1>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h3 className="font-[400] text-[16px] text-[#6C7275]">
              Choose Color
            </h3>
            <ChevronRight className="w-6 h-6 text-[#6C7275]" />
          </div>
          <h2 className="text-[20px] text-[#000] font-[400] mt-2 mb-4">
            Black
          </h2>
          <div className="flex gap-x-3 mb-6">
            <div className="bg-[#000] text-[#000] h-[72px] w-[72px] rounded-md">
              black
            </div>
            <div className="bg-[#ecdede] text-[#ecdede] h-[72px] w-[72px] rounded-md">
              black
            </div>
            <div className="bg-[#704949] text-[#704949] h-[72px] w-[72px] rounded-md">
              black
            </div>
            <div className="bg-[#cccbcb] text-[#cccbcb] h-[72px] w-[72px] rounded-md">
              black
            </div>
          </div>
        </div>
        <div className="flex flex-col my-6 gap-y-4">
          <div className="flex justify-between">
            <button className="bg-[#F5F5F5] rounded-[4px] text-[#121212] text-center px-2 w-[80px] cursor-pointer">
              - 1 +
            </button>
            <div className="flex justify-center items-center">
              <button className=" text-[] flex gap-x-2 px-10 rounded-[4px] border-[1px] border-[#141718] cursor-pointer">
                <Heart className="w-3 h-6" />
                <h3>Wishlist</h3>
              </button>
            </div>
          </div>
          <button className="px-10 w-[311px] bg-[#141718] rounded-[4px] text-[14px] font-[500] text-[#FFF] text-center cursor-pointer">
            Add to Cart
          </button>
        </div>
        <div className="flex flex-col my-6 gap-x-2">
          <div className="flex gap-x-[98px]">
            <p className="text-[12px] font-[400] text-[#6C7275]">SKU</p>
            <p className="text-[12px] font-[400] text-[#141718]">1117</p>
          </div>
          <div className="flex gap-x-[58px]">
            <p className="text-[12px] font-[400] text-[#6C7275]">CATEGORY</p>
            <p className="text-[12px] font-[400] text-[#141718]">
              Living Room, Bedroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
