import { Carousel } from "react-responsive-carousel";
import Avatar from "../../../../../assets/Avatar1.png";
import SmallImg from "../../../../../assets/smImg.png";
import SmallImg2 from "../../../../../assets/smImg2.png";
import SmallImg3 from "../../../../../assets/smImg3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star, ChevronRight, Heart, ChevronDown } from "lucide-react";
import { InputGroup, Form } from "react-bootstrap";

function SliderDesctop({ product }) {
  return (
    <div className="container flex flex-col">
      <div className="flex gap-x-[60px]">
        <div className="flex flex-col mb-[67px]">
          <div className="card bg-[#F3F5F7]  bg-no-repeat bg-contain  p-4 flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="uppercase font-bold bg-white px-3 py-1 rounded w-[70px] mb-2">
                new
              </span>
              <span className="bg-[#28CB89] text-white rounded px-3 py-1 font-bold w-[70px] mb-2">
                -{product.discountPercentage.toFixed(0)}%
              </span>
            </div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
            >
              {product.images.map((item) => (
                <div className="overflow-hidden">
                  <img
                    src={item}
                    alt=""
                    className="overflow-hidden h-[500px]"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex gap-x-4 mt-6">
            <img src={SmallImg} alt="" className="h-full w-full" />
            <img src={SmallImg2} alt="" className="h-full w-full" />
            <img src={SmallImg3} alt="" className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-x-[10px] mb-[18px]">
            <div className="flex gap-x-0.5 ">
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
            </div>
            <span className="font-[400] text-[12px]">11 Reviews</span>
          </div>
          <div className="flex mr-2 items-center">
            <span className="text-[28px] font-[500] text-[#121212]">
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(0)}
              $
            </span>
            <span className=" text-[20px] font-[500] ml-2 text-[#6C7275] line-through">
              {product.price}$
            </span>
          </div>
          <h3 className="font-[500] text-[40px]">{product.title}</h3>
          <p className="font-[400] text-[16px] text-[#6C7275] mt-4">
            {product.description}
          </p>
          <div className="flex flex-col gap-y-3 my-6 border-[#E8ECEF] border-t-[1px] border-b-[1px] mt-6 mb-6">
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
          <div className="flex flex-col gap-y-2 my-6 mt-6 mb-6">
            <h3 className="text-[#6C7275] text-[16px] font-[600]">
              Measurements
            </h3>
            <h1 className="text-[20px] font-[400] text-[#000]">
              17 1/2x20 5/8 "
            </h1>
          </div>
          <div className="flex flex-col mt-6 mb-6">
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
          <div className="flex flex-col my-6 gap-y-4 mt-8 mb-8">
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
      <div className="flex flex-col gap-y-10">
        <div className="flex">
          <nav className=" flex border-b-[1px] border-[#6C7275] gap-x-20">
            <a href="#" className="text-[#6C7275] text-[18px] font-[500]">
              Additional Info
            </a>
            <a href="#" className="text-[#6C7275] text-[18px] font-[500]">
              Questions
            </a>
            <a href="#" className="text-[#121212] text-[18px] font-[500]">
              Reviews
            </a>
          </nav>
        </div>
        <div className="flex flex-col">
          <p className="font-[500] text-[20px] text-[#23262F]">
            Customer Reviews
          </p>
          <div className="flex gap-x-2 mt-6 mb-2">
            <div className="flex gap-x-0.5 ">
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" fill="#343839" />
              <Star size={16} color="#343839" />
            </div>
            <p className="text-[12px] font-[400] text-[#141718]">11 Reviews</p>
          </div>
          <h3 className="text-[14px] font-[600] text-center mb-8">
            {product.title}
          </h3>
          <div className="flex justify-between pl-6 py-4 w-[100vw] border-[#E8ECEF]">
            <InputGroup className="flex items-center text-center pl-6 w-[100vw]  py-4 ">
              <Form.Control
                placeholder="Share your thoughts"
                aria-label="Recipient's
              username"
                aria-describedby="basic-addon2"
              />
              <button className="cursor-pointer bg-[black] rounded-[80px] text-[#FFF] px-10 py-[6px]">
                Write Review
              </button>
            </InputGroup>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[28px] font-[500] text-[#000] flex items-center">
              11 Reviews
            </h3>
            <div className="flex justify-between rounded-[8px] border-[1px] border-[#E8ECEF] mt-6 mb-10  py-2">
              <p className="text-[16px] font-[600]">Newest</p>
              <ChevronDown className="w-4 h-5" />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-row gap-x-4">
              <img src={Avatar} alt="" className="rounded-[50%]" />
              <div className="flex flex-col gap-x-4">
                <h3 className="font-[600] text-[20px] text-[#141718]">
                  Sofia Harvetz
                </h3>
                <div className="flex gap-x-0.5 mb-6">
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#353945] my-4">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className="flex gap-x-4 justify-center">
              <button className="text-[12px] font-[600] text-[#23262F]">
                Like
              </button>
              <button className="text-[12px] font-[600] text-[#23262F]">
                Reply
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4 mt-6">
            <div className="flex flex-row gap-x-4">
              <img src={Avatar} alt="" className="rounded-[50%]" />
              <div className="flex flex-col gap-x-4">
                <h3 className="font-[600] text-[20px] text-[#141718]">
                  Margaret March
                </h3>
                <div className="flex gap-x-0.5 mb-6">
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#353945] my-4">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className="flex gap-x-4 justify-center">
              <button className="text-[12px] font-[600] text-[#23262F]">
                Like
              </button>
              <button className="text-[12px] font-[600] text-[#23262F]">
                Reply
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4 mt-6">
            <div className="flex flex-row gap-x-4">
              <img src={Avatar} alt="" className="rounded-[50%]" />
              <div className="flex flex-col gap-x-4">
                <h3 className="font-[600] text-[20px] text-[#141718]">
                  Samantha Robins
                </h3>
                <div className="flex gap-x-0.5 mb-6">
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#353945] my-4">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className="flex gap-x-4 justify-center">
              <button className="text-[12px] font-[600] text-[#23262F]">
                Like
              </button>
              <button className="text-[12px] font-[600] text-[#23262F]">
                Reply
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4 mt-6">
            <div className="flex flex-row gap-x-4">
              <img src={Avatar} alt="" className="rounded-[50%]" />
              <div className="flex flex-col gap-x-4">
                <h3 className="font-[600] text-[20px] text-[#141718]">
                  Jane Bennett
                </h3>
                <div className="flex gap-x-0.5 mb-6">
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#353945] my-4">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className="flex gap-x-4 justify-center">
              <button className="text-[12px] font-[600] text-[#23262F]">
                Like
              </button>
              <button className="text-[12px] font-[600] text-[#23262F]">
                Reply
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-4 mt-6">
            <div className="flex flex-row gap-x-4">
              <img src={Avatar} alt="" className="rounded-[50%]" />
              <div className="flex flex-col gap-x-4">
                <h3 className="font-[600] text-[20px] text-[#141718]">
                  Nicolas Jensen
                </h3>
                <div className="flex gap-x-0.5 mb-6">
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                  <Star size={16} color="#343839" fill="#343839" />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-[400] text-[#353945] my-4">
              I bought it 3 weeks ago and now come back just to say “Awesome
              Product”. I really enjoy it. At vero eos et accusamus et iusto
              odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupt et quas molestias excepturi sint non
              provident.
            </p>
            <div className="flex gap-x-4 justify-center">
              <button className="text-[12px] font-[600] text-[#23262F]">
                Like
              </button>
              <button className="text-[12px] font-[600] text-[#23262F]">
                Reply
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-6 mb-10">
            <button className=" text-[16px] h-[28px] font-[500] text-[#141718] rounded-[80px] px-10 border-[#141718] border-[1px]">
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderDesctop;
