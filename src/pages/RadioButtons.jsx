const RadioButtons = () => {
  return (
    <div>
      <div className="flex items-center justify-between text-small-regular cursor-pointer py-4 border-b border-gray-200 last:border-b-0 px-8">
        <div className="flex items-center gap-x-4">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-4 h-4"
            style={{ accentColor: "rgb(17 24 39)" }}
          />
          <label htmlFor="default-radio-1" className="text-base-regular">
            Canada post
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between text-small-regular cursor-pointer py-4 border-b border-gray-200 last:border-b-0 px-8 ">
        <div className="flex items-center gap-x-4">
          <input
            defaultChecked=""
            id="default-radio-2"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-4 h-4 "
            style={{ accentColor: "rgb(17 24 39)" }}
          />
          <label htmlFor="default-radio-2" className="text-base-regular">
            FedEx
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between text-small-regular cursor-pointer py-4 border-b border-gray-200 last:border-b-0 px-8">
        <div className="flex items-center gap-x-4">
          <input
            id="default-radio-3"
            type="radio"
            defaultValue=""
            name="default-radio"
            className="w-4 h-4"
            style={{ accentColor: "rgb(17 24 39)" }}
          />
          <label htmlFor="default-radio-3" className="text-base-regular">
            USP
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;
