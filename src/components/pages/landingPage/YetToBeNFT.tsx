"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../../shared/button/Button";

const YetToBeNFT = () => {
  const [activeContent, setActiveContent] = useState("For Investors");

  const handleButtonClick = (content: any) => {
    setActiveContent(content);
  };
  return (
    <div className="w-full px-6 md:px-16 grid grid-cols-12">
      <div className="col-span-12 md:col-span-8 box-sizing-border">
        <div className="flex justify-start items-start flex-col text-xs font-semibold font-mono">
          <div className="flex justify-center items-start gap-x-2 md:gap-x-6 text-content-secondary text-xs font-semibold font-mono ">
            <button
              className={`button  ${
                activeContent === "For Investors" && "active"
              }`}
              onClick={() => handleButtonClick("For Investors")}
            >
              <span>For Investors</span>
              {activeContent === "For Investors" && (
                <div className="h-2 bg-button-primary mt-4"></div>
              )}
            </button>
            <button
              className={`button ${
                activeContent === "For Customers" && "active"
              }`}
              onClick={() => handleButtonClick("For Customers")}
            >
              For Customers
              {activeContent === "For Customers" && (
                <div className="h-2 bg-button-primary mt-4"></div>
              )}
            </button>
            <button
              className={`button ${
                activeContent === "For Developers" && "active"
              }`}
              onClick={() => handleButtonClick("For Developers")}
            >
              For Developers
              {activeContent === "For Developers" && (
                <div className="h-2 bg-button-primary mt-4"></div>
              )}
            </button>
          </div>
          <div className=" flex flex-col w-[fit-content] box-sizing-border">
            <div className="py-2 inline-block self-start break-words font-mono font-bold text-md leading-[1.5] text-tertiary">
              {activeContent}
            </div>
            <div className="py-2 inline-block self-start break-words font-mono font-normal text-xs leading-[1.714] text-[#0764E3]">
              Download (PDF 1.2 Mb)
            </div>
            <span className=" py-2 break-words font-['Open_Sans'] w-full md:w-1/2 font-normal text-xs leading-[1.714] text-tertiary">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital assets. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
              aliquid ex ea commodi consequatur
            </span>
            <Button text="More" href="/" variant="simple"/>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-4  box-sizing-border">
        <Image
          src="/assets/image/Sculpture_1.png"
          alt="logo"
          width={376}
          height={397}
        />
      </div>
    </div>
  );
};

export default YetToBeNFT;
