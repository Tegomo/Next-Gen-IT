import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/components/layout/Layout';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Configuration globale de ScrollTrigger
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      markers: false // Mettre à true pour le débogage
    });

    return () => {
      // Nettoyage des ScrollTriggers lors du démontage
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
