import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);

  const values = [
    {
      title: "Innovation",
      description: "Nous repoussons constamment les limites de la technologie pour créer des solutions novatrices.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "Nous nous efforçons d'atteindre l'excellence dans chaque aspect de notre travail.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "Nous croyons en la puissance du travail d'équipe et de la collaboration étroite avec nos clients.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Intégrité",
      description: "Nous maintenons les plus hauts standards d'éthique et de transparence dans toutes nos interactions.",
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Animation du titre
    tl.fromTo(titleRef.current,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    // Animation des valeurs avec un effet stagger
    const valueCards = valuesRef.current?.children;
    if (valueCards) {
      tl.fromTo(valueCards,
        {
          y: 50,
          opacity: 0,
          rotateY: 15,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.6"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Valeurs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Les principes qui guident nos actions et façonnent notre culture d'entreprise.
          </p>
        </div>

        <div ref={valuesRef} className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="relative group hover:scale-105 transition-transform duration-300">
              <div>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                  {value.icon}
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">{value.title}</p>
              </div>
              <div className="mt-2 ml-16 text-base text-gray-600">
                {value.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
