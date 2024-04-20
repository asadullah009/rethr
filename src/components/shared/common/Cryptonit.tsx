import Image from "next/image";
import React from "react";

const Cryptonit = ({ icon, label }: any) => {
  return (
    <div className="flex flex-row gap-6 w-[fit-content] box-sizing-border px-6 md:px-0 py-2">
      <div className="bg-background-tertiary w-[44px] h-[44px] rounded-full flex justify-center items-center">
        <Image src={icon} alt="logo" width={14} height={13} />
      </div>
      <div className="py-2 break-words font-['Open_Sans'] font-normal text-xs leading-[1.714] test-primary">
        {label}
      </div>
    </div>
  );
};

export default Cryptonit;
