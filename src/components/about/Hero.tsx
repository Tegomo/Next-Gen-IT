import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animation du contenu principal
    tl.fromTo(contentRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      }
    );

    // Animation des statistiques avec un effet stagger
    const stats = statsRef.current?.children;
    if (stats) {
      tl.fromTo(stats,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[60vh] flex items-center">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
          alt="Équipe NextGen IT Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>

      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div ref={contentRef} className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Innovons ensemble pour un avenir numérique
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            Depuis notre création, nous nous engageons à fournir des solutions technologiques 
            innovantes qui transforment la façon dont les entreprises évoluent dans le monde numérique.
          </p>
          <div ref={statsRef} className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">10+</div>
              <div className="mt-2 text-sm text-gray-200">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">200+</div>
              <div className="mt-2 text-sm text-gray-200">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">50+</div>
              <div className="mt-2 text-sm text-gray-200">Experts certifiés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
