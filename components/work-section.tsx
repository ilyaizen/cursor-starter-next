'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const works = [
  { id: 1, title: 'Brand Identity', image: '/placeholder.svg?height=400&width=600' },
  { id: 2, title: 'Web Design', image: '/placeholder.svg?height=400&width=600' },
  { id: 3, title: 'Illustration', image: '/placeholder.svg?height=400&width=600' },
];

export default function WorkSection() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section id="work" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">Featured Work</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {works.map((work) => (
          <motion.div
            key={work.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedWork(work)}
          >
            <Image src={work.image} alt={work.title} width={600} height={400} className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h3 className="text-2xl font-bold text-white">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-full max-w-3xl rounded-lg bg-white p-8 dark:bg-gray-800">
              <h3 className="mb-4 text-2xl font-bold">{selectedWork.title}</h3>
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                width={800}
                height={600}
                className="mb-4 rounded-lg object-cover"
              />
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                This is a detailed description of the {selectedWork.title} project. It showcases John's creative process
                and the impact of the design on the client's brand.
              </p>
              <Button variant="secondary" onClick={() => setSelectedWork(null)}>
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
