import Add from "../../../../assets/Add.png";
function Discounts() {
  return (
    <div className="container mx-auto px-8 mt-[20px] sm:flex flex-col flex-wrap md:flex md:flex-row md:flex-nowrap">
      <img
        src={Add}
        alt=""
        className="sm:w-[100vw] sm:flex justify-center md:w-auto"
      />
      <div className="bg-[#F3F5F7] text-center px-8 md:pl-[72px] pr-[120px] pt-[60px] pb-[60px] sm:w-[100vw] md:w-auto ">
        <h5 className="text-[#377DFF] font-[700] text-[16px]">
          SALE UP TO 35% OFF
        </h5>
        <h2 className="font-[500] sm:text-[34px] md:text-[40px]">
          HUNDREDS of New lower prices!
        </h2>
        <p className="font-[400] text-[20px]">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <button className=" btn font-[400] text-[20px]">Shop Now →</button>
      </div>
    </div>
  );
}

export default Discounts;
