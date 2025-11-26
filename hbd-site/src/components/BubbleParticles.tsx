"use client";

import { motion } from "framer-motion";

const BUBBLES = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: 40 + Math.random() * 40,
  left: Math.random() * 100,
  delay: Math.random() * 12,
  duration: 22 + Math.random() * 10,
}));

// Champagne-like bubbles floating softly in the background
export const BubbleParticles = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {BUBBLES.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-gold-soft/25 bg-gold-soft/6"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -80,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -600, opacity: [0, 0.8, 0] }}
          transition={{
            delay: bubble.delay,
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

