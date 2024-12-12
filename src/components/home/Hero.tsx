import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
    .fromTo(".hero-title",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      "-=0.5"
    )
    .fromTo(".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(".hero-buttons",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Arrière-plan avec dégradé et overlay */}
      <div className="absolute inset-0">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/tech-bg.jpg"
            alt="Technology Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        {/* Overlay dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90">
          {/* Motif de points */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Contenu */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div ref={textRef} className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              <span className="hero-title block">NextGen IT Solutions</span>
              <span className="hero-title block text-blue-300 mt-2">Votre Partenaire Digital</span>
            </h1>
            <p className="hero-text mt-6 text-lg leading-8 text-gray-100">
              Nous proposons une gamme complète de services technologiques, incluant le développement de sites web, la création d'applications web et mobiles, ainsi que l'administration de systèmes et réseaux. Notre engagement éco-responsable se traduit par des solutions de recyclage technologique.
            </p>
            <div className="hero-buttons mt-10 flex gap-x-6 justify-center lg:justify-start">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
              >
                Discuter de votre projet
              </a>
              <a
                href="/services"
                className="text-base font-semibold leading-6 text-white hover:text-blue-300 transition-colors duration-300 flex items-center px-5 py-3"
              >
                Découvrir nos services <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Image avec animations */}
          <div ref={imageRef} className="hidden lg:block relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="relative">
              <Image
                src="/images/tech-workspace.jpg"
                alt="NextGen IT Solutions Services"
                width={600}
                height={500}
                className="w-full h-auto object-contain rounded-lg transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#welcome" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300">
          <span className="text-sm mb-2">Découvrir</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
