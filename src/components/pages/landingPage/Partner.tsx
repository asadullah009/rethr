"use client";
import Image from "next/image";
import React, { useState } from "react";
import banner from "../../../../public/assets/image/Video.png";
import Heading from "../../shared/common/Heading";
import Button from "../../shared/button/Button";

const Partner = () => {
  // Define user data array
  const data = [
    {
      id: 1,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_1.png",
    },
    {
      id: 2,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_2.png",
    },
    {
      id: 3,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_3.png",
    },
    {
      id: 4,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_4.png",
    },
    {
      id: 5,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_5.png",
    },
    {
      id: 6,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_6.png",
    },
    {
      id: 7,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_7.png",
    },
    {
      id: 8,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_8.png",
    },
    {
      id: 9,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_9.png",
    },
    {
      id: 10,
      title: "Veom",
      subTitle: "Equatorial Guinea",
      userpic: "/assets/image/part_10.png",
    },
  ];

  return (
    <>
      <div className="w-full px-6  md:px-16 grid grid-cols-12 lg:grid-cols-5 gap-4">
        {data.map((user) => (
          <div key={user.id} className="col-span-12 md:col-span-4 lg:col-span-1 flex flex-row items-center justify-center w-full gap-2">
            <div className="flex flex-col box-sizing-border">
              <div className="rounded-[4px]  flex flex-row justify-center  box-sizing-border">
                <Image
                  src={user.userpic}
                  alt="logo"
                  width={200}
                  height={113}
                  className="pb-6 rounded"
                />
              </div>
              <div className=" inline-block self-start break-words font-mono font-bold text-md text-tertiary">
                {user.title}
              </div>
              <span className="self-start break-words font-mono font-medium text-xs tracking-[0.5px] text-[#8F8F8F]">
                {user.subTitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:flex relative mt-48 w-screen h-full  justify-center items-center">
        <div className="absolute -z-10 w-full">
          <div className="hidden md:flex justify-end items-start ">
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
        <div className="flex flex-col justify-start items-start w-full px-16 gap-24">
          <Heading label="Video Presentation" />

          <div>
            <h1 className="inline-block break-words font-mono font-bold py-4 text-2xl leading-[1.2] text-[#FFFFFF]">
              Revolution in virtua
            </h1>
            <Button text="WATCH VIDEO" href="/" variant="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
