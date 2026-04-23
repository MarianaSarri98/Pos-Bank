"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

export type IconsType = {
  className?: string;
  icon?: string;
  iconsFill?: CSSProperties["fill"];
  ariaLabel?: string;
};

const Icons: NextPage<IconsType> = ({
  className = "",
  icon = "create",
  iconsFill,
  ariaLabel,
}) => {
  const [failed, setFailed] = useState(false);

  const iconSrc = useMemo(() => {
    if (failed) return "/create.svg";
    const name = icon.trim().replace(/\.(svg|png)$/i, "");
    return `/${name}.svg`;
  }, [failed, icon]);

  return (
    <div
      className={`inline-flex items-center justify-center w-[18px] h-[18px] shrink-0 overflow-hidden ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <Image
        src={iconSrc}
        alt={ariaLabel ?? ""}
        width={18}
        height={18}
        style={{ objectFit: "contain", color: iconsFill ?? "currentColor" }}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default Icons;
