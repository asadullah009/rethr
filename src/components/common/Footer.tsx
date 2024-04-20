"use client";
import React, { useState } from "react";

// **Import Custom Buttons **
import NavLink from "../shared/button/NavLink";
import Icons from "../shared/Icons/Icons";
import Image from "next/image";
import Heading from "../shared/common/Heading";

const Footer = () => {
  // State
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "What is an RETHR?" },
    { href: "/", text: "About Bulla Coin" },
    { href: "/", text: "Architecture" },
    { href: "/", text: "Whitepaper" },
    { href: "/", text: "Road Map" },
    { href: "/", text: " Map" },
    { href: "/", text: "Blockchain" },
  ];

  const openSideBar = () => {
    setOpen(!open);
  };

  return (
    <footer>
      <div className="grid grid-cols-12 bg-background-primary gap-6 px-8 items-center">
        <div className="col-span-12 lg:col-span-4 flex flex-col items-center box-sizing-border lg:ps-16">
          <Heading label="About Rethr" />
          <div className="md:ps-16 inline-block self-end break-words font-['Open_Sans'] font-normal text-md leading-[1.5] text-tertiary">
            Looking cautiously round, to ascertain that they were not overheard,
            the two hags cowered nearer to the fire, and chuckled heartily.
          </div>
          <div className="grid grid-cols-3  gap-x-6 lg:gap-x-12 gap-y-6 py-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                text={link.text}
                variant=""
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-center justify-center mx-auto box-sizing-border lg:ps-16">
          <Heading label="Latest Tweets" />

          <div className=" inline-block self-start break-words font-mono font-medium text-[12px] tracking-[1.1px] leading-[1.167] uppercase text-[#666666]">
            25 september 2022
          </div>
          <p className=" self-start break-words font-mono font-bold text-xs leading-[1.714] test-primary">
            merkulov @merkulov_d
          </p>
          <div className="rounded-[4px] flex flex-row justify-start box-sizing-border self-start">
            <Image
              src="/assets/image/image_1.png"
              alt="logo"
              width={400}
              height={149}
            />
          </div>
          <span className="self-start break-words font-['Open_Sans'] font-normal text-md text-tertiary">
            News about cryptonit payment…
          </span>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-center justify-center mx-auto box-sizing-border lg:ps16">
          <Heading label="Subscribe to newsletter" />

          <div className="rounded-[8px] border self-start border-[#0496FF] bg-[#FFFFFF] relative p-[10px_16px_10px_16px] w-[80%] box-sizing-border">
            <span className="break-words font-['Open_Sans'] font-normal text-xs leading-[1.714] text-[#6B6B6B]">
              Email
            </span>
          </div>
          <p className="py-2 break-words w-[80%] self-start font-['Open_Sans'] font-normal text-xs leading-[1.714] text-tertiary">
            Looking cautiously round, to ascertain that they were not overheard,
            the two hags cowered nearer to the fire, and chuckled heartily.
          </p>
        </div>
        <div className="col-span-12 flex py-12 items-center justify-center ">
          <span className="self-start break-words font-['Open_Sans'] font-normal text-xs text-[#858585]">
            © 2023 Rethr — Bitcoin, Cryptocurrency and ICO Sketch Template
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
