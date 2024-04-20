"use client";
import { subscribe } from "diagnostics_channel";
import Image from "next/image";
import React, { useState } from "react";

const Post = () => {
  // Define user data array
  const data = [
    {
      id: 1,
      title: "Legendary Billionaire Investor Carl Icahn Shuns Bitcoin",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/image/image_1.png",
    },
    {
      id: 2,
      title: "Legendary Billionaire Investor Carl Icahn Shuns Bitcoin",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/image/image_2.png",
    },
    {
      id: 3,
      title: "Legendary Billionaire Investor Carl Icahn Shuns Bitcoin",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/image/image_3.png",
    },
  ];

  return (
    <>
      <div className="w-full px-6 md:px-16 grid grid-cols-3 gap-8">
        {data.map((user) => (
          <div key={user.id} className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-row w-full gap-4">
            <div className="shadow-[0px_0px_16px_0px_rgba(173,180,180,0.24)] rounded-[4px] bg-[#FFFFFF] relative flex flex-col p-[30px_30px_31.7px_30px] box-sizing-border">
              <div className="rounded-[4px] flex flex-row justify-center box-sizing-border">
                <Image src={user.userpic} alt="logo" width={297} height={168} />
              </div>
              <div className="inline-block self-start break-words font-mono font-bold text-md leading-[1.5] text-tertiary">
                {user.title}{" "}
              </div>
              <div className="relative  flex flex-row justify-center self-start py-4 box-sizing-border">
                <span className=" break-words font-mono font-medium text-[12px] tracking-[1.1px] leading-[1.167] uppercase text-[#666666]">
                  {user.subTitle}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
