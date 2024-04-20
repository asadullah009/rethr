import React from "react";
import CurrencyBox from "../../shared/common/CurrencyBox";
import { currencyData } from "../../../utils/data";

const PopularCurrency = () => {
  return (
    <div className="grid w-full grid-cols-4 gap-x-16 gap-y-10 px-16">
      {currencyData.map((currency, index) => (
        <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
          <CurrencyBox
            iconSrc={currency.iconSrc}
            currency={currency.currency}
            value={currency.value}
            marketCap={currency.marketCap}
          />
        </div>
      ))}
    </div>
  );
};

export default PopularCurrency;
