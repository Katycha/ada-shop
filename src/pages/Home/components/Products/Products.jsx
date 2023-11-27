import LivingRoom from "../../../../assets/Livingroom.png";
import Bedroom from "../../../../assets/Bedroom.png";
import Kitchen from "../../../../assets/Kitchen.png";

function Products() {
  return (
    <div className="container mx-auto px-8 flex flex-col gap-x-6 mb-12">
      <div className="bg-[image:var(-- LivingRoom )] bg-[#F3F5F7] h-[377px] bg-center bg-no-repeat">
        <h2>Living room</h2>
        <p>Shop now →</p>
      </div>
      <div className="bg-[image:var(--image-url)] bg-[#F3F5F7] h-[180px] bg-center bg-no-repeat">
        <h2>Kitchen</h2>
        <p>Shop now →</p>
      </div>
      <div className="bg-[{LivingRoom} ] bg-[#F3F5F7] h-[180px] bg-center bg-no-repeat">
        <h2>Bedroom</h2>
        <p>Shop now →</p>
      </div>
    </div>
  );
}
export default Products;
