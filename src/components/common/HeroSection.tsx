import React from "react";

import banner from "../../../public/assets/image/bg_2.png";
import Image from "next/image";

const HeroSection = ({ label, value }: any) => {
  return (
    <div className="w-full h-[440px] 2xl:h-[770px] ">
      <div className="relative w-full h-full flex justify-center item-end">
        <div className="absolute -z-10 w-screen ">
          <div className="hidden md:flex justify-end items-start w-screen">
            <Image
              src={banner}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="w-full h-full px-6 md:px-16">
          <div className="flex justify-center item-center flex-col h-full gap-4">
            <div className=" flex flex-row w-[fit-content] box-sizing-border">
              <div className="p-2 flex flex-row justify-center w-[40px] h-[4px] box-sizing-border">
                <div className="rounded-[2px] bg-[#096F0F] w-[40px] h-[4px]"></div>
              </div>
              <p className="break-words font-mono font-medium text-xs  tracking-[1.1px] leading-[1.273] uppercase text-content-secondary">
                {label}
              </p>
            </div>
            <p className=" break-words font-mono font-bold text-xl md:text-3xl leading-[1.167] text-tertiary">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
