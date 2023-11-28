import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Sign from "../../assets/Sign.png";

function JoinUs() {
  return (
    <div
      style={{ "--image-url": `url(${Sign})` }}
      className="p-4 flex flex-col items-center justify-between mb-[20px] sm:w-[100vw] sm:bg-[#F3F5F7] md:w-auto md:bg-[image:var(--image-url)]  "
    >
      <h2 className="font-[500] text-[28px] mt-[15px]">Join Our Newsletter</h2>
      <p className="font-[400] text-[14px] mt-[15px]">
        Sign up for deals, new products and promotions
      </p>
      <InputGroup className="mb-3 w-[311px]">
        <Form.Control
          placeholder="✉ Email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button className="border-black border-[0.1px] hover:bg-[#a8a8ec] rounded-md text-[#6C7275]">
          Signup
        </button>
      </InputGroup>
    </div>
  );
}
export default JoinUs;
