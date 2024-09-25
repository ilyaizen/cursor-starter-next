'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 py-2 backdrop-blur-md dark:bg-gray-900/80' : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4">
        <div
          className={`font-bold text-gray-800 transition-all duration-300 dark:text-white ${
            scrolled ? 'text-2xl' : 'text-3xl'
          }`}
        >
          John Doe
        </div>
        <nav className="hidden space-x-4 md:flex">
          {['Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-gray-600 transition-all duration-300 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                scrolled ? 'text-base' : 'text-lg'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
