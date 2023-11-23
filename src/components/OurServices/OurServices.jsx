import "./ourservices.css";
import { Truck, Banknote, LockKeyhole, Phone } from "lucide-react";
function OurServices() {
  return (
    <div className="lg:mx-[160px] flex flex-wrap items-stretch justify-center gap-x-2 gap-y-6">
      <div className="card px-4 py-8 m-1 justify-center flex-1 bg-[#F3F5F7]  ">
        <Truck className="justify-center" />
        <h4 className="">Free Shipping</h4>
        <p className="text-stone-400">
          Order <br /> above $200
        </p>
      </div>
      <div className="card px-4 py-8 m-1 justify-center flex-1 bg-[#F3F5F7]">
        <Banknote className="justify-center" />
        <h4>Money-back</h4>
        <p className="text-stone-400">
          30 days <br /> guarantee
        </p>
      </div>
      <div className="card px-4 py-8 m-1 justify-center flex-1 bg-[#F3F5F7] ">
        <LockKeyhole className="justify-center" />
        <h4>Secure Payments</h4>
        <p className="text-stone-400">
          Secured <br /> by Stripe
        </p>
      </div>
      <div className="card px-4 py-8 m-1 justify-center flex-1 bg-[#F3F5F7] ">
        <Phone className="justify-center" />
        <h4>24/7 Support</h4>
        <p className="text-stone-400">
          Phone and <br />
          Email support
        </p>
      </div>
    </div>
  );
}

export default OurServices;
