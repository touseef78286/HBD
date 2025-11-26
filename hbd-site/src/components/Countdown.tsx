"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetThisYear = new Date(currentYear, 11, 3, 0, 0, 0); // 3 December (month is 0-based)

  const target =
    targetThisYear.getTime() > now.getTime()
      ? targetThisYear
      : new Date(currentYear + 1, 11, 3, 0, 0, 0);

  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
  ];

  return (
    <div className="mt-8 flex w-full flex-col items-center gap-4 text-xs uppercase tracking-[0.18em] text-cream-200/80">
      <span className="text-[10px] text-cream-200/70">
        Until 3 December – celebrating you, Sawera
      </span>
      <div className="grid w-full max-w-xl grid-cols-4 gap-3">
        {units.map((unit) => (
          <motion.div
            key={unit.key}
            className="glass-panel flex flex-col items-center justify-center rounded-2xl border border-gold-soft/20 bg-black/40 py-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <motion.span
              key={timeLeft[unit.key]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="text-lg font-semibold text-gold-soft"
            >
              {timeLeft[unit.key].toString().padStart(2, "0")}
            </motion.span>
            <span className="mt-1 text-[10px] text-cream-200/70">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


