import Hero from '@/components/about/Hero';
import Mission from '@/components/about/Mission';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Values />
      <Team />
    </div>
  );
}
