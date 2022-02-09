import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import BuyerDetails from "../components/Orders/BuyerDetails";
import OrderDetails from "../components/Orders/OrderDetails";
import OtherDetails from "../components/Orders/OtherDetails";
import PackageWeight from "../components/Orders/PackageWeight";
import PickupAddress from "../components/Orders/PickupAddress";
function Orders() {
  const [accordian, setAccordian] = React.useState("hidden");
  const [rounded, setRounded] = React.useState("rounded-lg");
  const steps = [
    {
      title: "Package Weight",
      content: <PackageWeight accordian={accordian} />,
      description: " Mention the company name if it’s a B2B order.",
    },
    {
      title: "Buyer Details",
      content: <BuyerDetails accordian={accordian} />,
      description: " Mention the company name if it’s a B2B order.",
    },
    {
      title: "Order Details",
      content: <OrderDetails accordian={accordian} />,
      description: " Mention the company name if it’s a B2B order.",
    },
    {
      title: "Pickup Address",
      content: <PickupAddress accordian={accordian} />,
      description: " Mention the company name if it’s a B2B order.",
    },

    {
      title: "Other Details",
      content: <OtherDetails accordian={accordian} />,
      description: " Mention the company name if it’s a B2B order.",
    },
  ];
  return (
    <div className="px-8 pr-12 sm:px-4 sm:pr-4 pt-6 bg-skin-fill-main">
      <h1 className="font-sans text-5xl text-skin-base tracking-tight sm:text-3xl">
        Custom Order
      </h1>
      <p className="font-sans text-skin-muted ml-1 text-xl leading-5 font-regular sm:text-lg">
        Complete the Steps to proceed further
      </p>
      {/* Accordian */}
      {steps.map((step, index) => (
        <>
          <div
            className={`flex mt-4 w-full border-2  border-base justify-between pr-5 hover:bg-skin-fill-muted ${rounded} cursor-pointer sm:pr-3`}
            onClick={() => {
              setAccordian(accordian === "hidden" ? "" : "hidden");
              setRounded(
                rounded === "rounded-lg" ? "rounded-t-lg" : "rounded-lg"
              );
            }}>
            <div className="p-3 px-5 grow sm:px-3 sm:py-2 ">
              <h3 className="font-sans text-skin-base text-3xl sm:text-xl">
                {step.title}
              </h3>
              <p className="font-sans leading-4 text-skin-muted sm:text-sm sm:leading-4">
                Mention the company name if it’s a B2B order.
              </p>
            </div>
            <div className="flex items-center">
              <MdKeyboardArrowDown className="text-2xl text-skin-base mx-auto" />
            </div>
          </div>
          {/* Accordian Content */}
          <div>{step.content}</div>
        </>
      ))}
    </div>
  );
}

export default Orders;
