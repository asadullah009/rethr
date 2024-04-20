"use client";
import Image from "next/image";
import React, { useState } from "react";

const Team = () => {
  // Define user data array
  const users = [
    {
      id: 1,
      name: "Amara Khan",
      role: "UI/UX Designer",
      userpic: "/assets/image/Userpic_1.png",
    },
    {
      id: 2,
      name: "Siddharth Patel",
      role: "Data Scientist",
      userpic: "/assets/image/Userpic_3.png",
    },
    {
      id: 3,
      name: "Luna Rodriguez",
      role: "Product Manager",
      userpic: "/assets/image/Userpic_4.png",
    },
    {
      id: 4,
      name: "Elijah Kim",
      role: "Software Engineer",
      userpic: "/assets/image/Userpic_1.png",
    },
    {
      id: 5,
      name: "Nadia Ahmed",
      role: "Business Analyst",
      userpic: "/assets/image/Userpic_2.png",
    },
    {
      id: 6,
      name: "Haruki Yamamoto",
      role: "Machine Learning ",
      userpic: "/assets/image/Userpic_3.png",
    },
  ];

  return (
    <div className="w-full px-6 md:px-16 grid grid-cols-2 gap-8">
      {users.map((user) => (
        <div key={user.id} className="col-span-2 md:col-span-1 flex flex-row w-full gap-4 ">
          <Image
            src={user.userpic}
            alt="logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className=" flex flex-col justify-center items-center">
            <div className=" inline-block self-start break-words font-mono font-bold text-md leading-[1.5] text-tertiary">
              {user.name}
            </div>
            <span className=" font-mono font-medium text-xs tracking-[0.5px] text-[#8F8F8F]">
              {user.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
