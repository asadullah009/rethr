import Image from "next/image";
import React from "react";
import Cryptonit from "../../shared/common/Cryptonit";
import Heading from "../../shared/common/Heading";

export const TokenRate = () => {
  return (
    <div className="grid grid-cols-2 gap-8  md:mt-36">
      <div className="col-span-2 xmd:col-span-1 ">
        <Heading label="Token Rate" />
        <div className="flex flex-row justify-centerpx-6">
          <Image
            src="/assets/image/Graph.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="80dvw"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>
      <div className="col-span-2 xmd:col-span-1 ">
        <Heading label="About Cryptonit" />
        <div className="px-6 inline-block self-end break-words font-['Open_Sans'] font-normal text-md leading-[1.5] test-primary">
          Looking cautiously round, to ascertain that they were not overheard,
          the two hags cowered nearer to the fire, and chuckled heartily.
        </div>

        <Cryptonit
          icon="/assets/icons/heart.svg"
          label="Health Blockchain System"
        />
        <Cryptonit
          icon="/assets/icons/globe.svg"
          label="Global Worldwide Blockchain Project"
        />
        <Cryptonit icon="/assets/icons/flag.svg" label="Innovative concept" />

        <p className="py-2 px-6 break-words font-['Open_Sans'] font-normal text-md text-content-secondary">
          Learn more about the unique Rethr concept
        </p>
      </div>
    </div>
  );
};
