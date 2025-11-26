 "use client";

 import { motion, useScroll, useTransform } from "framer-motion";
 import { useRef } from "react";

 const SPARKLES = Array.from({ length: 18 }).map((_, i) => ({
   id: i,
   delay: 0.2 + Math.random() * 1.2,
   duration: 1.8 + Math.random() * 0.8,
   x: -20 + Math.random() * 40,
 }));

 export const GiftUnboxingSection = () => {
   const ref = useRef<HTMLDivElement | null>(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start end", "end start"],
   });

   const lidRotate = useTransform(scrollYProgress, [0, 1], [0, -26]);
   const lidY = useTransform(scrollYProgress, [0, 1], [0, -26]);
   const lightScale = useTransform(scrollYProgress, [0, 1], [0.4, 1.1]);
   const lightOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.9]);
   const innerOpacity = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

   return (
     <section
       ref={ref}
       className="section-padding relative flex flex-col items-center justify-center py-24"
     >
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(241,201,143,0.16),transparent_68%)]" />

       <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12 text-center md:flex-row md:items-center md:text-left">
         <div className="flex-1 space-y-4">
           <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
             A little surprise
           </p>
           <h2 className="font-display text-3xl md:text-4xl text-cream-100">
             Scroll to gently open your gift
           </h2>
           <p className="max-w-md text-sm text-cream-200/85">
             With every scroll, imagine untying the ribbon, lifting the lid, and
             finding a piece of my heart inside – glowing softly just for you.
           </p>
         </div>

         <div className="relative flex flex-1 items-center justify-center">
           <div className="relative h-64 w-64">
             {/* Light cone */}
             <motion.div
               className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[36px] bg-[radial-gradient(circle_at_center,_rgba(253,247,239,0.9),rgba(241,201,143,0.2),transparent_70%)] blur-2xl"
               style={{
                 opacity: lightOpacity,
                 scale: lightScale,
               }}
             />

             {/* Box base */}
             <div className="absolute inset-x-6 bottom-10 h-32 rounded-[26px] bg-gradient-to-b from-rose-soft/70 via-gold-soft/80 to-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.9)]">
               <div className="absolute inset-x-0 top-5 h-[3px] bg-gradient-to-r from-cream-200/60 via-gold-soft to-cream-200/60" />
               <div className="absolute inset-y-6 left-1/2 w-[6px] -translate-x-1/2 bg-gradient-to-b from-cream-200 via-gold-soft to-cream-200" />
             </div>

             {/* Lid */}
             <motion.div
               className="absolute inset-x-4 bottom-[8.5rem] h-10 origin-bottom rounded-[24px] bg-gradient-to-b from-cream-200 via-cream-100 to-gold-soft shadow-[0_18px_40px_rgba(0,0,0,0.85)]"
               style={{ rotateX: lidRotate, y: lidY }}
             >
               <div className="absolute inset-y-1 left-1/2 w-[6px] -translate-x-1/2 bg-gradient-to-b from-rose-soft via-gold-soft to-rose-soft" />
             </motion.div>

             {/* Inner content */}
             <motion.div
               className="absolute inset-0 flex items-center justify-center"
               style={{ opacity: innerOpacity }}
             >
               <div className="flex flex-col items-center gap-2">
                 <motion.span
                   className="text-4xl"
                   initial={{ scale: 0.8 }}
                   animate={{ scale: [0.9, 1.1, 0.9] }}
                   transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut",
                   }}
                 >
                   💛
                 </motion.span>
                 <p className="text-xs uppercase tracking-[0.22em] text-cream-200/80">
                   My heart, wrapped for you
                 </p>
               </div>
             </motion.div>

             {/* Sparkles */}
             <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
               {SPARKLES.map((sparkle, index) => (
                 <motion.span
                   key={sparkle.id}
                   className="absolute h-1 w-1 rounded-full bg-cream-100 shadow-[0_0_16px_rgba(253,247,239,0.95)]"
                   initial={{ opacity: 0, y: 10, x: 0, scale: 0.6 }}
                   animate={{
                     opacity: [0, 1, 0],
                     y: [-6 - index * 2, -36 - index * 2],
                     x: sparkle.x,
                     scale: [0.6, 1.1, 0.4],
                   }}
                   transition={{
                     delay: sparkle.delay,
                     duration: sparkle.duration,
                     repeat: Infinity,
                     ease: "easeOut",
                   }}
                 />
               ))}
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };



