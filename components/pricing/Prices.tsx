import { PricingData } from "@/utils/utils";
import React from "react";

const Prices = () => {
  return (
    <section className="grid bg-black min-h-[400px] sm:min-h-[500px] pb-24 sm:pb-16  md:pb-20 lg:pb-24 place-items-center relative -top-6 sm:-top-8 md:-top-10">
      <div className=" absolute w-full sm:w-10/12 lg:w-8/12 -top-10 sm:-top-16 md:-top-20 mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 text-white">
          {PricingData.map((price) => {
            return (
              <div
                key={price.plan}
                className="grid gap-4 sm:gap-6 bg-[#222227] py-6 sm:py-8 px-6 sm:px-8 md:px-10 lg:px-12 rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              >
                <h5 className="font-bold text-lg sm:text-xl text-[#FF007F] text-center md:text-left">
                  {price.plan}
                </h5>
                <p className="text-2xl sm:text-3xl font-bold text-center md:text-left">
                  {price.amount}
                </p>
                <p className="text-lg sm:text-xl font-normal text-center md:text-left">
                  {price.description}
                </p>
                <button type="button" className="btn w-full sm:w-auto">
                  {price.btn}
                </button>
                <div className="flex gap-3 items-start justify-start">
                  <div className="grid gap-3 sm:gap-4 md:gap-5">
                    {price.Link.map((text) => {
                      return (
                        <div key={text.text} className="flex items-start gap-3">
                          <p className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] mt-2 rounded-full bg-[#FF007F]"></p>
                          <p className="text-base sm:text-lg">{text.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prices;
