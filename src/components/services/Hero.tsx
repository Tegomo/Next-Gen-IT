'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div ref={containerRef} className="relative min-h-[60vh] flex items-center">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/services-hero.jpg"
          alt="Services NextGen IT"
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
            Nos Services
          </h1>
          <p className="mt-6 text-xl text-gray-100">
            Des solutions technologiques innovantes pour propulser votre entreprise vers l'avenir.
            Découvrez notre gamme complète de services IT sur mesure.
          </p>
          <div className="mt-8 flex space-x-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Solutions Personnalisées
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Support 24/7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
