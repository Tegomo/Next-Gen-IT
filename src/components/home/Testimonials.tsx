import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "EcoTech Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    quote: "NextGen IT a transformé notre infrastructure digitale. Leur expertise en maintenance et support nous permet de rester concentrés sur notre cœur de métier.",
  },
  {
    id: 2,
    name: "David Okoye",
    role: "Directeur Technique",
    company: "InnovTech",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1000",
    quote: "Le conseil stratégique de NextGen IT nous a permis de réaliser notre transformation digitale avec succès. Une équipe à l'écoute et professionnelle.",
  },
  {
    id: 3,
    name: "Marie Leroy",
    role: "Directrice des Opérations",
    company: "DataFlow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
    quote: "La gestion de projet chez NextGen IT est exemplaire. Délais respectés, communication transparente et résultats au-delà de nos attentes.",
  },
  {
    id: 4,
    name: "Marcus Johnson",
    role: "CEO",
    company: "TechForward",
    image: "https://images.unsplash.com/photo-1578674473215-9e07ee2e577d?q=80&w=1000",
    quote: "Leur approche du développement est innovante et efficace. NextGen IT a su comprendre nos besoins et livrer des solutions performantes.",
  },
  {
    id: 5,
    name: "Sarah Chen",
    role: "Responsable Innovation",
    company: "FutureTech",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000",
    quote: "Une collaboration exceptionnelle. L'équipe de NextGen IT a su nous guider vers les meilleures solutions technologiques.",
  },
  {
    id: 6,
    name: "Aminata Diallo",
    role: "Directrice Générale",
    company: "AfriTech Solutions",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000",
    quote: "NextGen IT a été un partenaire clé dans notre expansion digitale. Leur expertise technique et leur professionnalisme sont remarquables.",
  }
];

const Testimonials = () => {
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

    // Animate the title
    tl.fromTo(titleRef.current,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    // Animate testimonial cards with a stagger effect
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(card,
        {
          y: 60,
          opacity: 0,
          rotateY: 15
        },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-300">
            Découvrez ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => setCardRef(el, index)}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-300">{testimonial.role}</p>
                  <p className="text-blue-400">{testimonial.company}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
