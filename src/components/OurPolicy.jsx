import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row text-center gap-12 sm:gap-2 justify-around py-20 text-xs md:text-base sm:text-sm text-gray-700">
      <div className="">
        <img
          src={assets.exchange_icon}
          alt="exchange"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">
          We offer hassle free exchange policy for our customers
        </p>
      </div>
      <div className="">
        <img
          src={assets.quality_icon}
          alt="quality"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">7 days Return Policy</p>
        <p className="text-gray-400">
          We provide 7 days return policy for our customers
        </p>
      </div>
      <div className="">
        <img
          src={assets.support_img}
          alt="support"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">
          we proviide best customer support to our customers
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
