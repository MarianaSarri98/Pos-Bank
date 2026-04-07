"use client";
import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";
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
  icon = "create",
  iconsLeft,
  iconsOverflow,
  iconsTop,
  iconsFill
}) => {
  const [failedIconName, setFailedIconName] = useState<string | null>(null);

  const normalizedIconName = useMemo(() => {
    const trimmedIcon = icon.trim();
    const withoutExtension = trimmedIcon.replace(/\.(svg|png)$/i, "");
    return `${withoutExtension}.svg`;
  }, [icon]);

  const iconSrc = useMemo(() => {
    if (failedIconName === normalizedIconName) {
      return "/assets/create.svg";
    }

    return `/assets/${normalizedIconName}`;
  }, [failedIconName, normalizedIconName]);

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
      <Image
        className="absolute h-3/4 w-9/12 top-[12.78%] right-[12.22%] bottom-[12.22%] left-[12.78%] max-w-full overflow-hidden max-h-full"
        width={13.5}
        height={13.5}
        sizes="100vw"
        alt={`${icon} icon`}
        src={iconSrc}
        onError={() => {
          if (failedIconName === normalizedIconName) {
            return;
          }

          setFailedIconName(normalizedIconName);
        }}
      />
    </div>
  );
};

export default Icons;
