import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Sarah Martin',
    role: 'Directrice Générale',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop',
    bio: 'Plus de 15 ans d\'expérience dans le secteur IT',
  },
  {
    name: 'Thomas Chen',
    role: 'Directeur Technique',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070',
    bio: 'Expert en architecture cloud et systèmes distribués',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Lead Designer UX',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    bio: 'Passionnée par la création d\'expériences utilisateur intuitives',
  },
  {
    name: 'Alexandre Dubois',
    role: 'Lead Développeur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987',
    bio: 'Spécialiste en développement full-stack et DevOps',
  },
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const teamRef = useRef<HTMLDivElement | null>(null);

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

    // Animation des cartes d'équipe avec un effet stagger
    const teamCards = teamRef.current?.children;
    if (teamCards) {
      tl.fromTo(teamCards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateY: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
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
    <div ref={containerRef} className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Notre Équipe
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Des experts passionnés qui donnent vie à vos projets numériques.
          </p>
        </div>

        <div ref={teamRef} className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600">{member.role}</p>
                <p className="mt-2 text-base text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
