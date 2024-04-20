import Image from "next/image";
import React from "react";
import Heading from "../../shared/common/Heading";

const Section = () => {
  return (
    <div className="w-full h-full px-6 md:px-16">
      <div className=" flex flex-col w-[fit-content] box-sizing-border">
      <div className="md:py-4 inline-block self-start break-words font-mono font-bold text-xl md:text-3xl leading-[1.25] text-tertiary">
          Know about Rethr and our other projects
        </div>
        <div className="py-4 flex flex-row justify-center  h-[1px] box-sizing-border">
          <div className="bg-[#E6E6E6]  h-[1px]"></div>
        </div>
        <span className="py-4 inline-block break-words font-['Open_Sans'] font-normal text-sm md:text-lg leading-[1.5] text-tertiary">
          Playermon was conceptualized to become the next leading social
          creative metaverse, a play-to-earn NFT game in the blockchain industry
          - a game accessible to everyone, with low entry costs, and provides
          players, creators, and investors with the ability to generate income
          based on their creativity and &#34;playformance&#34;. We aim to
          empower the Playermon community creators, players, and investors!
          <br />
          <br />
          We believe that the metaverse future is about the community where
          work, play and social can happen in the virtual space. We believe in
          empowering the creativity in a community where they could express
          their creativity and show it off to the public in the metaverse while
          enjoying the economic opportunities created.
          <br />
          <br />
          We understand that making a metaverse game and community requires
          time, so in Playermon, we have our tokenomics planned for 10 years
          instead of 2/3 years. Team token, play reward, staking reward are
          allocated for 10 years.
        </span>
        <span className="py-4 inline-block break-words font-['Open_Sans'] font-normal text-sm md:text-lg leading-[1.5] text-tertiary">
          Playermon was conceptualized to become the next leading social
          creative metaverse, a play-to-earn NFT game in the blockchain industry
          - a game accessible to everyone, with low entry costs, and provides
          players, creators, and investors with the ability to generate income
          based on their creativity and &#34;playformance&#34;. We aim to
          empower the Playermon community creators, players, and investors!
          <br />
          <br />
          We believe that the metaverse future is about the community where
          work, play and social can happen in the virtual space. We believe in
          empowering the creativity in a community where they could express
          their creativity and show it off to the public in the metaverse while
          enjoying the economic opportunities created.
          <br />
          <br />
          We understand that making a metaverse game and community requires
          time, so in Playermon, we have our tokenomics planned for 10 years
          instead of 2/3 years. Team token, play reward, staking reward are
          allocated for 10 years.
        </span>
      </div>

      <div className="py-4">
        <Image
          src="/assets/image/bg_3.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <Heading label="Team" />

      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-4 md:col-span-3  py-4">
          <p>
            Presearch has an innovative go-to-market strategy to target the most
            frequent searchers - web workers - and gain early adoption, on our
            way to releasing future versions of the open source platform
          </p>
        </div>
        <div className="col-span-1 py-4 hidden md:inline-block" />

        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-start py-4">
          <Image
            src="/assets/image/team_1.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className=" flex flex-col justify-center items-start px-6 py-4">
            <div className=" inline-block break-words font-mono font-bold text-md test-primary">
              Wajeeh Ul Hassan
            </div>
            <span className=" break-words font-mono font-medium text-xs tracking-[0.5px] text-tertiary">
              Lead Full Stack Developer
            </span>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-start py-4">
          <Image
            src="/assets/image/team_2.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className=" flex flex-col justify-center items-start px-6 py-4">
            <div className=" inline-block break-words font-mono font-bold text-md test-primary">
              Wajeeh Ul Hassan
            </div>
            <span className=" break-words font-mono font-medium text-xs tracking-[0.5px] text-tertiary">
              Lead Full Stack Developer
            </span>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-start py-4">
          <Image
            src="/assets/image/team_3.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className=" flex flex-col justify-center items-start px-6 py-4">
            <div className=" inline-block break-words font-mono font-bold text-md test-primary">
              Wajeeh Ul Hassan
            </div>
            <span className=" break-words font-mono font-medium text-xs tracking-[0.5px] text-tertiary">
              Lead Full Stack Developer
            </span>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-start py-4">
          <Image
            src="/assets/image/team_4.png"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className=" flex flex-col justify-center items-start px-6 py-4">
            <div className=" inline-block break-words font-mono font-bold text-md test-primary">
              Wajeeh Ul Hassan
            </div>
            <span className=" break-words font-mono font-medium text-xs tracking-[0.5px] text-tertiary">
              Lead Full Stack Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
