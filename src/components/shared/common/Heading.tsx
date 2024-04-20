import Image from "next/image";
import React from "react";

const Heading = ({ label }: any) => {
  return (
    <div className="flex justify-start items-start w-full px-6 py-4 md:py-8">
      <div className="py-4 me-6 flex flex-row justify-center box-sizing-border">
        <div className="rounded-[2px] bg-border-tertiary w-[20px] md:w-[40px] h-[4px]"></div>
      </div>
      <span className="break-words font-mono font-bold text-ms md:text-xl leading-[1.5] text-tertiary">
        {label}
      </span>
    </div>
  );
};

export default Heading;
