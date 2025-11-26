"use client";

import { motion } from "framer-motion";

// Soft vignette + bokeh glow in the background
export const BackgroundEffects = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <motion.div
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-gold-soft/15 blur-3xl"
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-soft/20 blur-3xl"
        animate={{ y: [0, 24, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};


