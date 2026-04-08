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
      className={`rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)] p-6 text-left font-[Inter] ${className}`}
    >
      <p className="mb-3 text-lg font-semibold text-[var(--text-muted)]">{title}</p>
      <h2 className="text-3xl font-bold leading-tight lg:text-4xl" style={valueStyle}>
        {currencySymbol} {amount}
      </h2>
    </div>
  );
};

export default Card;
