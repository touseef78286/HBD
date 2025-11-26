 "use client";

 import { motion } from "framer-motion";

 const LINES = [
   "Thanks for being someone I can call my love, Sawera.",
   "You are the calm in my chaos and the glow in my quiet moments.",
   "Today is your day — and I just want the whole world to feel softer for you.",
   "Let this little page be a love letter you can always come back to.",
   "– Touseef",
 ];

 export const CinematicMessage = () => {
   return (
     <section className="section-padding relative py-24">
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(10,6,18,0.96),transparent_76%)]" />

       <div className="relative z-10 mx-auto flex max-w-3xl flex-col gap-8 text-center">
         <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
           A quiet cinematic moment
         </p>

         <motion.div
           className="glass-panel relative overflow-hidden rounded-[32px] border border-cream-50/10 bg-gradient-to-b from-black/80 via-black/92 to-black/98 px-8 py-10 md:px-12 md:py-14"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.4 }}
           transition={{ duration: 0.9, ease: "easeOut" }}
         >
           <div className="pointer-events-none absolute inset-x-12 top-0 h-20 rounded-b-[40px] bg-gold-soft/14 blur-3xl" />

           <div className="relative z-10 space-y-4 text-left md:text-center">
             {LINES.map((line, index) => (
               <motion.p
                 key={line}
                 className={`text-sm md:text-base text-cream-200/90 ${
                   index === 0
                     ? "font-display text-lg md:text-xl text-cream-100"
                     : ""
                 } ${index === LINES.length - 1 ? "mt-4 text-right md:text-center text-gold-soft" : ""}`}
                 initial={{ opacity: 0, y: 18, letterSpacing: "0.22em" }}
                 whileInView={{
                   opacity: 1,
                   y: 0,
                   letterSpacing: "0.06em",
                 }}
                 viewport={{ once: true }}
                 transition={{
                   duration: 0.8,
                   delay: 0.25 + index * 0.25,
                   ease: "easeOut",
                 }}
               >
                 {line}
               </motion.p>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };



