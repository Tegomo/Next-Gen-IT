'use client';

import { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

export default function Contact() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <>
      <Head>
        <title>Contact - NextGen IT Solutions</title>
        <meta name="description" content="Contactez NextGen IT Solutions pour tous vos besoins en solutions informatiques et transformation digitale." />
      </Head>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <div ref={containerRef} className="relative min-h-[60vh] flex items-center">
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero/contact-hero.jpg"
              alt="Contact NextGen IT"
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
                Parlons de Votre Projet
              </h1>
              <p className="mt-6 text-xl text-gray-100">
                Notre équipe d'experts est à votre écoute pour transformer vos idées en solutions 
                technologiques innovantes. Contactez-nous dès aujourd'hui pour donner vie à vos ambitions.
              </p>
              <div className="mt-8 flex space-x-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Réponse sous 24h
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-gray-100">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  100% Sécurisé
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Nos Coordonnées
                </h2>
                <ContactInfo />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 relative">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute -bottom-8 right-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Envoyez-nous un Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-96 w-full overflow-hidden">
          <Map />
        </div>
      </main>
    </>
  );
}
