import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ShippingAddress = () => {
  const { register, handleSubmit } = useForm();
  const [submittedAddress, setSubmittedAddress] = React.useState(null);
  const [isSubmited, setSubmittedForm] = React.useState(false);

  const onSubmit = (data) => {
    setSubmittedAddress(data);
    setSubmittedForm(true);
  };

  return (
    <div>
      <div className="bg-white">
        <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
          <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
            1
          </div>
          <h2 className="text-2xl font-semibold">Shipping address</h2>
        </div>
      </div>
      <div>
        {isSubmited ? (
          submittedAddress && (
            <div className="bg-gray-50 px-8 py-6 text-small-regular">
              <div className="flex items-start gap-x-8">
                <div className="bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                  ✓
                </div>
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <span>
                      {submittedAddress.firstName} {submittedAddress.lastName}
                    </span>
                    <span>{submittedAddress.address}</span>
                    <span>
                      {submittedAddress.postalCode}, {submittedAddress.city}
                    </span>
                    <span>{submittedAddress.country_code?.toUpperCase()}</span>
                    <span>{submittedAddress.stateProvince}</span>

                    <div className="mt-4 flex flex-col">
                      <span>{submittedAddress.phone}</span>
                      <span>{submittedAddress.email}</span>
                    </div>
                  </div>
                  <div>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
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

                <div className="grid grid-cols-2 gap-x-2">
                  <div>
                    <div className="relative z-0 w-full text-sm">
                      <input
                        className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                        {...register("firstName")}
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative z-0 w-full text-sm">
                      <input
                        className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                        {...register("lastName")}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>

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
                      {...register("apartment")}
                      placeholder="Apartment, suit, etc."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[122px_1fr] gap-x-2">
                  <div>
                    <div className="relative z-0 w-full text-sm">
                      <input
                        className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                        {...register("postalCode")}
                        placeholder="Postal code"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative z-0 w-full text-sm">
                      <input
                        className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                        {...register("city")}
                        placeholder="City"
                      />
                    </div>
                  </div>
                </div>

                <div class="relative text-sm flex items-center text-base-regular border border-gray-200">
                  <select
                    name="shipping_address.country_code"
                    autocomplete="country"
                    class="appearance-none flex-1 bg-transparent border-none px-4 py-2.5 transition-colors duration-150 focus:border-gray-700 outline-none"
                  >
                    <option value="">Country</option>
                    <option value="se">Sweden</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="dk">Denmark</option>
                    <option value="fr">France</option>
                    <option value="es">Spain</option>
                    <option value="it">Italy</option>
                  </select>
                  <span class="absolute right-4 inset-y-0 flex items-center pointer-events-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div>
                  <div className="relative z-0 w-full text-sm">
                    <input
                      className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                      {...register("stateProvince")}
                      placeholder="State / Province"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative z-0 w-full text-sm">
                    <input
                      className="pt-4 pb-1 block w-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200"
                      {...register("phone")}
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <button className="w-full text-sm uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white max-w-[200px] mt-6">
                Continue to delivery
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;
