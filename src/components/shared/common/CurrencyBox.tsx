import Image from "next/image";

const CurrencyBox = ({ iconSrc, currency, value, marketCap }: any) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-4">
        <div className="flex flex-row justify-center w-md h-md box-sizing-border">
          <Image src={iconSrc} alt="logo" width={16} height={16} />
        </div>
        <span className="break-words font-mono font-bold text-md text-[#000000]">
          {currency}
        </span>
      </div>
      <p className="py-2 break-words font-mono font-medium text-xs tracking-[0.5px] leading-[1.714] test-primary">
        {value}
      </p>
      <div className="flex flex-row w-[fit-content] box-sizing-border gap-2">
        <span className="break-words font-mono font-medium text-xs tracking-[0.5px] leading-[1.714] text-[#8F8F8F]">
          Cap.:
        </span>
        <span className="break-words font-mono font-medium text-xs tracking-[0.5px] leading-[1.714] text-[#8F8F8F]">
          {marketCap}
        </span>
      </div>
    </div>
  );
};

export default CurrencyBox;
