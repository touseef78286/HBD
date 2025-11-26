 "use client";

 import { motion } from "framer-motion";

 const MOMENTS = [
   {
     id: 1,
     title: "The way you say my name",
     text: "It turns an ordinary moment into something I want to remember forever.",
   },
   {
     id: 2,
     title: "Your quiet strength",
     text: "Even on the hardest days, you carry a softness that keeps me grounded.",
   },
   {
     id: 3,
     title: "Us, right now",
     text: "No matter where we are, every version of &ldquo;us&rdquo; feels like home.",
   },
 ];

 export const BestMomentsSection = () => {
   return (
     <section className="section-padding relative py-20">
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,201,143,0.18),transparent_70%)]" />

       <div className="relative z-10 mx-auto max-w-5xl">
         <div className="mb-10 text-center space-y-3">
           <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
             Highlight reel
           </p>
           <h2 className="font-display text-3xl md:text-4xl text-cream-100">
             A few of my favorite moments with you
           </h2>
           <p className="mx-auto max-w-2xl text-sm text-cream-200/85">
             These aren&apos;t just memories – they&apos;re the scenes that play
             in my mind when I think about how lucky I am to have you, Sawera.
           </p>
         </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
           {MOMENTS.map((moment, index) => (
             <motion.article
               key={moment.id}
               className="relative"
               initial={{ opacity: 0, y: 28 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
             >
               <motion.div
                 className="glass-panel group relative h-full rounded-[28px] border border-gold-soft/30 bg-black/60 p-[1px]"
                 animate={{
                   rotateY: [-8, 8],
                 }}
                 transition={{
                   repeat: Infinity,
                   duration: 16 + index * 4,
                   ease: "easeInOut",
                 }}
                 whileHover={{
                   rotateY: 0,
                   scale: 1.02,
                   transition: { duration: 0.6, ease: "easeOut" },
                 }}
               >
                 <div className="relative h-full rounded-[26px] bg-gradient-to-b from-cream-50/6 via-black/90 to-black/95 p-6">
                   <div className="pointer-events-none absolute inset-x-8 top-0 h-10 rounded-b-full bg-gold-soft/15 blur-2xl" />

                   <div className="relative z-10 space-y-3 text-left">
                     <p className="text-[11px] uppercase tracking-[0.22em] text-cream-200/60">
                       Moment {moment.id.toString().padStart(2, "0")}
                     </p>
                     <h3 className="font-display text-lg text-cream-100">
                       {moment.title}
                     </h3>
                     <p className="text-sm text-cream-200/85">{moment.text}</p>
                   </div>

                   {/* Reflection */}
                   <div className="pointer-events-none absolute inset-x-4 bottom-0 h-12 rounded-[18px] bg-gradient-to-t from-gold-soft/35 via-gold-soft/0 to-transparent opacity-70 blur-xl" />
                 </div>
               </motion.div>
             </motion.article>
           ))}
         </div>
       </div>
     </section>
   );
 };



