import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import Services from '../components/home/Services';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <WhyUs />
      <Testimonials />
    </main>
  );
};

export default Home;
