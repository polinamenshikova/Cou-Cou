import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const Payment = () => {
  const { register, handleSubmit } = useForm();

  const [submittedCardDetails, setSubmittedCardDetails] = React.useState(null);
  const [isSubmited, setSubmittedForm] = React.useState(false);

  const onSubmit = (data) => {
    setSubmittedCardDetails(data);
    setSubmittedForm(true);
  };
  return (
    <div className="bg-white">
      <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
          3
        </div>
        <h2 className="text-2xl font-semibold">Payment</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-8 px-8">
          <div className="grid grid-cols-1 gap-y-2">
            <div>
              <div className="relative z-0 w-full text-sm">
                <input
                  className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                  {...register("email")}
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div className="relative z-0 w-full text-sm">
                <input
                  className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                  {...register("fullName")}
                  placeholder="Full Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-[4fr_1fr_1fr] gap-x-2">
              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("cardNumber")}
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("mmyy")}
                    placeholder="MM / YY"
                  />
                </div>
              </div>

              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("cvc")}
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[4fr_1fr_1fr] gap-x-2">
              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("address")}
                    placeholder="Address"
                  />
                </div>
              </div>

              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("stateOrProvince")}
                    placeholder="State / Province"
                  />
                </div>
              </div>

              <div>
                <div className="relative z-0 w-full text-sm">
                  <input
                    className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                    {...register("zip")}
                    placeholder="ZIP"
                  />
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam, mollitia, excepturi dolorum error veritatis id
                  voluptas, sint et est exercitationem ut repellat eius facilis
                  quisquam alias. Omnis reiciendis est delectus.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
