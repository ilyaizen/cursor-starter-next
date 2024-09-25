'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Hero section
function Hero() {
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

// Work section
const works = [
  { id: 1, title: 'Brand Identity', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Web Design', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Illustration', image: '/placeholder.svg?height=400&width=600' },
];

function WorkSection() {
  return (
    <section id="work" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">Featured Work</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {works.map((work) => (
          <motion.div
            key={work.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Image src={work.image} alt={work.title} width={600} height={400} className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h3 className="text-2xl font-bold text-white">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// About section
function AboutSection() {
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

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <Hero />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
