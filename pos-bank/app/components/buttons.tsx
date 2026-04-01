"use client";
import type { NextPage } from "next";
import { type CSSProperties } from "react";
import Icons from "./icons";

export type ButtonsType = {
  className?: string;
  showIcons?: boolean;
  label: string
  iconButton?: string
  iconsFill?: CSSProperties["fill"];
};

const Buttons: NextPage<ButtonsType> = ({
  className = "",
  label = "new-transaction",
  showIcons = true,
  iconButton = "create",
  iconsFill = "white"
}) => {
  return (
    <div
      className={`w-[190px] h-[45px] relative rounded-lg bg-color-primary col-[1] row-[1] shrink-0 text-center text-lg text-color-white-solid font-[Inter] ${className}`}
    >
      <div className="absolute top-[calc(50%_-_13.5px)] left-[calc(50%_-_67px)] w-[134px] h-[25px]">
        <div className="absolute top-[0px] left-[0px] grid grid-cols-[auto] [align-content:start] !pt-[3px] shrink-0">
          <div className="w-[134px] relative flex items-center justify-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] col-[1] row-[1]">
            {label}
          </div>
        </div>
      </div>
      {!!showIcons && (
        <Icons
          icon={iconButton}
          iconsLeft="calc(50% - 90px)"
          iconsOverflow="unset"
          iconsTop="calc(50% - 7.5px)"
          iconsFill={iconsFill}
        />
      )}
    </div>
  );
};

export default Buttons;
