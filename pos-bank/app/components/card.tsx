"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type CardType = {
  className?: string;

  /** Variant props */
  title?: string

  /** Style props */
  currencySymbol?: string;
  amount?: string;
  valueColor?: CSSProperties["color"];
};

const Card: NextPage<CardType> = ({
  className = "",
  title = "Default",
  currencySymbol = "R$",
  amount = "3000",
  valueColor,
}) => {
  const valueStyle: CSSProperties = useMemo(() => {
    return {
      color: valueColor,
    };
  }, [valueColor]);

  return (
    <div
      className={`w-[372px] h-[110px] rounded-lg text-left text-3xl text-color-azure-11 font-[Inter] ${className}`}
    >
      <h1
        className="!m-0 absolute top-[43.64%] left-[6.18%] text-[length:inherit] font-semibold font-[inherit]"
        style={valueStyle}
      >
        {currencySymbol} {amount}
      </h1>
      <div className="absolute top-[15.45%] left-[6.18%] text-lg font-semibold text-color-disabled">
        {title}
      </div>
    </div>
  );
};

export default Card;
