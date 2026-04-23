"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";

export type IconsType = {
  className?: string;
  icon?: string;
  iconsFill?: string;
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

  const maskStyle: CSSProperties = useMemo(() => ({
    position: "absolute",
    inset: 0,
    backgroundColor: iconsFill ?? "currentColor",
    WebkitMaskImage: `url(${iconSrc})`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
    maskImage: `url(${iconSrc})`,
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
  }), [iconsFill, iconSrc]);

  return (
    <div
      className={`relative inline-flex items-center justify-center w-[18px] h-[18px] shrink-0 ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {/* next/image para lazy loading e otimização */}
      <Image
        src={iconSrc}
        alt=""
        width={18}
        height={18}
        style={{ opacity: 0, position: "absolute" }}
        onError={() => setFailed(true)}
      />
      {/* div colorida via CSS mask */}
      <div style={maskStyle} />
    </div>
  );
};

export default Icons;
