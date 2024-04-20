import Image from "next/image";
import React from "react";

const Section = ({ image, title, subTitle }: any) => {
  return (
    <div className="w-full h-full px-6 md:px-16 grid grid-cols-12 md:gap-4">
      <div className="col-span-12 md:col-span-6 flex justify-center items-center">
        {/* Adjust width and height according to your design */}
        <Image src={image} alt="logo" width={705} height={1058} />
      </div>

      <div className="col-span-12 md:col-span-6 py-8 gap-4 flex flex-col justify-start">
        <div className="break-words font-mono font-bold text-sm md:text-lg text-tertiary">
          {title}
        </div>
        <p className="break-words font-['Open_Sans'] font-normal text-xl md:text-3xl leading-1.5 text-tertiary">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Section;
