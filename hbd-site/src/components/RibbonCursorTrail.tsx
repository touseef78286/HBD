"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Point = { x: number; y: number; id: number };

// Very subtle ribbon-like trail following the cursor
export const RibbonCursorTrail = () => {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPoints((prev) => {
        const next: Point[] = [
          ...prev,
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ];
        // keep trail small for subtlety + performance
        return next.slice(-12);
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {points.map((point, index) => (
        <motion.div
          key={point.id}
          className="pointer-events-none absolute h-[2px] w-16 origin-left rounded-full bg-gradient-to-r from-gold-soft/0 via-gold-soft/50 to-gold-soft/0 blur-[1px]"
          style={{
            left: point.x,
            top: point.y,
          }}
          initial={{ opacity: 0, scaleX: 0.2, rotate: -10 }}
          animate={{
            opacity: [0.2, 0.5, 0],
            scaleX: [0.6, 1, 0.4],
            y: [-2 - index * 0.3, -4 - index * 0.4],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};


