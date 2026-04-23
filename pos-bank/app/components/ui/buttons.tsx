import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Icons from "../icons";

export type ButtonsType = {
  className?: string;
  showIcons?: boolean;
  label: string
  iconButton?: string
  iconsFill?: CSSProperties["fill"];
  onClick?: () => void;
};

const Buttons: NextPage<ButtonsType> = ({
  className = "",
  label = "new-transaction",
  showIcons = true,
  iconButton = "create",
  iconsFill = "var(--text-inverse)",
  onClick,
}) => {
  const hasIcon = !!showIcons;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex w-fit items-center justify-center py-3 rounded-lg bg-[var(--color-primary)] col-[1] row-[1] shrink-0 text-center text-base text-[var(--text-inverse)] cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)] ${hasIcon ? "gap-2 pl-4 pr-3" : "px-4"} ${className}`}
    >
      {!!showIcons && (
        <Icons
          icon={iconButton}
          className="!static !w-[18px] !h-[18px]"
          iconsFill={iconsFill}
        />
      )}
      <span className="leading-none" style={{ textShadow: "0px 4px 4px color-mix(in srgb, var(--text-strong) 25%, transparent)" }}>
        {label}
      </span>
    </button>
  );
};

export default Buttons;
