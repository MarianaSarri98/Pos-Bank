"use client";
import type { NextPage } from "next";
import { useEffect, useMemo, useState, type CSSProperties } from "react";

export type IconsType = {
  className?: string;

  /** Variant props */
  icon?: string;

  /** Style props */
  iconsLeft?: CSSProperties["left"];
  iconsOverflow?: CSSProperties["overflow"];
  iconsTop?: CSSProperties["top"];
  iconsFill?: CSSProperties["fill"];
  ariaLabel?: string;
};

const Icons: NextPage<IconsType> = ({
  className = "",
  icon = "create",
  iconsLeft,
  iconsOverflow,
  iconsTop,
  iconsFill,
  ariaLabel,
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

  useEffect(() => {
    const probe = new window.Image();

    probe.onload = () => {
      setFailedIconName(null);
    };

    probe.onerror = () => {
      setFailedIconName(normalizedIconName);
    };

    probe.src = `/assets/${normalizedIconName}`;
  }, [normalizedIconName]);

  const iconsStyle: CSSProperties = useMemo(() => {
    return {
      left: iconsLeft,
      overflow: iconsOverflow,
      top: iconsTop,
      backgroundColor: iconsFill ?? "currentColor",
      WebkitMaskImage: `url(${iconSrc})`,
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      WebkitMaskSize: "contain",
      maskImage: `url(${iconSrc})`,
      maskRepeat: "no-repeat",
      maskPosition: "center",
      maskSize: "contain"
    };
  }, [iconsFill, iconsLeft, iconsOverflow, iconsTop, iconSrc]);

  return (
    <div
      className={`inline-flex items-center justify-center w-[18px] h-[18px] shrink-0 overflow-hidden ${className}`}
      style={iconsStyle}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    />
  );
};

export default Icons;
