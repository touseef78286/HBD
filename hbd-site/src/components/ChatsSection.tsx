"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CHATS = [
  {
    id: 1,
    src: "/chats/chat-1.jpg",
    title: "Morning gush",
    description: "Those sleepy compliments when we can’t stop smiling.",
  },
  {
    id: 2,
    src: "/chats/chat-2.jpg",
    title: "Goodnight chaos",
    description: "The goofy goodnight ritual that always gets spicy.",
  },
  {
    id: 3,
    src: "/chats/chat-3.jpg",
    title: "Wake-up call",
    description: "Sunrise check-ins that feel like a warm hug.",
  },
  {
    id: 4,
    src: "/chats/chat-4.jpg",
    title: "Inside jokes",
    description: "Unfiltered banter – only we get the references.",
  },
];

export const ChatsSection = () => {
  return (
    <section className="section-padding relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(241,201,143,0.16),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-cream-200/60">
            Chat memos
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-cream-100">
            Little screenshots of us
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-cream-200/85">
            These are the late-night confessions, the sleepy babytalk, and the
            unfiltered jokes that sound like pure us. I wanted them on this page
            so our words live here too.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {CHATS.map((chat, index) => (
            <motion.article
              key={chat.id}
              className="glass-panel group relative overflow-hidden rounded-[32px] border border-cream-50/8 p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative aspect-[3/5] w-full overflow-hidden rounded-[26px] border border-cream-50/10">
                <Image
                  src={chat.src}
                  alt={chat.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  priority={index === 0}
                />
              </div>
              <div className="mt-4 space-y-1 text-left">
                <p className="text-xs uppercase tracking-[0.22em] text-cream-200/70">
                  {chat.title}
                </p>
                <p className="text-sm text-cream-200/85">{chat.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};


