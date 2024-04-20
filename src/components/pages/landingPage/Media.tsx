import Image from "next/image";
import React from "react";

const Media = () => {
  const data = [
    {
      id: 1,
      title: "“YetToBeNFT is typically bypassed, not penetrated.”",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/icons/pic_1.svg",
    },
    {
      id: 2,
      title: "“YetToBeNFT is typically bypassed, not penetrated.”",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/icons/pic_2.svg",
    },
    {
      id: 3,
      title: "“YetToBeNFT is typically bypassed, not penetrated.”",
      subTitle: "New York Times, 2 April 2018",
      userpic: "/assets/icons/pic_3.svg",
    }
    
  
  ];

  return (
    <div className="w-full px-6 md:px-16 grid grid-cols-3 gap-16">
      {data.map((user) => (
        <div key={user.id} className="col-span-3 md:col-span-2 lg:col-span-1 flex flex-row gap-4">
          <div className="shadow-[0px_0px_16px_0px_rgba(173,180,180,0.24)] p-5 rounded-lg border-[0.2px_solid_#2A2A2A] bg-[#FFFFFF] flex flex-col justify-center">
          <Image
            src={user.userpic}
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
            <p className="py-4 self-start font-mono font-normal text-lg leading-[1.5] text-tertiary">
              {user.title}
            </p>
            <p className="self-start break-words font-mono font-normal text-xs leading-[1.714] text-[#6B6B6B]">
              {user.subTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Media;
