"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CakeCuttingSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const knifeX = useTransform(scrollYProgress, [0, 1], [80, -10]);
  const knifeY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const flameScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const glowIntensity = useTransform(scrollYProgress, [0, 1], [0.25, 0.7]);

  return (
    <section
      ref={ref}
      className="section-padding relative flex flex-col items-center gap-10 md:flex-row md:items-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,201,143,0.16),transparent_60%)] opacity-60" />

      <div className="relative z-10 flex-1 space-y-4 text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
          A little closer
        </p>
        <h2 className="font-display text-3xl text-cream-100 md:text-4xl">
          The moment the knife meets the cake
        </h2>
        <p className="max-w-lg text-sm text-cream-200/85">
          As you scroll, the knife glides in – like the seconds before we make a
          wish together. Close your eyes for a heartbeat and imagine my hand
          holding yours.
        </p>
      </div>

      <div className="relative z-10 mt-4 flex-1 md:mt-0">
        <div className="glass-panel relative mx-auto h-72 max-w-md overflow-hidden rounded-3xl border border-cream-50/10">
          {/* Ambient lighting pulse */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,201,143,0.28),transparent_60%)]"
            style={{ opacity: glowIntensity }}
          />

          <div className="relative flex h-full items-center justify-center overflow-hidden">
            {/* Cake re-use */}
            <div className="relative h-40 w-56 overflow-hidden rounded-2xl border border-cream-50/8 bg-black/60 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
              <Image
                src="/cake-main.svg"
                alt="Birthday cake ready to be cut"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Candle flames with flicker */}
              <motion.div
                className="absolute -top-5 left-8 flex gap-4"
                style={{ scaleY: flameScale }}
                animate={{
                  opacity: [0.85, 1, 0.9],
                  x: [0, 1.2, 0],
                }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {[0, 1].map((i) => (
                  <div key={i} className="relative h-7 w-3">
                    <div className="absolute bottom-0 left-1/2 h-4 w-[2px] -translate-x-1/2 rounded-full bg-cream-200/90" />
                    <div className="absolute -top-1 left-1/2 h-4 w-2 -translate-x-1/2 rounded-full bg-gradient-to-t from-gold-soft via-cream-200 to-white drop-shadow-[0_0_12px_rgba(255,220,170,0.9)]" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Knife moving toward cake */}
            <motion.div
              className="pointer-events-none absolute right-4 top-6 h-40 w-32"
              style={{ x: knifeX, y: knifeY }}
            >
              <div className="relative h-full w-full">
                <div className="absolute right-2 top-6 h-1/2 w-[3px] rotate-[-18deg] bg-gradient-to-b from-cream-100 via-cream-200 to-gold-soft shadow-[0_0_24px_rgba(255,255,255,0.25)]" />
                <div className="absolute bottom-10 right-4 h-10 w-[10px] rotate-[-18deg] rounded-full bg-gradient-to-b from-rose-soft via-gold-soft to-rose-soft shadow-[0_0_18px_rgba(0,0,0,0.5)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


