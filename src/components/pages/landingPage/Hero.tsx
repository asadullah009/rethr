import React from "react";
import banner from "../../../../public/assets/image/banner.svg";
import mobilBanner from "../../../../public/assets/icons/banner.png";
import Button from "../../shared/button/Button";
import Image from "next/image";
import CurrencyLable from "../../shared/common/CurrencyLable";

const Hero = () => {
  return (
    <div className=" w-screen h-full md:h-[610px] ">
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="absolute -z-10 w-full ">
          <div className="hidden md:flex justify-end items-start">
            <Image src={banner} alt="logo" width={1200} height={1000} />
          </div>
          
        </div>
        <div className="w-full h-full px-4  md:px-16">
          <div className="flex justify-start md:justify-center item-start flex-col h-full gap-4 py-5">
            <p className="font-bold font-mono text-lg md:text-2xl ">
              Everything will <br /> be tokenized <br />
              and connected <br />
              by a blockchain <br />
              one day.
            </p>
            <Button text="Learn more" href="/" variant="simple" />
          </div>

          <div className="flex justify-between max-w-[1298px] items-center flex-col md:flex-row gap-5 md:px-12 px-4 md:py-16 py-6 rounded bg-[linear-gradient(180deg,#424242_0%,#000000_98.3%)]">
            <h1 className="text-white font-mono text-lg font-bold">CryptoCurrency:</h1>
            <div className="flex justify-center gap-5 md:gap-10 items-center flex-col md:flex-row">
              <CurrencyLable
                icon="./assets/icons/greenArrow.svg"
                label="BTC"
                value="$8868.78(+5.6%)"
              />
              <CurrencyLable
                icon="./assets/icons/greenArrow.svg"
                label="BTC"
                value="$8868.78(+5.6%)"
              />
              <CurrencyLable
                icon="./assets/icons/greenArrow.svg"
                label="BTC"
                value="$8868.78(+5.6%)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
