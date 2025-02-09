import ShippingAddress from "../components/ShippingAddress";
import Delivery from "./Delivery";
import RadioButtons from "./RadioButtons";
import Payment from "./Payment";
const CheckoutForm = () => {
  return (
    <div>
      <div className="bg-gray-100 relative small:min-h-screen">
        <div className="relative">
          <div className="max-w-[70%] mx-auto gap-y-8 content-container gap-x-8 py-12 pt-[6rem]">
            <div>
              <div className=" grid grid-cols-1 gap-y-8">
                <div>
                  <div className="bg-white">
                    <div className="px-8 pb-8">
                      <ShippingAddress />
                    </div>
                  </div>
                </div>

                <div>
                  <Delivery />
                </div>

                <div>
                  <Payment />
                </div>
              </div>
            </div>
            <div className="small:flex-col gap-y-8">
              <div className="w-full bg-white p-6 flex flex-col gap-y-6">
                <div>
                  <div className="text-small-regular text-gray-700">
                    <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
                      <span>Subtotal</span>
                      <span>€39.00</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="flex items-center justify-between">
                        <span>Shipping</span>
                        <span>€15.00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Taxes</span>
                        <span>€0.00</span>
                      </div>
                    </div>
                    <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
                    <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
                      <span>Total</span>
                      <span>€54.00</span>
                    </div>
                  </div>
                </div>
                <button className="w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
