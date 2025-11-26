 "use client";

 import { motion } from "framer-motion";

 export const WishBoard = () => {
   return (
     <section className="section-padding relative py-24">
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(12,8,20,0.96),transparent_78%)]" />

       <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center md:flex-row md:items-stretch md:text-left">
         <div className="flex-1 space-y-4">
           <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
             From my heart to yours
           </p>
           <h2 className="font-display text-3xl md:text-4xl text-cream-100">
             A wish written just for you
           </h2>
           <p className="max-w-md text-sm text-cream-200/85">
             Imagine this as a card I would quietly slide toward you, with my
             handwriting catching the light and every word chosen only for you,
             my love.
           </p>
         </div>

         <motion.div
           className="glass-panel relative flex-1 rounded-[30px] border border-cream-50/10 bg-gradient-to-b from-cream-100/4 via-black/92 to-black/98 p-8 md:p-10"
           initial={{ opacity: 0, y: 22 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.4 }}
           transition={{ duration: 0.7, ease: "easeOut" }}
         >
           <div className="pointer-events-none absolute inset-x-8 top-0 h-16 rounded-b-[40px] bg-cream-100/6 blur-2xl" />

           <div className="relative z-10 space-y-6">
             <motion.p
               className="font-display text-2xl md:text-[26px] text-cream-100"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, duration: 0.8 }}
             >
               Happy Birthday,{" "}
               <span className="text-gold-soft">My Love, Sawera</span>
               <span className="text-rose-soft"> 💛</span>
               <span className="block text-base md:text-lg text-cream-200/85 mt-3">
                 – Touseef
               </span>
             </motion.p>

             {/* Handwriting underline */}
             <motion.svg
               viewBox="0 0 260 40"
               className="mt-2 h-16 w-full text-gold-soft"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
             >
               <motion.path
                 d="M5 30 Q 60 10 120 24 T 255 26"
                 fill="none"
                 stroke="url(#wish-gradient)"
                 strokeWidth="2.6"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeDasharray="230"
                 strokeDashoffset="230"
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 2.6, ease: "easeInOut", delay: 0.7 }}
               />
               <defs>
                 <linearGradient
                   id="wish-gradient"
                   x1="0%"
                   y1="0%"
                   x2="100%"
                   y2="0%"
                 >
                   <stop offset="0%" stopColor="#f1c98f" stopOpacity="0.1" />
                   <stop offset="35%" stopColor="#f4e4cf" stopOpacity="0.9" />
                   <stop offset="70%" stopColor="#e6b7b2" stopOpacity="0.95" />
                   <stop offset="100%" stopColor="#f1c98f" stopOpacity="0.3" />
                 </linearGradient>
               </defs>
             </motion.svg>

             <p className="text-xs uppercase tracking-[0.24em] text-cream-200/60">
               This wish is written in every quiet moment I think of you.
             </p>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };



