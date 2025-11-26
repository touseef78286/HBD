"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Countdown } from "./Countdown";

// Minimal confetti pieces for a subtle, elegant effect
const CONFETTI = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: 5 + Math.random() * 90,
  delay: Math.random() * 8,
  duration: 10 + Math.random() * 8,
  size: 6 + Math.random() * 10,
  rotate: Math.random() * 180,
}));

export const HeroSection = () => {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useTransform(tiltY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(tiltX, [-0.5, 0.5], [-12, 12]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      tiltX.set(x);
      tiltY.set(y);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [tiltX, tiltY]);

  return (
    <section className="section-padding relative flex min-h-[90vh] flex-col items-center justify-center gap-10 text-center md:flex-row md:items-stretch md:gap-16">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-gradient-to-b from-gold-soft/35 via-gold-soft/8 to-transparent blur-3xl" />

      {/* Hero text */}
      <motion.div
        className="relative z-10 flex-1 space-y-6"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.28em] text-cream-200/70">
          For my love, Sawera
        </p>
        <h1 className="font-display text-4xl leading-tight text-glow-soft md:text-5xl lg:text-6xl">
          Happy Birthday,{" "}
          <span className="text-gold-soft drop-shadow-[0_0_24px_rgba(241,201,143,0.85)]">
            Sawera
          </span>{" "}
          — 3 December
        </h1>
        <p className="mx-auto max-w-xl text-sm text-cream-200/85 md:text-base">
          Tonight is about your light. This is our little universe, glowing in
          gold just for you. Scroll down and let me show you how much you mean
          to me.
        </p>

        <Countdown />

        <div className="mt-6 flex items-center justify-center gap-3 text-[11px] text-cream-200/70">
          <span className="inline-flex h-[1px] w-10 bg-cream-200/30" />
          <span>Scroll to begin the celebration</span>
          <span className="inline-flex h-[1px] w-10 bg-cream-200/30" />
        </div>
      </motion.div>

      {/* Cake + candles */}
      <motion.div
        className="relative z-10 mt-4 flex-1 md:mt-0"
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <div className="glass-panel relative mx-auto h-80 max-w-sm rounded-[34px] border border-cream-50/10 p-6">
          <div className="absolute inset-x-10 -top-10 h-32 rounded-full bg-black/80 blur-3xl" />

          <div className="relative flex h-full flex-col items-center justify-center">
            <div className="relative">
              {/* Candle flames */}
              <div className="absolute left-6 -top-8 flex gap-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="relative h-8 w-4"
                    animate={{
                      scaleY: [1, 1.2, 1],
                      opacity: [0.9, 1, 0.85],
                      x: [0, i === 1 ? 1 : -1, 0],
                    }}
                    transition={{
                      duration: 1.4 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute bottom-0 left-1/2 h-5 w-[2px] -translate-x-1/2 rounded-full bg-cream-200/90" />
                    <div className="absolute -top-1 left-1/2 h-5 w-3 -translate-x-1/2 rounded-full bg-gradient-to-t from-gold-soft via-cream-200 to-white drop-shadow-[0_0_16px_rgba(255,220,170,0.9)]" />
                  </motion.div>
                ))}
              </div>

              {/* Cake image */}
              <div className="relative overflow-hidden rounded-[28px] border border-cream-50/10 bg-gradient-to-b from-cream-100/6 via-cream-100/2 to-black/80 shadow-[0_26px_60px_rgba(0,0,0,0.85)]">
                <div className="relative h-52 w-64">
                  <Image
                    src="/cake-main.svg"
                    alt="Elegant birthday cake with candles for Sawera"
                    fill
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                <div className="px-4 pb-4 pt-3 text-left">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-cream-200/60">
                    A night in gold
                  </p>
                  <p className="mt-1 text-sm text-cream-100/90">
                    A wish, a flame, and all my heart –
                    <span className="text-gold-soft"> for you, Sawera.</span>
                  </p>
                </div>
              </div>

              {/* Glow under cake */}
              <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-gold-soft/45 blur-2xl" />
            </div>
          </div>
        </div>

        {/* Minimal confetti */}
        <div className="pointer-events-none absolute inset-0">
          {CONFETTI.map((item) => (
            <motion.span
              key={item.id}
              className="absolute h-2 w-[6px] rounded-[2px] bg-gold-soft/80"
              style={{
                left: `${item.left}%`,
                top: -20,
              }}
              initial={{
                y: 0,
                opacity: 0,
                rotate: item.rotate,
              }}
              animate={{
                y: 260,
                opacity: [0, 0.8, 0],
                rotate: item.rotate + 60,
              }}
              transition={{
                delay: item.delay,
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};


