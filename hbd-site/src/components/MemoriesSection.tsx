 "use client";

 import { motion } from "framer-motion";
 import Image from "next/image";

const MEMORIES = [
   {
     id: 1,
     title: "Our first quiet evening",
     caption: "The way you laughed that night still echoes in my heart.",
   },
   {
     id: 2,
     title: "The little walks",
     caption: "Hands brushing, eyes meeting – the world getting softer.",
   },
   {
     id: 3,
     title: "Your smile in the sunlight",
     caption: "I still remember how everything else faded around you.",
   },
   {
     id: 4,
     title: "Late night talks",
     caption: "When the world slept, we built our own little universe.",
   },
   {
     id: 5,
     title: "Shared dreams",
     caption: "Every plan feels better when it starts with you.",
   },
   {
     id: 6,
     title: "Every ordinary day",
     caption: "Because with you, even simple moments feel cinematic.",
   },
 ];

const MEMORY_IMAGES = [
  "/memory-1.svg",
  "/memory-2.svg",
  "/memory-3.svg",
  "/memory-2.svg",
  "/memory-1.svg",
  "/memory-3.svg",
];

 export const MemoriesSection = () => {
   return (
     <section className="section-padding relative py-20">
       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(17,11,30,0.9),transparent_70%)]" />

       <div className="relative z-10 mx-auto max-w-5xl">
         <div className="mb-10 text-center space-y-3">
           <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
             Little frames of us
           </p>
           <h2 className="font-display text-3xl md:text-4xl text-cream-100">
             Memories that feel like Polaroids
           </h2>
           <p className="mx-auto max-w-2xl text-sm text-cream-200/85">
             Imagine these as tiny photos pinned to a board – every one a
             moment I&apos;d choose to live again, simply because you&apos;re in
             it.
           </p>
         </div>

         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {MEMORIES.map((memory, index) => (
             <motion.article
               key={memory.id}
               className="group relative mx-auto w-full max-w-xs cursor-default"
               initial={{
                 opacity: 0,
                 x: index % 2 === 0 ? -24 : 24,
                 y: 24,
               }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.55, delay: index * 0.05 }}
             >
               <div
                 className={`glass-panel relative rounded-[26px] border border-cream-50/8 p-3 pb-6 shadow-[0_26px_60px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg] ${
                   index % 3 === 0
                     ? "-rotate-2"
                     : index % 3 === 1
                       ? "rotate-1"
                       : "-rotate-1"
                 }`}
               >
                 <div className="relative overflow-hidden rounded-[20px] border border-cream-50/10 bg-gradient-to-b from-cream-100/8 via-cream-100/3 to-black/80">
                   <div className="relative h-40 w-full">
                     <Image
                       src={MEMORY_IMAGES[index % MEMORY_IMAGES.length]}
                       alt={memory.title}
                       fill
                       className="object-cover"
                     />
                     <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                   </div>
                   <div className="px-3 pb-3 pt-2 text-left">
                     <p className="text-[11px] uppercase tracking-[0.18em] text-cream-200/70">
                       {memory.title}
                     </p>
                     <p className="mt-1 text-xs text-cream-200/85">
                       {memory.caption}
                     </p>
                   </div>
                 </div>

                 <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-7 rounded-[10px] bg-black/90 shadow-[0_18px_40px_rgba(0,0,0,0.95)] blur-md" />
               </div>
             </motion.article>
           ))}
         </div>
       </div>
     </section>
   );
 };


