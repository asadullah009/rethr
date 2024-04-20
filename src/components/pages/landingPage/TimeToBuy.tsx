"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../shared/button/Button";
import Heading from "../../shared/common/Heading";

const TimeToBuy = () => {
  return (
    <div className="w-full grid grid-cols-12 bg-[#F5F8FC]">
      <div className="col-span-12 lg:col-span-8 box-sizing-border ">
        <Heading label="Time to buy in" />
        <p className="ps-6 md:ps-20 pb-5 font-['Open_Sans'] font-normal text-xs leading-[1.714] text-tertiary">
          In a world where one company controls 77% of all searches, influencing
          trillions of dollars in spending, shaping perceptions and effectively
          acting as the primary gatekeeper to the Internet
        </p>
        <div className="flex-wrap ps-6 md:ps-20 flex flex-col md:flex-row self-start gap-2 pb-4 w-[fit-content] box-sizing-border">
          <div className="rounded-[8px] border-[2px_solid_#0496FF] bg-[#FFFFFF] relative p-[10px_16px_10px_16px] w-[250px] box-sizing-border">
            <span className="break-words font-['Open_Sans'] font-normal text-xs leading-[1.714] test-primary">
              Name
            </span>
          </div>
          <div className="rounded-[8px] border-[2px_solid_#F2F2F2] bg-[#FFFFFF] relative p-[10px_16px_10px_16px] w-[250px] box-sizing-border">
            <span className="break-words font-['Open_Sans'] font-normal text-xs leading-[1.714] text-[#6B6B6B]">
              Email
            </span>
          </div>
          <Button text="Join us" href="/" variant="simple" />
        </div>
      </div>

      <div className="hidden lg:inline-block col-span-4  box-sizing-border">
        <Image
          src="/assets/image/mobil.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default TimeToBuy;
