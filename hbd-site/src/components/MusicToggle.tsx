"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Simple music toggle using an <audio> element.
// Replace /soft-birthday.mp3 in /public with your actual audio file for production.
export const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/soft-birthday.mp3");
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        // Ignore autoplay restrictions errors
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      className="group fixed right-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-gold-soft/40 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream-100/85 shadow-lg shadow-black/50 backdrop-blur-md transition hover:border-gold-strong/80 hover:bg-black/70 md:right-8 md:top-8"
    >
      <motion.span
        className="relative flex h-2 w-2 items-center justify-center"
        animate={{
          scale: isPlaying ? [1, 1.2, 1] : 1,
          boxShadow: isPlaying
            ? [
                "0 0 0 0 rgba(241,201,143,0.6)",
                "0 0 0 12px rgba(241,201,143,0)",
              ]
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
        transition={
          isPlaying
            ? { duration: 1.6, repeat: Infinity, ease: "easeOut" }
            : { duration: 0.2 }
        }
      >
        <span className="relative inline-block h-2 w-2 rounded-full bg-gold-soft" />
      </motion.span>
      <span className="font-medium">
        {isPlaying ? "Pause melody" : "Play birthday melody"}
      </span>
    </button>
  );
};


