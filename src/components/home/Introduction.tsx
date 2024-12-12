import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Introduction: React.FC = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(contentRef.current,
      { 
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    )
    .fromTo(imageRef.current,
      {
        scale: 0.8,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} id="welcome" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Éléments décoratifs */}
          <div className="absolute -top-40 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          {/* Contenu principal */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div ref={contentRef}>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Bienvenue chez NextGen IT Solutions
                </h2>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Depuis notre création, nous nous engageons à fournir des solutions informatiques innovantes 
                  qui transforment la façon dont les entreprises opèrent dans le monde numérique d'aujourd'hui.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Notre équipe d'experts passionnés combine expertise technique et compréhension approfondie 
                  des besoins business pour délivrer des solutions sur mesure qui propulsent votre croissance.
                </p>
                <div className="mt-8">
                  <a
                    href="#services"
                    className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    Découvrir nos services
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div ref={imageRef} className="relative">
                <Image
                  src="/images/team.jpg"
                  alt="L'équipe NextGen IT Solutions"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Statistiques */}
            <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="mt-2 text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">200+</div>
                <div className="mt-2 text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="mt-2 text-sm text-gray-600">Experts certifiés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">98%</div>
                <div className="mt-2 text-sm text-gray-600">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
