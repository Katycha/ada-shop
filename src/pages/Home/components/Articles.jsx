import Img1 from "../../../assets/img.png";
import Img2 from "../../../assets/img (1).png";
import Img3 from "../../../assets/img (2).png";

function Articles() {
  return (
    <div className="container mx-auto px-8 mt-[30px] mb-[30px]">
      <div className=" mx-auto px-8  flex justify-between">
        <h2 className="font-[500] sm:text-[34px] md:first-letter:text-[40px]">
          Articles
        </h2>
        <p>More Articles →</p>
      </div>
      <div className="mr-[10px] sm:flex flex-col md:flex md:flex-row ">
        <div className="flex flex-col sm:w-[100vw] md:w-auto md:mr-[25px]">
          <img
            src={Img1}
            alt=""
            className="sm:w-[100vw] sm:flex justify-center md:w-auto"
          />
          <h4>7 ways to decor your home</h4>
          <p>Read More →</p>
        </div>
        <div className="flex flex-col  mr-[25px]">
          <img
            src={Img2}
            alt=""
            className="sm:w-[100vw] sm:flex justify-center  md:w-auto"
          />
          <h4>Kitchen organization</h4>
          <p>Read More →</p>
        </div>
        <div className="flex flex-col ">
          <img
            src={Img3}
            alt=""
            className="sm:w-[100vw] sm:flex justify-center  md:w-auto"
          />
          <h4>Decor your bedroom</h4>
          <p>Read More →</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
