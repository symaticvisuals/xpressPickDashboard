import React from "react";

function PackageWeight(props) {
  return (
    <div
      className={`flex-col w-full border-2 border-t-0 border-base rounded-b-lg justify-between pr-5 px-5 py-3 ${props.accordian} `}>
      <form>
        <div className="flex sm:block">
          <input
            type="number"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 text-skin-base focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Package Weight (in Kg)"
          />
          <input
            type="number"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base text-skin-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Length (in Cm)"
          />
          <input
            type="number"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base text-skin-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Width (in Cm)"
          />
          <input
            type="number"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base text-skin-base mb-2  sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Height (in Cm)"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="px-5 py-3 mb-2 bg-skin-button-base text-skin-inverted font-sans text-md text-skin-base rounded-lg hover:bg-skin-button-base-hover sm:w-full mt-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default PackageWeight;
