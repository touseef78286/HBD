 "use client";

 import { motion } from "framer-motion";

 export const HeaderBar = () => {
   return (
     <header className="section-padding pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-center">
       <motion.div
         className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-cream-200/80 shadow-md shadow-black/70 backdrop-blur-xl md:mt-6"
         initial={{ opacity: 0, y: -8 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
       >
         <span className="h-[7px] w-[7px] rounded-full bg-gold-soft shadow-[0_0_14px_rgba(241,201,143,0.9)]" />
         <span className="font-medium">Sawera&apos;s Day</span>
       </motion.div>
     </header>
   );
 };



