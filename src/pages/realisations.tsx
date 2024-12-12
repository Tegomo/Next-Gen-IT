'use client';

import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Type pour les projets
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  technologies: string[];
};

// Données des projets
const projects: Project[] = [
  {
    id: 1,
    title: "Plateforme E-commerce B2B",
    description: "Développement d'une plateforme de commerce électronique B2B complète avec gestion des stocks en temps réel et intégration ERP.",
    imageUrl: "/images/realisations/ecommerce.jpg",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Docker"]
  },
  {
    id: 2,
    title: "Application Mobile de Santé",
    description: "Création d'une application mobile pour le suivi médical des patients avec tableaux de bord personnalisés et notifications en temps réel.",
    imageUrl: "/images/realisations/sante.jpg",
    category: "Santé",
    technologies: ["React Native", "Firebase", "TypeScript"]
  },
  {
    id: 3,
    title: "Système de Gestion Industrielle",
    description: "Implémentation d'un système de gestion industrielle pour l'optimisation des processus de production et la maintenance prédictive.",
    imageUrl: "/images/realisations/industrie.jpg",
    category: "Industrie",
    technologies: ["Python", "TensorFlow", "PostgreSQL", "AWS"]
  },
  {
    id: 4,
    title: "Plateforme de Formation en Ligne",
    description: "Développement d'une plateforme LMS complète avec cours interactifs, suivi des progrès et certification automatisée.",
    imageUrl: "/images/realisations/formation.jpg",
    category: "Education",
    technologies: ["Vue.js", "Django", "AWS", "Redis"]
  },
  {
    id: 5,
    title: "Solution IoT Smart Building",
    description: "Mise en place d'une solution IoT pour la gestion intelligente des bâtiments avec monitoring énergétique en temps réel.",
    imageUrl: "/images/realisations/smart-building.jpg",
    category: "IoT",
    technologies: ["IoT", "Azure", "Node.js", "MongoDB"]
  },
  {
    id: 6,
    title: "Application de Gestion RH",
    description: "Développement d'une suite complète d'outils RH incluant gestion des congés, recrutement et évaluation des performances.",
    imageUrl: "/images/realisations/rh.jpg",
    category: "RH",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker"]
  }
];

export default function Realisations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation de la section hero
    const heroTl = gsap.timeline();
    
    heroTl.fromTo(contentRef.current,
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

    // Animation de la grille de projets
    const projectsTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Animation des cartes de projets avec un effet stagger
    if (projectsGridRef.current) {
      const projectCards = gsap.utils.toArray<HTMLElement>(
        projectsGridRef.current.children
      );
      
      projectsTl.fromTo(projectCards,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
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
        }
      );
    }

    // Animation de la section CTA
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    ctaTl.fromTo(ctaRef.current,
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

    return () => {
      heroTl.kill();
      projectsTl.kill();
      ctaTl.kill();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nos Réalisations - NextGen IT Solutions</title>
        <meta name="description" content="Découvrez nos réalisations et projets en transformation digitale, développement web et solutions IT sur mesure." />
      </Head>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <div ref={containerRef} className="relative min-h-[60vh] flex items-center">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/realisations-hero.jpg"
              alt="Réalisations NextGen IT"
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
                Nos Réalisations
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Découvrez comment nous transformons les défis de nos clients en solutions innovantes. 
                Chaque projet est une histoire de succès et d'innovation technologique.
              </p>
              <div className="mt-8 flex space-x-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  +50 Projets Réussis
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  100% Satisfaction Client
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid Section */}
        <div ref={projectsRef} className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div ref={projectsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div ref={ctaRef} className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Prêt à lancer votre projet ?</span>
              <span className="block text-blue-200">Contactez-nous dès aujourd'hui.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Commencer
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
