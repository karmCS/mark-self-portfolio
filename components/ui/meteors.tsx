"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number, className }: MeteorProps) => {
  const [meteorStyles, setMeteorStyles] = useState<
    { top: string; left: string; animationDelay: string; animationDuration: string }[]
  >([]);

  useEffect(() => {
    const count = number || 20;
    const styles = Array.from({ length: count }, () => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: (Math.random() * 8) + "s",
      animationDuration: Math.floor(Math.random() * 8 + 4) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "pointer-events-none absolute h-px w-[150px] rotate-[215deg] animate-meteor-effect",
            "bg-gradient-to-l from-slate-400 via-slate-300 to-transparent opacity-0",
            className
          )}
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        >
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-[3px] rounded-full bg-slate-300 shadow-[0_0_4px_2px_rgba(148,163,184,0.4)]" />
        </span>
      ))}
    </>
  );
};
