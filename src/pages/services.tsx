'use client';

import Hero from '@/components/services/Hero';
import ServicesList from '@/components/services/ServicesList';
import CTA from '@/components/services/CTA';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesList />
      <CTA />
    </div>
  );
}
