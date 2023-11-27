import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Sign from "../../assets/Sign.png";

function JoinUs() {
  return (
    <div className=" flex flex-col items-center justify-between sm:bg-[#F2F4F6]">
      <img src={Sign} alt="" className="sm:none md:block" />
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
        <InputGroup.Text id="basic-addon2">Signup</InputGroup.Text>
      </InputGroup>
    </div>
  );
}
export default JoinUs;
