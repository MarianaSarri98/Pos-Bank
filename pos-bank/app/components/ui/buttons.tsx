import type { NextPage } from "next";
import Icons from "../icons";

export type ButtonsType = {
  className?: string;
  showIcons?: boolean;
  label: string;
  iconButton?: string;
  iconsFill?: string;
  onClick?: () => void;
};

const Buttons: NextPage<ButtonsType> = ({
  className = "",
  label,
  showIcons = true,
  iconButton = "create",
  iconsFill = "var(--text-inverse)",
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex w-fit cursor-pointer items-center justify-center rounded-lg bg-[var(--color-primary)] text-base text-[var(--text-inverse)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${showIcons ? "gap-2 py-3 pl-4 pr-3" : "px-4 py-3"} ${className}`}
    >
      {showIcons && (
        <Icons icon={iconButton} iconsFill={iconsFill} />
      )}
      <span className="leading-none" style={{ textShadow: "0px 4px 4px color-mix(in srgb, var(--text-strong) 25%, transparent)" }}>
        {label}
      </span>
    </button>
  );
};

export default Buttons;
