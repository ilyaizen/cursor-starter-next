'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">About John</h2>
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            John Doe is a passionate graphic designer with over 10 years of experience in creating stunning visual
            solutions for brands across various industries. His innovative approach and attention to detail have earned
            him recognition in the design community.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With a keen eye for aesthetics and a deep understanding of design principles, John brings creativity and
            functionality together in every project he undertakes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
