import Image from "next/image";
import React from "react";

const CurrencyLable = ({ icon, label, value }: any) => {
  return (
    <div className="flex justify-center item-center gap-4">
      <div className="flex justify-center item-center gap-2">
        <Image
          src={icon}
          alt="logo"
          width={16}
          height={16}
        />
        <h2 className="text-white break-words font-bold font-mono text-md">{label}</h2>
      </div>
      <p className="text-white break-words font-mono font-medium text-xs">{value}</p>
      
    </div>
  );
};

export default CurrencyLable;
