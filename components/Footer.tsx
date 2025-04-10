import { FooterLinks } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-24 pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-[#121212] text-white">
      <div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="w-full md:w-3/12 flex flex-col justify-between text-center md:text-left">
            <div className="flex gap-1 items-center">
              <Image
                src="/icons/vibeLogo.svg"
                alt="vibe Logo"
                width={50}
                height={50}
              />
              <h1 className="text-2xl  font-bold">VibeConnect</h1>
            </div>

            <div className="flex gap-[14px] max-md:mt-6">
              <Image
                src="/icons/facebookvibe.svg"
                alt="facebook"
                width={32}
                height={32}
              />
              <Image
                src="/icons/instagramvibe.svg"
                alt="instagram"
                width={32}
                height={32}
              />
              <Image
                src="/icons/twittervibe.svg"
                alt="x"
                width={32}
                height={32}
              />
              <Image
                src="/icons/youtubevibe.svg"
                alt="youtube"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-0 md:flex md:justify-between">
            {FooterLinks.map((footer, index) => {
              return (
                <div key={index}>
                  <h4 className="text-lg sm:text-xl font-bold">
                    {footer.header}
                  </h4>
                  <ul>
                    {footer.links.map((footlink, linkIndex) => {
                      return (
                        <li key={linkIndex}>
                          <p
                            className={`${
                              footlink.name === "Start Free Trial" &&
                              "border border-[#FF007F] text-[#FF007F] text-xl font-bold text-center rounded-[20px] py-3"
                            } mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl font-normal`}
                          >
                            {footlink.name}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 py-4 sm:py-5 border-t-2 border-white flex  gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-base sm:text-lg lg:text-xl font-bold items-center sm:items-end justify-center sm:justify-end">
          <a href="" className="hover:text-[#FF007F] transition-colors">
            Terms of Use
          </a>
          <a href="" className="hover:text-[#FF007F] transition-colors">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
