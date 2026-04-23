import type { NextPage } from "next";

export type CardType = {
  className?: string;
  title?: string;
  currencySymbol?: string;
  amount?: string;
  valueColor?: string;
};

const Card: NextPage<CardType> = ({
  className = "",
  title = "Default",
  currencySymbol = "R$",
  amount = "3000",
  valueColor,
}) => {
  return (
    <div
      className={`rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)] p-6 text-left ${className}`}
    >
      <p className="mb-3 text-lg font-semibold text-[var(--text-muted)]">{title}</p>
      <h2 className="text-3xl font-bold leading-tight lg:text-4xl" style={{ color: valueColor }}>
        {currencySymbol} {amount}
      </h2>
    </div>
  );
};

export default Card;
