import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Maintenance Informatique",
    description: "Support technique continu et maintenance préventive pour garantir la performance de vos systèmes.",
    icon: '/images/services/maintenance.svg',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070',
    color: '#2E4D71'
  },
  {
    id: 2,
    title: "Conseil IT",
    description: "Expertise stratégique pour optimiser votre infrastructure technologique et accélérer votre transformation digitale.",
    icon: '/images/services/conseil.svg',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
    color: '#856546'
  },
  {
    id: 3,
    title: "Gestion de Projet",
    description: "Pilotage efficace de vos projets IT avec méthodologies agiles et outils de pointe.",
    icon: '/images/services/gestion.svg',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070',
    color: '#05625C'
  },
  {
    id: 4,
    title: "Développement",
    description: "Création d'applications sur mesure et solutions web innovantes adaptées à vos besoins.",
    icon: '/images/services/developpement.svg',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070',
    color: '#5A483E'
  },
  {
    id: 5,
    title: "Infographie",
    description: "Conception graphique professionnelle pour renforcer votre identité visuelle et votre communication.",
    icon: '/images/services/infographie.svg',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070',
    color: '#2B4162'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Animer le titre
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

    // Animer les cartes de services avec un effet stagger
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(card,
        {
          y: 100,
          opacity: 0,
          rotateY: 15,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        },
        "-=0.6"
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-300">
            Des solutions IT sur mesure pour votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => setCardRef(el, index)}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  style={{ backgroundColor: `${service.color}40` }}
                />
              </div>

              <div className="relative h-[400px] p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <div className="mb-4">
                  <span className="inline-block p-3 rounded-xl bg-white/10 backdrop-blur-lg mb-4">
                    <Image
                      src={service.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>

                <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    En savoir plus
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;