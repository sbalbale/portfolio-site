"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={`relative ${className}`} ref={ref}>
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px md:w-0.5 bg-outline/20">
        <motion.div
          className="w-full bg-primary"
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>
      {children}
    </div>
  );
};
