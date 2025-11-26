 "use client";

 import { motion } from "framer-motion";

 const BURSTS = Array.from({ length: 6 }).map((_, i) => ({
   id: i,
   delay: 0.4 + i * 0.4,
   x: i % 3 === 0 ? -80 : i % 3 === 1 ? 70 : 0,
   y: i < 3 ? -40 : -80,
   color:
     i % 3 === 0
       ? "bg-gold-soft"
       : i % 3 === 1
         ? "bg-rose-soft"
         : "bg-cream-200",
 }));

 export const FireworksFinale = () => {
   return (
     <section className="section-padding relative py-24">
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(3,2,6,0.96),transparent_70%)]" />

       <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
         <div className="space-y-3">
           <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
             Finale
           </p>
           <h2 className="font-display text-3xl md:text-4xl text-cream-100">
             For you, always
           </h2>
           <p className="max-w-xl text-sm text-cream-200/85">
             As the lights fade and the night slows down, remember this: you
             are loved, cherished, and celebrated – far beyond this page.
           </p>
         </div>

         <div className="relative h-72 w-full max-w-xl overflow-hidden rounded-[32px] border border-cream-50/10 bg-gradient-to-b from-black/95 via-black/96 to-charcoal shadow-[0_26px_60px_rgba(0,0,0,0.95)]">
           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(241,201,143,0.25),transparent_70%)]" />

           {/* Ground glow */}
           <div className="pointer-events-none absolute inset-x-16 bottom-4 h-10 rounded-full bg-gold-soft/40 blur-3xl" />

           {/* Fireworks bursts */}
           <div className="relative flex h-full items-center justify-center">
             {BURSTS.map((burst) => (
               <motion.div
                 key={burst.id}
                 className="absolute"
                 initial={{ opacity: 0, scale: 0.3 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, amount: 0.6 }}
                 transition={{
                   delay: burst.delay,
                   duration: 0.9,
                   ease: "easeOut",
                 }}
                 animate={{
                   scale: [0.3, 1, 1.1, 0.2],
                   opacity: [0, 1, 0.9, 0],
                 }}
                 style={{ x: burst.x, y: burst.y }}
               >
                 {[...Array(10)].map((_, index) => (
                   <motion.span
                     // eslint-disable-next-line react/no-array-index-key
                     key={index}
                     className={`absolute h-[3px] w-10 origin-left rounded-full ${burst.color} shadow-[0_0_18px_rgba(241,201,143,0.9)]`}
                     style={{
                       rotate: (index * 36) as number,
                     }}
                     initial={{ scaleX: 0 }}
                     animate={{ scaleX: [0, 1, 0.4, 0] }}
                     transition={{
                       delay: burst.delay + 0.1,
                       duration: 1.4,
                       repeat: Infinity,
                       repeatDelay: 2.4,
                       ease: "easeOut",
                     }}
                   />
                 ))}
               </motion.div>
             ))}

             {/* Center text */}
             <motion.div
               className="relative z-10 flex flex-col items-center gap-2"
               initial={{ opacity: 0, y: 16 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 2.4, duration: 0.9 }}
             >
               <p className="text-xs uppercase tracking-[0.26em] text-cream-200/80">
                 Happy Birthday,{" "}
                 <span className="text-gold-soft">my dearest, Sawera</span>
               </p>
               <p className="text-[11px] text-cream-200/75">
                 Close this tab knowing that somewhere, I&apos;m thinking of
                 you.
               </p>
             </motion.div>
           </div>
         </div>
       </div>
     </section>
   );
 };



