"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type IconsType = {
  className?: string;

  /** Variant props */
  icon?: string;

  /** Style props */
  iconsLeft?: CSSProperties["left"];
  iconsOverflow?: CSSProperties["overflow"];
  iconsTop?: CSSProperties["top"];
  iconsFill?: CSSProperties["fill"];
};

const Icons: NextPage<IconsType> = ({
  className = "",
  icon = "delete",
  iconsLeft,
  iconsOverflow,
  iconsTop,
  iconsFill
}) => {
  const iconsStyle: CSSProperties = useMemo(() => {
    return {
      left: iconsLeft,
      overflow: iconsOverflow,
      top: iconsTop,
      fill: iconsFill
    };
  }, [iconsLeft, iconsOverflow, iconsTop, iconsFill]);

  return (
    <div
      className={`absolute top-[calc(50%_-_7.5px)] left-[calc(50%_+_72px)] w-[18px] h-[18px] overflow-hidden ${className}`}
      style={iconsStyle}
    >
      {icon === "create" && (
        <Image
          className="absolute h-3/4 w-9/12 top-[12.78%] right-[12.22%] bottom-[12.22%] left-[12.78%] max-w-full overflow-hidden max-h-full"
          width={13.5}
          height={13.5}
          sizes="100vw"
          alt=""
          src="/Vector.svg"
        />
      )}
      {icon === "edit" && (
        <Image
          className="absolute h-[41.67%] w-[41.67%] top-[12.78%] right-[12.22%] bottom-[45.56%] left-[46.11%] max-w-full overflow-hidden max-h-full"
          width={7.5}
          height={7.5}
          sizes="100vw"
          alt=""
          src="/Vector1.svg"
        />
      )}
      {icon === "delete" && (
        <>
          <Image
            className="absolute h-3/4 w-9/12 top-[12.78%] right-[12.22%] bottom-[12.22%] left-[12.78%] max-w-full overflow-hidden max-h-full"
            width={13.5}
            height={13.5}
            sizes="100vw"
            alt=""
            src="/Vector.svg"
          />
          <Image
            className="absolute h-[41.67%] w-[41.67%] top-[12.78%] right-[12.22%] bottom-[45.56%] left-[46.11%] max-w-full overflow-hidden max-h-full"
            width={7.5}
            height={7.5}
            sizes="100vw"
            alt=""
            src="/Vector1.svg"
          />
        </>
      )}
    </div>
  );
};

export default Icons;
