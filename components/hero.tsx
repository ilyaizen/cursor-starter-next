'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <motion.h1
        className="mb-6 text-center text-5xl font-bold md:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Innovative Graphic Design
      </motion.h1>
      <motion.p
        className="mb-12 text-center text-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bringing ideas to life through creative visual solutions
      </motion.p>
    </section>
  );
}
