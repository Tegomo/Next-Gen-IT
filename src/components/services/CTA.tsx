'use client';

import { useRef } from 'react';

export default function CTA() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-blue-600">
      <div ref={contentRef} className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Prêt à transformer votre entreprise ?</span>
          <span className="block text-blue-200">Contactez-nous dès aujourd'hui.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Commencer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}