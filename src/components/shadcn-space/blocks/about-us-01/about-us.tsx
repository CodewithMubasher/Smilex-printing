"use client"

import { cn } from "@/lib/utils";
import { LucideIcon, Plus } from "lucide-react";
import { Instrument_Serif } from "next/font/google";
import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

type aboutusData = {
  icon: LucideIcon;
  title: string;
  color: string;
}[];

type statisticsCounter = {
  title: string;
  count: number;
}[];

const AnimatedCounter = ({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const AboutUs = ({
  aboutusData,
  statisticsCounter,
}: {
  aboutusData: aboutusData;
  statisticsCounter: statisticsCounter;
}) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="lg:py-20 sm:py-16 py-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground text-center tracking-tight mt-14 sm:mt-20">
              Vibrant designs, high-quality prints — making your brand stand out.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 sm:gap-x-2 sm:gap-y-4">
              {aboutusData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-5 sm:py-1.5 rounded-full",
                    item.color
                  )}
                >
                  <item.icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                  <span
                    className={cn(
                      "text-base sm:text-3xl font-normal",
                      instrumentSerif.className
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <div
            ref={statsRef}
            className="w-full grid grid-cols-3 gap-1 sm:gap-0"
          >
            {statisticsCounter?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative px-2 py-3 sm:px-6 sm:py-8 gap-2 sm:gap-2 flex flex-col items-center justify-center"
                >
                  {index !== 0 && (
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 sm:h-24 bg-border" />
                  )}
                  <div className="flex gap-0 sm:gap-2 text-4xl sm:text-5xl md:text-6xl font-medium">
                    <Plus
                      strokeWidth={3.5}
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                    />
                    <AnimatedCounter
                      value={value.count}
                      isInView={isInView}
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-normal text-muted-foreground text-center">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
