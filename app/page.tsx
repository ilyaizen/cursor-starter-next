import Hero from '@/components/hero';
import WorkSection from '@/components/work-section';
import AboutSection from '@/components/about-section';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-20">
      <Hero />
      <WorkSection />
      <AboutSection />
    </main>
  );
}
