import RadioButtons from "./RadioButtons";

const Delivery = () => {
  return (
    <div className="bg-white">
      <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
          2
        </div>
        <h2 className="text-2xl font-semibold">Delivery</h2>
      </div>

      <RadioButtons />
    </div>
  );
};

export default Delivery;
