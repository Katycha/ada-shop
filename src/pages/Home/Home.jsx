import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../components/Header/Header";
import OurServices from "../../components/OurServices/OurServices";
import HeroImg1 from "../../assets/heroimg.png";
import HeroImg2 from "../../assets/heroimg2.png";
import HeroImg3 from "../../assets/heroimg3.png";

function Home() {
  return (
    <div className="px-8 max-w-[1440px] mx-auto">
      <div className="lg:px-[160px] md:h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Carousel showThumbs={false} showStatus={false}>
            <img src={HeroImg1} alt="" className="h-full" />
            <img src={HeroImg2} alt="" className="h-full" />
            <img src={HeroImg3} alt="" className="h-full" />
          </Carousel>
        </div>
      </div>
      <div className="sm: flex-col font-semibold  md:flex-row">
        <h2 className="sm:flex text-4xl  w-[100%] md:flex-row justify-start ">
          Simply Unique/ <br /> Simply Better.
        </h2>
        <p className="sm:flex text-sm font-normal text-[#6C7275] md:justify-end">
          <span className="text-[#343839]"> 3legant </span> is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
      <OurServices />
    </div>
  );
}
export default Home;
