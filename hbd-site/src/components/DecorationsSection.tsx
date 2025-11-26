 "use client";

 import { motion, useScroll, useTransform } from "framer-motion";
 import { useRef } from "react";

 const BALLOONS = Array.from({ length: 6 }).map((_, i) => ({
   id: i,
   color:
     i % 3 === 0
       ? "from-gold-soft/80 to-cream-200/90"
       : i % 3 === 1
         ? "from-rose-soft/85 to-gold-soft/90"
         : "from-cream-200/95 to-gold-soft/80",
   left: 8 + i * 14 + Math.random() * 4,
   delay: Math.random() * 4,
   duration: 10 + Math.random() * 6,
 }));

 const LIGHTS = Array.from({ length: 18 }).map((_, i) => ({
   id: i,
   left: 4 + i * (92 / 17),
   size: 5 + (i % 3) * 2,
   delay: Math.random() * 4,
 }));

 export const DecorationsSection = () => {
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start end", "end start"],
   });

   const garlandY = useTransform(scrollYProgress, [0, 1], [0, -40]);
   const ribbonsY = useTransform(scrollYProgress, [0, 1], [10, -30]);

   return (
     <section
       ref={ref}
       className="section-padding relative overflow-hidden py-20"
     >
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,201,143,0.16),transparent_60%)]" />

       <div className="relative z-10 mx-auto max-w-4xl text-center space-y-4">
         <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
           Dressing the night
         </p>
         <h2 className="font-display text-3xl md:text-4xl text-cream-100">
           Balloons, fairy lights & soft ribbons
         </h2>
         <p className="max-w-2xl mx-auto text-sm text-cream-200/85">
           Imagine the room glowing just for you – balloons floating gently,
           fairy lights humming softly, and ribbons following every breath of
           the evening air.
         </p>
       </div>

       {/* Fairy lights */}
       <motion.div
         className="pointer-events-none absolute left-0 right-0 top-10 mx-auto h-32 max-w-3xl"
         style={{ y: garlandY }}
       >
         <svg
           viewBox="0 0 100 40"
           preserveAspectRatio="none"
           className="h-full w-full"
         >
           <path
             d="M0 5 Q 25 22 50 12 T 100 18"
             fill="none"
             stroke="rgba(244,228,207,0.3)"
             strokeWidth="0.4"
             strokeLinecap="round"
           />
         </svg>

         {LIGHTS.map((light) => (
           <motion.span
             key={light.id}
             className="absolute rounded-full bg-gold-soft shadow-[0_0_18px_rgba(241,201,143,0.85)]"
             style={{
               width: light.size,
               height: light.size,
               left: `${light.left}%`,
               top: 26 + (Math.sin(light.left) * 6 || 0),
             }}
             initial={{ opacity: 0.2, scale: 0.7 }}
             animate={{
               opacity: [0.15, 0.8, 0.3],
               scale: [0.7, 1, 0.9],
             }}
             transition={{
               duration: 2.2,
               delay: light.delay,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />
         ))}
       </motion.div>

       {/* Balloons */}
       <div className="relative z-10 mt-16 grid grid-cols-2 gap-6 md:grid-cols-3">
         {BALLOONS.map((balloon) => (
           <motion.div
             key={balloon.id}
             className="relative flex items-end justify-center"
             initial={{ y: 12, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: balloon.id * 0.05 }}
           >
             <motion.div
               className={`relative h-32 w-24 rounded-full bg-gradient-to-b ${balloon.color} shadow-[0_18px_40px_rgba(0,0,0,0.7)]`}
               style={{ left: `${balloon.left}%` }}
               animate={{
                 y: [-10, 6, -10],
                 rotate: [-4, 3, -4],
               }}
               transition={{
                 duration: balloon.duration,
                 delay: balloon.delay,
                 repeat: Infinity,
                 ease: "easeInOut",
               }}
             >
               <div className="absolute inset-x-[22%] top-3 h-6 rounded-full bg-white/24 blur-[6px]" />
               <div className="absolute -bottom-6 left-1/2 h-6 w-[2px] -translate-x-1/2 bg-cream-200/70" />
             </motion.div>
           </motion.div>
         ))}
       </div>

       {/* Ribbons / garlands in parallax */}
       <motion.div
         className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center gap-10 opacity-70"
         style={{ y: ribbonsY }}
       >
         <div className="h-10 w-24 rotate-[-8deg] rounded-t-full bg-gradient-to-b from-rose-soft/40 via-gold-soft/35 to-transparent blur-[1px]" />
         <div className="h-10 w-24 rotate-[6deg] rounded-t-full bg-gradient-to-b from-gold-soft/40 via-cream-200/25 to-transparent blur-[1px]" />
         <div className="hidden h-10 w-24 rotate-[-4deg] rounded-t-full bg-gradient-to-b from-rose-soft/40 via-gold-soft/35 to-transparent blur-[1px] md:block" />
       </motion.div>
     </section>
   );
 };



